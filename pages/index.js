import NextLink from 'next/link'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import icon from '../public/ei_icon.png'
import { Flex, Spacer, Button, Link, Box, chakra } from '@chakra-ui/react'

export default function Home() {
  const height = 200;
  const width = height * 688 / 648;

  const NextImage = chakra(Image, {
    shouldForwardProp: (prop) => ["src"].includes(prop)
  });

  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Box w='10%' minWidth='150px' mb={20}>
        <NextImage src={icon} alt='icon' />
      </Box>

      <Flex width='100%' maxWidth='728px'>
        <NextLink href="/student-visa" passHref>
          <Button as="a">Student Visa</Button>
        </NextLink>
        
        <Spacer />

        <NextLink href="/express-entry" passHref>
          <Button as="a">Express Entry</Button>
        </NextLink>

        <Spacer />

        <NextLink href="/sponsorship" passHref>
          <Button as="a">Sponsorship</Button>
        </NextLink>

        <Spacer />

        <NextLink href="/others" passHref>
          <Button as="a">Others</Button>
        </NextLink>
      </Flex>
    </Flex>
    // <div className={styles.main}>

    //   <div className={styles.iconWrapper}>
    //     <Image src={icon} alt='icon' height={height} width={width} />
    //   </div>

    //   <div>
    //     <h2>EXPRESS IMMIGRATION</h2>
    //   </div>

    //   <div className={styles.nav}>
    //     <Link href='/student-visa'>
    //       <a className={styles.category}>Student Visa</a>
    //     </Link>

    //     <Link href='/express-entry'>
    //       <a className={styles.category}>Express Entry</a>
    //     </Link>

    //     <Link href='/sponsorship'>
    //       <a className={styles.category}>Sponsorship</a>
    //     </Link>

    //     <Link href='/others'>
    //       <a className={styles.category}>Others</a>
    //     </Link>
    //   </div>
    // </div>
  )
}
