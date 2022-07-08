import styles from './layout.module.css';
import icon from '../public/ei_icon.png';
import Image from 'next/image';

export default function Layout({ children }) {
  const height = 100;
  const width = height * 688 / 648;

  return (
    <div>
      <div className={styles.navbar}>
        <Image src={icon} alt='icon' height={height} width={width} />
        <h1>Express Immigration</h1>
      </div>
      { children }
    </div>
  );
}