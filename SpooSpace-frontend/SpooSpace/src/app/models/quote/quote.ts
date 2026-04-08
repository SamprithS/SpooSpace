// This is a TYPE. It cannot be used in 'declarations' or 'imports' arrays.
export interface Quote {
  id: number;
  quoteText: string;
  memberName: string;
  groupName: string;
  mood: 'COMFORT' | 'CONFIDENCE' | 'SOFT' | 'HAPPY' | 'INSPIRATION';
  imageUrl: string;
}