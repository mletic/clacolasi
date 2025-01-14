import {Flex, Text} from '@chakra-ui/react';
import {FC} from 'react';

const infoText = `This dataset explores the interplay of modal flavor (epistemic, circumstantial, deontic), complement size (VP/TP in the sense of Wurmbrand et al., 2020), and aspectual verbs on the choice and preference for different types of clausal complements (infinitive vs. finite) in Štokavian (Bosnian/Croatian/Montenegrin/Serbian). 
The data were collected between July and November 2023 through an online survey designed in Sosci (Leiner, 2018), targeting native speakers across the Štokavian-speaking region.
The sample comprises 514 participants (368 females, 138 males, 4 non-binary, 4 undeclared; Age: mean = 26.38 years, SD = 10.22), distributed across the Štokavian-speaking countries as follows: Serbia (n = 345), Croatia (n = 79), Bosnia (n = 45), Montenegro (n = 36), other (n=4), and non-declared (n=5). Convenience sampling and a snowballing method were employed to recruit participants.
The survey was conducted in the four varieties of BCMS (Bosnian, Croatian, Montenegrin, Serbian), allowing for comparative insights within the Štokavian continuum.
`;

export const InfoContainer: FC = () => {
  return (
    <Flex padding="1rem" maxWidth="400px" textAlign="justify" flexDirection="column" gap="1rem">
      {infoText.split('\n').map((line, index) => (
        <Text key={index}>{line}</Text>
      ))}
    </Flex>
  );
};
