import Image from 'next/image'
import Link from 'next/link';
import { PortfolioItem } from '../../portfolio'
import Layout from '../../../components/layout/layout'
import styles from "../../../components/layout/layout.module.css";
import { PHOTOS_API_URL } from '../../../const'
import axios from 'axios';

interface ItemProps {
   portfolioItem: PortfolioItem,  
}
type Context = {  
  params:{id:number}
}

// // Эта функция вызывается в момент рендеринга 
// // на стороне сервера  и принимает пропсы страницы 
// // чтобы предварительно получить нужные данные
// params -(часть контекста) параметры страницы в которых есть Id страницы
export async function getServerSideProps({params}:Context){
   const url = `${PHOTOS_API_URL}${params?.id}`  
   const { data } = await axios.get<PortfolioItem[]>(url);
  return {
    props: { portfolioItem: data }
  }  
}
export default function Item(
   { portfolioItem }: ItemProps) {  
  if (!portfolioItem) return null;
  return (
    <Layout>
      <div className={styles.item}>
        <h1>Проект: {portfolioItem.title}</h1>
        <Image
          src={portfolioItem.url}
          width={400}
          height={400}
          alt={portfolioItem.title} />
        <Link className={styles.link} href="/portfolio">Назад к списку работ</Link>
      </div>
    </Layout>
  )
}


// params: Если на этой странице используется динамический маршрут,
// параметры маршрута сохраняются в params.
// Если имя страницы — [id].js, параметры будут { id: … }
// req: объект HTTP IncomingMessage.
// res: объект ответа HTTP.
// query: объект для строки запроса.
// preview (boolean): если страница находится в режиме предварительного просмотра, предварительный просмотр имеет значение true; в противном случае это ложь.
// PreviewData: данные предварительного просмотра, установленные setPreviewData.
// solvedUrl: нормализованная версия URL-адреса запроса, в которой префикс _next/data удален для переходов клиента и включены исходные значения запроса.
// locale: содержит активную локаль (если она включена).
// locales: содержит все поддерживаемые локали (если они включены).
// defaultLocale: настроенный языковой стандарт по умолчанию.