import { Button, Container, Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <Container maxW={'container.lg'} my={8}>
      <Flex
        w={'full'}
        justifyContent={{ base: 'center', sm: 'space-between' }}
        alignItems={'center'}
      >
        <Image
          src={logo}
          h={8}
          display={{ base: 'none', sm: 'block' }}
          cursor={'pointer'}
        />
        <Flex gap={4}>
          <Link to='/auth'>
            <Button colorScheme={'blue'} size={'sm'}>
              Login
            </Button>
          </Link>
          <Link to='/auth'>
            <Button colorScheme={'outline'} size={'sm'}>
              Sign up
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
