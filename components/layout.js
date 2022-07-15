// import styles from './layout.module.css';
import icon from '../public/ei_icon.png';
import Image from 'next/image';
import { chakra, Text, Box, LinkBox, Flex, Heading, Spacer, HStack, Button, LinkOverlay, useMediaQuery, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export default function Layout({ children }) {
  const height = 100;
  const width = height * 688 / 648;

  const NextImage = chakra(Image, {
    shouldForwardProp: (prop) => ["src"].includes(prop)
  });

  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <>
    <Flex minWidth='max-content' align='center' gap='4' p='4'>
      <LinkBox w='50px'>
        <LinkOverlay href='/'>
          <NextImage src={icon} alt='icon' />
        </LinkOverlay>
      </LinkBox>

      <Box p='2'>
        <Heading size='md'>Express Immigration</Heading>
      </Box>

      <Spacer/>

      <Button display={isDesktop ? 'flex' : 'none'} justifyContent='start'>
        <HStack>
          <SearchIcon color='gray'/>
          <Text fontWeight='light' color='gray'>Search the knowledge base</Text>
        </HStack>
      </Button>

      <Spacer/>
      
      <Flex gap={4} display={isDesktop ? 'flex' : 'none'}>
        <NextLink href="/" passHref>
          
          <Button as="a">Home</Button>
        </NextLink>

        <NextLink href="#" passHref>
          <Button as="a">Discord</Button>
        </NextLink>
      </Flex>

      <IconButton display={isDesktop ? 'none' : 'flex'} icon={<HamburgerIcon/>} />
    </Flex>

    <Box p='4'>
      { children }
    </Box>

    </>
  );
}