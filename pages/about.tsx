import Image from 'next/image'
import Layout from "@/components/layout/layout";
import photo1 from "../public/team/photo1.avif";
import photo2 from "../public/team/photo2.avif";
import photo3 from "../public/team/photo3.avif";
import styles from "../components/layout/layout.module.css";
export default function About() {
  return (
    <Layout>
      <h1>О компании</h1>
      <div>
        <p>
        Представляем вам гадание на рунах «Да-Нет» - расклад, который поможет не только однозначно ответить на интересующий кверента вопрос, но также и укажет на то, почему задуманное желание сбудется, или какие препятствия помешают осуществиться задуманному. Гадание простое, для его проведения вам потребуются 24 обычных скандинавских рун.
Все, что нужно, это загадать вопрос, на который можно ответить однозначно: «Да» или «Нет», затем тщательно перемешать символы и произвольно вынуть одну руну. Следует учесть, что учитывается как прямое, так и перевернутое её значение, благодаря чему предсказание становится более точным и правдивым. Также необходимо отметить, что спрашивать один и тот же вопрос подряд не следует, даже слегка его изменив, т.к. руны могут начать говорить неправду.
        </p>
      </div>

    <div className={styles.list}>
    <div className={styles.item}>
    <h3>Отдел маркетинга</h3>
    <div className={styles.content}>
      <Image
        className={styles.image}
        src={photo1}
        alt="https://unsplash.com/photos/Kz8nHVg_tGI"
      />
      <div> __ текст __ </div>
    </div>
  </div>
 
 
  <div className={styles.item}>
    <h3>Инженеры-разработчики</h3>
    <div className={styles.content}>
      <Image
        className={styles.image}
        src={photo2}
        alt="https://unsplash.com/photos/g1Kr4Ozfoac"
      />
      <div> __ текст __ </div>
    </div>
  </div>
 
 
  <div className={styles.item}>
    <h3>Отдел продаж</h3>
    <div className={styles.content}>
      <Image
        className={styles.image}
        src={photo3}
        alt="https://unsplash.com/photos/5fNmWej4tAA"
      />
      <div> __ текст __ </div>
    </div>
  </div>
 </div>

    </Layout>
  );
}