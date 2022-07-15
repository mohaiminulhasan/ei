import NextLink from 'next/link'
import Image from 'next/image'
import icon from '../public/ei_icon.png'
import { Flex, Spacer, Grid, GridItem, Button, Text, Box, chakra, HStack, useMediaQuery } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function Home() {
  const NextImage = chakra(Image, {
    shouldForwardProp: (prop) => ["src"].includes(prop)
  });

  const [isDesktop] = useMediaQuery('(min-width: 768px)')

  return (
    <Flex direction="column" align="center" justify="center" height="100vh">

      <Grid
        p={5}
        templateAreas={isDesktop ? 
        ` ".    logo    logo    ."
          ".    srch    srch    ."
          "sp   ee      v       o"` :

        ` "logo   logo"
          "srch   srch"
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

        <GridItem area='srch'>
          <Button w={isDesktop ? '80%' : '100%'} justifyContent='start'>
            <HStack>
              <SearchIcon color='gray'/>
              <Text fontWeight='light' color='gray'>Search the knowledge base</Text>
            </HStack>
          </Button>
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
