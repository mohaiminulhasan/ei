import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import icon from '../public/ei_icon.png'

export default function Home() {
  const height = 200;
  const width = height * 688 / 648;

  return (
    <div className={styles.main}>

      <div className={styles.iconWrapper}>
        <Image src={icon} alt='icon' height={height} width={width} />
      </div>

      <div>
        <h2>EXPRESS IMMIGRATION</h2>
      </div>

      <div className={styles.nav}>
        <Link href='/student-visa'>
          <a className={styles.category}>Student Visa</a>
        </Link>

        <Link href='/express-entry'>
          <a className={styles.category}>Express Entry</a>
        </Link>

        <Link href='/sponsorship'>
          <a className={styles.category}>Sponsorship</a>
        </Link>

        <Link href='/others'>
          <a className={styles.category}>Others</a>
        </Link>
      </div>
    </div>
  )
}
