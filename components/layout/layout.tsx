import { PropsWithChildren } from "react";
import Link from 'next/link';
import styles from "./layout.module.css";
import Head from "next/head";
import Navigation from "../navigation/navigation";
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation'
import { FOOTER_EMAIL } from "@/const";

export default function Layout({ children }: PropsWithChildren) {

  const pathname = usePathname();


  return (
    <>
      <Head>
        <title>Web Studio</title>
        <meta name="description" content="SkillFactory Next.js project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <Link
            href="/"
            className={clsx(
              styles.logo,
              { [styles.disabled]: pathname === "/" }
            )}
          >
            WEBSTUDIO
          </Link>
          <Navigation />
        </header>
        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          <div>&copy; 2023 Web studio {FOOTER_EMAIL}</div>
          <a href={`mailto:${FOOTER_EMAIL}`}>{FOOTER_EMAIL}</a>
        </footer>
      </div>
    </>
  );
}