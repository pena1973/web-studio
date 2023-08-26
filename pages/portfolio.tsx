
import Image from 'next/image'
import { useState, useEffect } from "react";
import { PHOTOS_API_URL } from '../const'
import axios from 'axios'
import Layout from '../components/layout/layout'
import { useRouter } from "next/router";
import styles from "../components/layout/layout.module.css";

export interface PortfolioItem {
    albumId: number,
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

type ItemsByGroup = [string, PortfolioItem[]][];

const prepareData = (items: PortfolioItem[]) =>  {

    let albooms: ItemsByGroup = [];
    while (items.length>0){
    let albumId = items[0].albumId;
    const result = items.filter((item) => item.albumId === albumId);        
    items = items.filter((item) => item.albumId !== albumId);        
    albooms.push(["Название "+ albumId ,result])
    } 
   return albooms;
}


export default function Portfolio() {
    const [loading, setLoading] = useState(true);
    const [itemsByGroup, setItems] = useState<ItemsByGroup | null>(null);

    const load = async () => {
        try {
            console.log(PHOTOS_API_URL);
            const { data } = await axios.get<PortfolioItem[]>("https://jsonplaceholder.typicode.com/photos/");
            const prepared = prepareData(data.slice(0, 100));
            setItems(prepared);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        load();
    }, []);

    const { push } = useRouter();

    if (loading) {
        return (
            <Layout>
                ... loading ...
            </Layout>
        )
    } else
    return (
        <Layout>
        <h1>Наши работы</h1>
     
        {itemsByGroup?.length ? (
          <div>
            {itemsByGroup.map((group, i) => (
              <div key={i} className={styles.groupWrapper}>
                <h2>{group[0]}</h2>
     
     
                <div className={styles.listGroup}>
                  {group[1].map(({ id, title, thumbnailUrl }) => (
                    <div
                      key={id}
                      className={styles.groupItem}
                      onClick={() => {
                        console.log(id);
                        push(`/portfolio/${id}`)}}
                    >
                      <Image src={thumbnailUrl} width={150} height={150} alt={title} />
                      <h3>{title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : <div>Ничего не найдено</div>}
      </Layout>
     );
}