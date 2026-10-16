import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type Landing = CollectionEntry<'landings'>;

export async function getSortedLandings(): Promise<Landing[]> {
  const landings = await getCollection('landings');
  return landings.sort((a, b) => a.data.order - b.data.order);
}
