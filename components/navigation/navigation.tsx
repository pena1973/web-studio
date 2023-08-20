import Link from 'next/link';
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">
            Главная
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/about">
            О компании
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/contacts">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}