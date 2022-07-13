import { Box, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import styles from './PostListItem.module.css';

export default function PostListItem({ title, src, date }) {
  return (
    <Box pb='4'>
      <NextLink href={src} passHref>
        <Link>
          <Text as='b' fontSize={20}>{ title }</Text>
        </Link>
      </NextLink>
      <Text color='slategray'>{ date }</Text>
    </Box>
  );
}