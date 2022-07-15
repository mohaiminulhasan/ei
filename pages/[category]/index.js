import { getAllPosts } from '../../lib/posts';
import { useRouter } from 'next/router';
import Layout from '../../components/layout.js';
import PostListItem from '../../components/PostListItem';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Divider,
  Container
} from '@chakra-ui/react'
import { TitleExtractor } from '../../lib/utils';

export default function Category({ posts }) {
  const router = useRouter()
  const { category } = router.query

  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <Text>{ TitleExtractor(category) }</Text>
        </BreadcrumbItem>
      </Breadcrumb>

      <Divider mt='4' mb='4' />


      <Container>
        {posts.map((post, index) => (
          <PostListItem key={index} src={`/${category}/${post.id}`} title={post.title} date={post.date} />
        ))}
      </Container>
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: [{ params: { category: 'student-permit' }}, { params: { category: 'others' }}],
    fallback: false
  }
}

export function getStaticProps({ params }) {
  const posts = getAllPosts(params.category)

  return {
    props: {
      posts
    }
  }
}