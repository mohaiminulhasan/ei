import NextLink from 'next/link'
import Image from 'next/image'
import icon from '../public/ei_icon.png'
import { Flex, Heading, Grid, GridItem, Button, Text, Box, chakra, HStack, useMediaQuery, useDisclosure, Input } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export default function Home() {
  const NextImage = chakra(Image, {
    shouldForwardProp: (prop) => ["src"].includes(prop)
  });

  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex direction="column" align="center" justify="center" height="100vh">

      <Grid
        p={5}
        templateAreas={isDesktop ? 
        ` ".    logo    logo    ."
          ".    title   title   ."
          ".    srch    srch    ."
          "sp   ee      v       o"` :

        ` "logo   logo"
          "srch   srch"
          "title  title"
          " sp    ee  "
          " v     o   "`}
        templateColumns={isDesktop ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)'}
        gap='10'
        align='center'
      >
        <GridItem area='logo'>
          <Box w='25%'>
            <NextImage src={icon} alt='icon'/>
          </Box>
        </GridItem>

        <GridItem area='title'>
          <Heading size='md' color='#135caa' display='inline-block' pr={1}>EXPRESS</Heading>
          <Heading size='md' color='#de0d24' display='inline-block' fontWeight='normal'>IMMIGRATION</Heading>
        </GridItem>

        <GridItem area='srch'>
          <Button w={isDesktop ? '80%' : '100%'} justifyContent='start' onClick={onOpen}>
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
        </GridItem>

        <GridItem area='sp'>
          <NextLink href="/student-permit" passHref>
            <Button as='a' variant='outline' w='100%'>Student Permit</Button>
          </NextLink>
        </GridItem>

        <GridItem area='ee'>
          <NextLink href="/express-entry" passHref>
            <Button as="a" variant='outline' w='100%'>Express Entry</Button>
          </NextLink>
        </GridItem>

        <GridItem area='v'>
          <NextLink href="/visit" passHref>
            <Button as="a" variant='outline' w='100%'>Visit</Button>
          </NextLink>
        </GridItem>

        <GridItem area='o'>
          <NextLink href="/others" passHref>
            <Button as="a" variant='outline' w='100%'>Others</Button>
          </NextLink>
        </GridItem>  
      </Grid>

    </Flex>
  )
}
