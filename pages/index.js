import { Text_h3 } from "../styles/commonStyeld"
import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'

import { Divider } from "semantic-ui-react";

import ItemList from '../component/ItemList';
import Loaders from "../component/Loader";

import { useAtom } from "jotai";
import { Store_Data, Status } from "../jotai/jotaiProvider";

export default function Home() {

  const [itemList, setItemList] = useAtom(Store_Data);
  const [status, setStatus] = useAtom(Status);

  return (
    <>
      <Head>
        <title>더할인마켓</title>
        <meta name="description" content="쇼핑몰 샵 입니다." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        status == "Loading" ?
        <Loaders/>
      : 
      <><Text_h3>
        베스트 상품
      </Text_h3>
      <Divider />
      <ItemList itemList={itemList}/>

      <Text_h3>
        신상품
      </Text_h3>
      <Divider />
      <ItemList itemList={itemList.slice(2,5)}/>
      </>
      }
        
    </>      
  )
}



