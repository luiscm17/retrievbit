import type { GenericEntry } from "@/types";

// Sort by date
export const sortByDate = (entries: GenericEntry[]): GenericEntry[] => {
  const sortedEntries = entries.sort(
    (a: any, b: any) =>
      new Date(b.data.date && b.data.date).valueOf() -
      new Date(a.data.date && a.data.date).valueOf(),
  );
  return sortedEntries;
};

// Sort by title
export const sortByTitle = (entries: GenericEntry[]): GenericEntry[] => {
  const sortedEntries = entries.sort((a: any, b: any) =>
    a.data.title.localeCompare(b.data.title),
  );
  return sortedEntries;
};

// Sort by random
export const sortByRandom = (entries: GenericEntry[]): GenericEntry[] => {
  const sortedEntries = entries.sort(() => Math.random() - 0.5);
  return sortedEntries;
};


// Sort by chapter
export const sortByChapter = (entries: GenericEntry[]): GenericEntry[] => {
  const sortedEntries = entries.sort((a: any, b: any) =>
    a.data.chapter.localeCompare(b.data.chapter),
  );
  return sortedEntries;
};

// Sort by module
export const sortByModule = (entries: GenericEntry[]): GenericEntry[] => {
  const sortedEntries = entries.sort((a: any, b: any) =>
    a.data.module.localeCompare(b.data.module),
  );
  return sortedEntries;
};

