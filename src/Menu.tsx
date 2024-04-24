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
  Stack,
  StackDivider,
  Text
} from '@chakra-ui/react';
import {FC} from 'react';

const engTemplate = [
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
];

export const Menu: FC<{onButtonClick: (files: string[]) => void}> = ({onButtonClick}) => {
  return (
    <Flex
      position="absolute"
      width="400px"
      top="220px"
      left="80px"
      backgroundColor="var(--chakra-colors-chakra-body-bg)"
    >
      <Accordion width="100%">
        {engTemplate.map((section, index) => (
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
                            Show on map
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
    </Flex>
  );
};
