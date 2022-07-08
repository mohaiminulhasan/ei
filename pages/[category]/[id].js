import { useRouter } from "next/router";
import { getAllPostIds, getPostData } from "../../lib/posts"
import Layout from '../../components/layout.js';
import styles from '../../styles/Post.module.css';
import Link from "next/link";

export default function Post({ postData }) {
  const router = useRouter();
  const { category } = router.query

  return (
    <Layout>
      <div className={styles.main}>
        <Link href={`/${category}/`}>
          <a>Go back</a>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds('student-visa');
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