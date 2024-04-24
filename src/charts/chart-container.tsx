import {FC, useEffect, useState} from 'react';
import {Flex, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';

import PieChart from './pie-chart';
import BarChart from './bar-chart';
import {SampleDataItem, fetchSampleData} from '../sample-data';
import {
  prepareCountryData,
  prepareEducationData,
  prepareGenderData,
  prepareLanguageData,
  prepareMunicipalityData
} from './prepare-data';

export const ChartContainer: FC = () => {
  const [sampleDataItem, setSampleDataItem] = useState<[SampleDataItem] | null>(null);
  const [genderData, setGenderData] = useState<{id: string; label: string; value: number}[]>([]);
  const [educationData, setEducationData] = useState<{name: string; value: number}[]>([]);
  const [municipalityData, setMunicipalityData] = useState<
    {id: string; label: string; value: number}[]
  >([]);
  const [languageData, setLanguageData] = useState<{id: string; label: string; value: number}[]>(
    []
  );
  const [countryData, setCountryData] = useState<{id: string; label: string; value: number}[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const dataItem = await fetchSampleData('data-try-dpc');
      setSampleDataItem(dataItem);
    };

    loadData();
  }, []);

  useEffect(() => {
    if (sampleDataItem) {
      setGenderData(prepareGenderData(sampleDataItem[0]));
      setEducationData(prepareEducationData(sampleDataItem[0]));
      setLanguageData(prepareLanguageData(sampleDataItem[0]));
      setCountryData(prepareCountryData(sampleDataItem[0]));
      setMunicipalityData(prepareMunicipalityData(sampleDataItem[0]));
    }
  }, [sampleDataItem]);

  return (
    <Flex
      position="absolute"
      direction="column"
      minWidth="400px"
      top="16px"
      right="80px"
      backgroundColor="var(--chakra-colors-chakra-body-bg)"
      borderRadius="0.5rem"
    >
      <Tabs size="sm">
        <TabList>
          <Tab>Language</Tab>
          <Tab>Country</Tab>
          <Tab>Municipality</Tab>
          <Tab>Gender</Tab>
          <Tab>Education</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <PieChart data={languageData} />
          </TabPanel>
          <TabPanel>
            <PieChart data={countryData} />
          </TabPanel>
          <TabPanel>
            <PieChart data={municipalityData} />
          </TabPanel>
          <TabPanel>
            <PieChart data={genderData} />
          </TabPanel>
          <TabPanel>
            <BarChart data={educationData} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};
