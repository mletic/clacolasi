import {ExternalLinkIcon} from '@chakra-ui/icons';
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
  LinkBox,
  LinkOverlay,
  Stack,
  StackDivider,
  Text
} from '@chakra-ui/react';
import {FC, useEffect, useState} from 'react';
import Flag from 'react-flagkit';

const engTemplate = {
  buttons: {
    showOnMap: 'Show on map'
  },
  sections: [
    {
      title: 'Complement size',
      description: 'This is a description of the section',
      subsections: [
        {
          title: 'TRY',
          description: 'This is a description of the subsection',
          files: ['data-try-inf', 'data-try-dpc']
        },
        {
          title: 'DECIDE',
          description: 'This is a description of the subsection',
          files: ['data-decide-inf', 'data-decide-dpc']
        }
      ]
    },
    {
      title: 'Modality',
      description: 'This is a description of the section'
    },
    {
      title: 'Aspectual verb',
      description: 'This is a description of the section'
    }
  ]
};

const rsTemplate = {
  buttons: {
    showOnMap: 'Prikaži na mapi'
  },
  sections: [
    {
      title: 'Veličina komplementa',
      description: 'Ovo je opis sekcije',
      subsections: [
        {
          title: 'POKUŠATI',
          description: 'Ovo je opis podsekcije',
          files: ['data-try-inf', 'data-try-dpc']
        },
        {
          title: 'ODLUČITI',
          description: 'Ovo je opis podsekcije',
          files: ['data-decide-inf', 'data-decide-dpc']
        }
      ]
    },
    {
      title: 'Modalnost',
      description: 'Ovo je opis sekcije'
    },
    {
      title: 'Aspektualni glagol',
      description: 'Ovo je opis sekcije'
    }
  ]
};

export const Menu: FC<{onButtonClick: (files: string[]) => void}> = ({onButtonClick}) => {
  const [language, setLanguage] = useState('gb');
  const [languageVar, setLanguageVar] = useState(engTemplate);

  useEffect(() => {
    setLanguageVar(language === 'gb' ? engTemplate : rsTemplate);
  }, [language]);

  return (
    <Flex
      position="absolute"
      direction="column"
      width="400px"
      top="220px"
      left="80px"
      backgroundColor="var(--chakra-colors-chakra-body-bg)"
      borderRadius="0.5rem"
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

      <Accordion allowToggle width="100%">
        {languageVar.sections.map((section, index) => (
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
                    {section?.subsections?.map((subsection, subsectionIndex) => (
                      <Box key={`${subsection}-${index}-${subsectionIndex}`}>
                        <Heading display="flex" size="xs" textTransform="uppercase">
                          <Text>{subsection.title}</Text>
                          <Button
                            onClick={() => onButtonClick(subsection.files)}
                            size="xs"
                            marginLeft="auto"
                          >
                            {languageVar.buttons.showOnMap}
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
      <Flex
        alignItems="center"
        padding="0.5rem 1rem"
        backgroundColor="#b3b3b3"
        borderBottomRadius="0.5rem"
      >
        <Text fontSize="sm">Select language</Text>
        <Button variant="ghost" onClick={() => setLanguage('gb')}>
          <Flag country="GB" />
        </Button>
        <Button variant="ghost" onClick={() => setLanguage('rs')}>
          <Flag country="RS" />
        </Button>
      </Flex>
    </Flex>
  );
};
