import type { TrainingEntry, BlogEntry, GenericEntry } from "@/types";

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

// Sort by chapter (specific to Training entries)
export const sortByChapter = (entries: TrainingEntry[]): TrainingEntry[] => {
  return [...entries].sort((a, b) => {
    const chapterA = a.data.chapter ?? Number.MAX_SAFE_INTEGER;
    const chapterB = b.data.chapter ?? Number.MAX_SAFE_INTEGER;
    return chapterA - chapterB;
  });
};

// Sort by module (specific to Training entries)
export const sortByModule = (entries: TrainingEntry[]): TrainingEntry[] => {
  return [...entries].sort((a, b) => {
    const moduleA = a.data.module ?? Number.MAX_SAFE_INTEGER;
    const moduleB = b.data.module ?? Number.MAX_SAFE_INTEGER;
    return moduleA - moduleB;
  });
};