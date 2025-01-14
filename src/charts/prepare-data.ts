import {SampleDataItem} from '../sample-data';

export const prepareGenderData = (
  sampleDataItem: SampleDataItem
): {id: string; label: string; value: number}[] => {
  const genderMapping: Record<string, string> = {
    '1': 'Male',
    '2': 'Female',
    '3': 'Other' // Ensure you have a mapping for each gender code used in your CSV
  };

  const genderCounts: Record<string, number> = sampleDataItem.data.reduce(
    (acc, row) => {
      const genderCode = row.pol;
      const gender = genderMapping[genderCode] || 'Unknown'; // Use 'Unknown' if the code doesn't match
      acc[gender] = (acc[gender] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return Object.entries(genderCounts).map(([key, value]) => ({
    id: key,
    label: key,
    value
  }));
};

// Function to prepare data for the language pie chart
export const prepareLanguageData = (
  sampleDataItem: SampleDataItem
): {id: string; label: string; value: number}[] => {
  // Language mapping object
  const languageMapping: Record<string, string> = {
    srp: 'Serbian',
    hrv: 'Croatian',
    bos: 'Bosnian',
    qaa: 'Montenegrin' // Assuming 'qaa' is used as a placeholder code for Montenegrin
  };

  const languageCounts: Record<string, number> = sampleDataItem.data.reduce(
    (acc, row) => {
      const languageCode = row.Language;
      const language = languageMapping[languageCode] || 'Unknown'; // Default to 'Unknown' if the code is not in the mapping
      acc[language] = (acc[language] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return Object.entries(languageCounts).map(([key, value]) => ({
    id: key,
    label: key,
    value
  }));
};

export const prepareCountryData = (
  sampleDataItem: SampleDataItem
): {id: string; label: string; value: number}[] => {
  const countryMapping: Record<string, string> = {
    '1': 'Bosnia and Herzegovina',
    '2': 'Montenegro',
    '3': 'Croatia',
    '4': 'Serbia',
    '5': 'Other',
    '0': 'Not answered'
  };

  const countryCounts: Record<string, number> = sampleDataItem.data.reduce(
    (acc, row) => {
      const countryCode = row.country;
      const country = countryMapping[countryCode] || 'Unknown'; // Use 'Unknown' if the code doesn't match
      acc[country] = (acc[country] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return Object.entries(countryCounts).map(([key, value]) => ({
    id: key,
    label: key,
    value
  }));
};

export const prepareEducationData = (
  sampleDataItem: SampleDataItem
): {name: string; value: number}[] => {
  const educationMapping: Record<string, string> = {
    '1': 'Primary',
    '2': 'Secondary',
    '3': 'BA',
    '4': 'MA',
    '5': 'PhD',
    '0': 'Not answered'
  };

  const educationCounts: Record<string, number> = sampleDataItem.data.reduce(
    (acc, row) => {
      const educationCode = row.obrazovanje;
      const education = educationMapping[educationCode] || 'Unknown'; // Use 'Unknown' if the code doesn't match
      acc[education] = (acc[education] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return Object.entries(educationCounts).map(([key, value]) => ({
    name: key,
    value
  }));
};

export const prepareMunicipalityData = (
  sampleDataItem: SampleDataItem
): {id: string; label: string; value: number}[] => {
  const counts: Record<string, number> = {};

  // Aggregate counts of each mesto_opstina
  sampleDataItem.data.forEach((row) => {
    const municipality = row.mesto_opstina;
    if (counts[municipality]) {
      counts[municipality]++;
    } else {
      counts[municipality] = 1;
    }
  });

  // Convert the aggregated data into an array suitable for charting
  return Object.entries(counts).map(([municipality, count]) => ({
    id: municipality,
    label: municipality,
    value: count
  }));
};
