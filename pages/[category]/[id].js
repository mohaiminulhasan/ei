import { useRouter } from "next/router";
import { getAllPostIds, getPostData } from "../../lib/posts"
import Layout from '../../components/layout.js';
import styles from '../../styles/Post.module.css';
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Divider,
  Container,
  Heading
} from '@chakra-ui/react'
import { TitleExtractor } from '../../lib/utils';

export default function Post({ postData }) {
  const router = useRouter();
  const { category } = router.query

  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href={`/${category}`}>{ TitleExtractor(category) }</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <Text>{ postData.title }</Text>
        </BreadcrumbItem>
      </Breadcrumb>

      <Divider mt='4' mb='4' />

      <Container>
        <Heading size='lg' mb='4'>{ postData.title }</Heading>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds('student-permit');
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.category, params.id)
  return {
    props: {
      postData,
    },
  };
}