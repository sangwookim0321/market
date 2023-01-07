import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useData } from "../../firebase/useData";
import { useAtom } from "jotai";
import { Detail_Item, Status } from "../../jotai/jotaiProvider";

import Detail from "../../component/Detail";
import Loaders from "../../component/Loader";
import firebase from "../../firebase/firebaseApp"

const Post = ({item}) => {
    
    const [get_Detai_lItem, set_Detail_Item] = useAtom(Detail_Item);

    useEffect(() => {
        const detail_item = JSON.parse(item);
        set_Detail_Item(detail_item);
    }, [set_Detail_Item])
    
    // const router = useRouter();
    // const { id } = router.query;
    // const { data } = useData();

    // const getItem = () => {
    //     setDetailItem(data.find((item) => item.id == id));
    // }
    
    // useEffect(() => {
    //     getItem();
    // }, [data])

    return(
        <>
            {
                item && <Detail />
            }
        </>
    )
}

export default Post;

export async function getServerSideProps(context){
    const id = context.params.id;
    const db = firebase.firestore();

    const newAry = await db.collection("product").get().then((snapshot) => {
        const data = snapshot.docs.map(doc => ({
            ...doc.data(),
        }))
        const oneItem = data.find((item) => item.id == id)
        return oneItem;
    })
    
    return{
        props: {
            item: JSON.stringify(newAry),
        }
    }
}