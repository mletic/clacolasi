import {parse} from 'papaparse';

const BASE_URL = `./data`;

interface SampleDataRow {
  pol: string; // Gender column
  obrazovanje: string; // Education column
  mesto_latitude: string; // Latitude column
  mesto_longitude: string; // Longitude column
  country: string; // Country column
  mesto_opstina: string; // Municipality column
  Language: string; // Language column
}

export type SampleDataItem = {
  id: string;
  label: string;
  data: SampleDataRow[];
};

export const fetchSampleData = async (fileName: string): Promise<[SampleDataItem]> => {
  const response = await fetch(`${BASE_URL}/${fileName}.csv`);
  const text = await response.text(); // Read response as text
  const {data} = parse(text, {header: true}); // Parse CSV text

  return [
    {
      id: fileName,
      label: fileName,
      data: data as SampleDataRow[]
    }
  ];
};
