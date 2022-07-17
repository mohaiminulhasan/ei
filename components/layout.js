// import styles from './layout.module.css';
import icon from '../public/ei_icon.png';
import Image from 'next/image';
import { chakra, Input, Text, Box, LinkBox, Flex, Heading, Spacer, HStack, Button, LinkOverlay, useMediaQuery, useDisclosure, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export default function Layout({ children }) {
  const height = 100;
  const width = height * 688 / 648;

  const NextImage = chakra(Image, {
    shouldForwardProp: (prop) => ["src"].includes(prop)
  });

  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Flex minWidth='max-content' align='center' gap='4' p='4'>
      <LinkBox w='50px'>
        <LinkOverlay href='/'>
          <NextImage src={icon} alt='icon' />
        </LinkOverlay>
      </LinkBox>

      <Box p='2'>
        <Heading size='md' color='#135caa' display='inline-block' pr={1}>EXPRESS</Heading>
        <Heading size='md' color='#de0d24' display='inline-block' fontWeight='normal'>IMMIGRATION</Heading>
      </Box>

      <Spacer/>

      <Button display={isDesktop ? 'flex' : 'none'} justifyContent='start' onClick={onOpen}>
        <HStack>
          <SearchIcon color='gray'/>
          <Text fontWeight='light' color='gray'>Search the knowledge base</Text>
        </HStack>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton /> */}
          <ModalBody p={0}>
            <Flex align='center'>
              <SearchIcon m={6}/>
              <Input h='70px' p={0} border={0} placeholder='Search' />
            </Flex>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>

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