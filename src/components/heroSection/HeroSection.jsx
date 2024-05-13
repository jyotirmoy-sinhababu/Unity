import { Text, Flex, Image, Box } from '@chakra-ui/react';

import photoOne from '../../assets/photoOne.svg';
import photoTwo from '../../assets/photoTwo.svg';
import photoThree from '../../assets/photoThree.svg';

const HeroSection = () => {
  return (
    <Flex justifyContent={'space-between'}>
      <Text>Simple interface to showcase your work.</Text>
      <Box position={'relative'}>
        <Image position={'absolute'} h={250} src={photoOne} />
        <Image position={'absolute'} h={250} src={photoTwo} />
        <Image position={'absolute'} h={250} src={photoThree} />
      </Box>
    </Flex>
  );
};

export default HeroSection;
