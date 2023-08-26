import Layout from "@/components/layout/layout";
import Link from 'next/link';
export default function About() {
    return (
      <Layout>
        Контакты
        <br />        
        <Link href="/about"> Контакты отсутствуют перейдите на страницу компании </Link>
      </Layout>
    );
}