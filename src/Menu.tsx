import {FC, useEffect, useState} from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  StackDivider,
  Text
} from '@chakra-ui/react';
import {ExternalLinkIcon} from '@chakra-ui/icons';
import Flag from 'react-flagkit';
import Draggable from 'react-draggable';

import {LanguageTemplate, languageTemplates} from './language-templates';
import {ChartContainer} from './charts/chart-container';
import {
  ArrowLeftCircle as ArrowLeftCircleIcon,
  PieChart as PieChartIcon,
  Info as InfoIcon
} from 'react-feather';
import {InfoContainer} from './info-container';

type ViewState = 'map' | 'chart' | 'table' | 'info';

export const Menu: FC<{onButtonClick: (files: string[]) => void}> = ({onButtonClick}) => {
  const [language, setLanguage] = useState('gb');
  const [languageTemplate, setLanguageTemplate] = useState<LanguageTemplate>(
    languageTemplates['gb']
  );

  const [selectedState, setSelectedState] = useState<ViewState>('table');

  useEffect(() => {
    setLanguageTemplate(languageTemplates[language]);
  }, [language]);

  return (
    <Draggable>
      <Flex
        position="absolute"
        direction="column"
        minWidth="400px"
        top="48px"
        left="62px"
        backgroundColor="var(--chakra-colors-chakra-body-bg)"
        borderRadius="0.5rem"
        zIndex={10}
      >
        <LinkBox as={Flex} padding="1rem" alignItems="center">
          <Image src="/clacolasi/ff-logo.png" alt="logo" width="64px" />
          <Text fontSize="2xl" fontWeight="bold" ml="1rem">
            ClaCoLaSI
          </Text>
          <LinkOverlay
            href="https://www.ff.uns.ac.rs/sr/nauka/projekti/clacolasi"
            marginLeft="auto"
            target="_blank"
          >
            <ExternalLinkIcon />
          </LinkOverlay>
        </LinkBox>

        <Flex padding="0.5rem 0.5rem" gap="0.5rem" alignItems="center">
          {selectedState !== 'table' && (
            <Button size="xs" onClick={() => setSelectedState('table')}>
              <ArrowLeftCircleIcon size="12px" /> <Text ml="2">Back</Text>
            </Button>
          )}
          {selectedState === 'info' && (
            <Link href="https://zenodo.org/records/14557856" target="_blank">
              <Button size="xs">
                <InfoIcon size="12px" /> <Text ml="2">Learn more</Text>
              </Button>
            </Link>
          )}
          {selectedState === 'table' && (
            <Flex gap="0.5rem">
              <Button size="xs" onClick={() => setSelectedState('chart')}>
                <PieChartIcon size="12px" /> <Text ml="2">Open Demographics</Text>
              </Button>
              <Button size="xs" onClick={() => setSelectedState('info')}>
                <InfoIcon size="12px" /> <Text ml="2">About the dataset</Text>
              </Button>
            </Flex>
          )}
        </Flex>

        {selectedState === 'chart' && <ChartContainer />}
        {selectedState === 'info' && <InfoContainer />}
        {selectedState === 'table' && (
          <Accordion allowToggle width="100%">
            {languageTemplate.sections.map((section, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {section.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text fontSize="sm" mb="1rem">
                    {section.description}
                  </Text>
                  <Card>
                    <CardBody>
                      <Stack divider={<StackDivider />} spacing="4">
                        {section.subsections.map((subsection, subsectionIndex) => (
                          <Box key={`${subsection.title}-${index}-${subsectionIndex}`}>
                            <Heading size="xs" textTransform="uppercase" display="flex">
                              <Text flex="1">{subsection.title}</Text>
                              <Button
                                onClick={() => onButtonClick(subsection.files)}
                                size="xs"
                                ml="auto"
                              >
                                {languageTemplate.buttons.showOnMap}
                              </Button>
                            </Heading>
                            <Text pt="2" fontSize="sm">
                              {subsection.description}
                            </Text>
                          </Box>
                        ))}
                      </Stack>
                    </CardBody>
                  </Card>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        )}

        <Flex
          alignItems="center"
          padding="0.5rem 1rem"
          backgroundColor="#b3b3b3"
          borderBottomRadius="0.5rem"
          gap="1rem"
        >
          <Text fontSize="sm">{languageTemplate.buttons.selectLanguage}</Text>
          <Button variant="ghost" onClick={() => setLanguage('gb')}>
            <Flag country="GB" />
          </Button>
          <Button variant="ghost" onClick={() => setLanguage('rs')}>
            <Flag country="RS" />
          </Button>
        </Flex>
      </Flex>
    </Draggable>
  );
};
