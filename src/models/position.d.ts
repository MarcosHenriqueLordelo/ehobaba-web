const POSITIONS: string[] = [
  'GOL',
  'ZAG',
  'LD',
  'LE',
  'VOL',
  'MD',
  'ME',
  'SA',
  'PD',
  'PE',
  'ATA',
  'LB',
  'ADD',
  'ADE',
  'MC',
  'MEI',
] as const;

type Position = typeof POSITIONS[number];
