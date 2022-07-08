import { getAllPosts } from '../../lib/posts';
import { useRouter } from 'next/router';
import Layout from '../../components/layout.js';
import PostListItem from '../../components/PostListItem';
import styles from '../../styles/Category.module.css';

export default function Category({ posts }) {
  const router = useRouter()
  const { category } = router.query

  return (
    <Layout>
      <ul className={styles.postList}>
        {posts.map((post, index) => (
          <PostListItem src={`/${category}/${post.id}`} title={post.title} date={post.date} />
        ))}
      </ul>
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: [{ params: { category: 'student-visa'}}, { params: { category: 'others'}}],
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