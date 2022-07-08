import Link from 'next/link';
import styles from './PostListItem.module.css';

export default function PostListItem({ title, src, date }) {
  return (
    <div className={styles.listItem}>
      <Link href={src}>
        <a>{ title }</a>
      </Link>
      <small className={styles.date}>{ date }</small>
    </div>
  );
}