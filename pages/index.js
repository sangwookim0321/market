import { Text_h3 } from "../styles/commonStyeld"
import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import { Divider } from "semantic-ui-react";
import ItemList from '../component/ItemList';

import { useData } from "../firebase/useData";
import { useAtom } from "jotai";
import { Store_Data } from "../jotai/jotaiProvider";
import { useEffect } from "react";

export const getServerSideProps = async () => {

  const { data } = await useData();

  return{
    props: {
      data: JSON.parse(data),
    }
  }
}

export default function Home({ data }) {

  const [global_Data, set_Global_Data] = useAtom(Store_Data);

  useEffect(() => {
    set_Global_Data(data);
  }, [data]);

  return (
    <>
      <Head>
        <title>더할인마켓</title>
        <meta name="description" content="쇼핑몰 샵 입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {
        admin && <Text_h3>반갑습니다! 관리자님</Text_h3>
      } */}
      
      <Text_h3>
        베스트 상품
      </Text_h3>
      <Divider />
      <ItemList data={data}/>

      <Text_h3>
        신상품
      </Text_h3>
      <Divider />
      <ItemList data={data.slice(2,5)}/>
    </>      
  )
}



