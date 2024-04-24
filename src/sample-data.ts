import {parse} from 'papaparse';

const BASE_URL = `./data`;

export type SampleDataItem = {
  id: string;
  label: string;
  data: object;
};

export const fetchSampleData = async (fileName: string): Promise<[SampleDataItem]> => {
  const response = await fetch(`${BASE_URL}/${fileName}.csv`);
  const text = await response.text(); // Read response as text
  const {data} = parse(text, {header: true}); // Parse CSV text

  return [
    {
      id: fileName,
      label: fileName,
      data: data
    }
  ];
};
