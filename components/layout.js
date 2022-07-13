// import styles from './layout.module.css';
import icon from '../public/ei_icon.png';
import Image from 'next/image';
import { chakra, Box, LinkBox, Flex, Heading, Spacer, Link, Button, LinkOverlay } from '@chakra-ui/react';
import NextLink from 'next/link'

export default function Layout({ children }) {
  const height = 100;
  const width = height * 688 / 648;

  const NextImage = chakra(Image, {
    shouldForwardProp: (prop) => ["src"].includes(prop)
  });

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
      
      <Box>
        <NextLink href="/" passHref>
          <Button as="a">Home</Button>
        </NextLink>

        <NextLink href="#" passHref>
          <Button as="a">Join our Discord</Button>
        </NextLink>
      </Box>
    </Flex>

    <Box p='4'>
      { children }
    </Box>

    </>
  );
}