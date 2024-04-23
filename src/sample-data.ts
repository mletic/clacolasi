import { parse } from 'papaparse';

const BASE_URL = `/data`;

export type SampleDataItem = {
  id: string;
  label: string;
  data: object;
};

export const fetchSampleData = async (): Promise<[SampleDataItem]> => {
  const response = await fetch(`${BASE_URL}/data-try-inf.csv`);
  const text = await response.text();  // Read response as text
  const { data } = parse(text, { header: true });  // Parse CSV text

  console.log(data);
  return [
    {
      id: 'data-try-inf',
      label: 'Try Inf Data',
      data: data  // Assuming data is in a suitable format for your application
    }
  ];
};
