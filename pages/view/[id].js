import Head from "next/head";

import { useData } from "../../firebase/useData";
import { useAtom } from "jotai";
import { Find_Data } from "../../jotai/jotaiProvider";

import Detail from "../../component/Detail";
import { useEffect } from "react";

export const getServerSideProps = async ( context ) => {

    const id = context.params.id;

    const { data } = await useData();

    const result = JSON.parse(data).find((item) => item.id == id);
  
    return{
      props: {
        data: result,
      }
    }
  }

const Post = ({ data }) => {
    const [find_Get_Data, set_Find_Data] = useAtom(Find_Data);
    
    useEffect(() => {
        set_Find_Data(data);
    }, [data])

    return(
        <>
        <Head>
            <title>{data.이름}</title>
            <meta name="description" content={data.설명}></meta>
        </Head>
        
            {
                <Detail data={data} />
            }
        </>
    )
}

export default Post;

