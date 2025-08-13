import { getEntry, getCollection, type CollectionKey } from "astro:content";
import type { GenericEntry } from "@/types";

export const getIndex = async (
  collection: CollectionKey,
  lang: string
): Promise<GenericEntry | undefined> => {
  const index = await getEntry(collection, `${lang}/${collection.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}/-index`);
  return index;
}

export const getEntries = async (
  collection: CollectionKey,
  lang: string,
  sortFunction?: ((array: any[]) => any[]),
  noIndex = true,
  noDrafts = true,
): Promise<GenericEntry[]> => {
  // Convertir el nombre de la colección a formato kebab-case
  const collectionName = collection.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  
  // Construir el patrón para matchear rutas con prefijo de idioma
  const pattern = new RegExp(`^${lang}/${collectionName}/`);
  
  // Obtener todas las entradas que coincidan con el patrón
  let entries: GenericEntry[] = [];
  try {
    entries = await getCollection(collection, ({ id }: { id: string }) => {
      return id.match(pattern) !== null;
    });
  } catch (error) {
    console.error(`Error al obtener entradas para la colección ${collection}:`, error);
    return [];
  }

  // Filtrar índices si es necesario
  if (noIndex) {
    entries = entries.filter(entry => !entry.id.endsWith('-index'));
  }

  // Filtrar borradores si es necesario
  if (noDrafts) {
    entries = entries.filter(entry => !('draft' in entry.data) || !entry.data.draft);
  }

  // Ordenar si se proporciona una función de ordenamiento
  if (sortFunction) {
    entries = sortFunction(entries);
  }

  return entries;
};

// Fetch all pages in all specified collections, flattened into a single array
export const getEntriesBatch = async (
  collections: CollectionKey[],
  lang: string,
  sortFunction?: ((array: any[]) => any[]),
  noIndex = true,
  noDrafts = true,
): Promise<GenericEntry[]> => {
  const allCollections = await Promise.all(
    collections.map(async (collection) => {
      return await getEntries(collection, lang, sortFunction, noIndex, noDrafts);
    })
  );
  return allCollections.flat();
};

// Fetch top-level folders within a collection
export const getGroups = async (
  collection: CollectionKey,
  lang: string,
  sortFunction?: ((array: any[]) => any[]),
  noDrafts = true,
): Promise<GenericEntry[]> => {
  let entries = await getEntries(collection, lang, sortFunction, false, noDrafts);
  entries = entries.filter((entry: GenericEntry) => {
    const segments = entry.id.split("/");
    // La estructura esperada es: /lang/collection/grupo/-index
    return segments.length === 4 && segments[3] == "-index";
  });
  return entries;
};

// Fetch entries within the specified collection and group
export const getEntriesInGroup = async (
  collection: CollectionKey,
  lang: string,
  groupSlug: string,
  sortFunction?: ((array: any[]) => any[]),
  noDrafts = true,
): Promise<GenericEntry[]> => {
  // Primero obtenemos todas las entradas sin filtrar
  let entries = [];
  try {
    entries = await getCollection(collection, ({ id }: { id: string }) => {
      // Filtramos solo las entradas que pertenecen al idioma y colección correctos
      return id.startsWith(`${lang}/`);
    });
  } catch (error) {
    console.error('Error in getCollection:', error);
    return [];
  }

  // Luego filtramos para obtener solo las entradas del grupo específico
  const filteredEntries = entries.filter((entry: GenericEntry) => {
    const segments = entry.id.split('/');
    
    // La estructura debe ser: lang/collection/groupSlug/filename
    // Solo verificamos el idioma y el slug del grupo, no el nombre de la colección
    return (
      segments.length === 4 && // lang/collection/groupSlug/filename
      segments[0] === lang &&
      segments[2] === groupSlug &&
      !entry.id.endsWith('-index')
    );
  });

  // Aplicamos la función de ordenamiento si se proporciona
  if (sortFunction) {
    return sortFunction(filteredEntries);
  }

  return filteredEntries;
};
