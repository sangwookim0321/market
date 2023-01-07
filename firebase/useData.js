import { useEffect } from "react"
import { useAtom } from "jotai";
import { StoreData, Status } from "../jotai/jotaiProvider";
import firebase from "./firebaseApp"

export const useData = () => {
    const [itemList, setItemList] = useAtom(StoreData);
    const [status, setStatus] = useAtom(Status);
    
    async function getData(){
        try{
            setStatus("Loading")
            const db = firebase.firestore();
            const dataList = await db.collection("product");
            dataList.onSnapshot((snapshot) => {
                const data = snapshot.docs.map(doc => ({
                    ...doc.data(),
                }));
                setItemList(data);
                setStatus("Success");
            })
        }catch(error){
            console.log("FireStore Fn Error", error)
            setStatus("Error")
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return{
        data: itemList,
        status,
        isLoading: status === "Loading",
        isReady: status === "ready",
    };
};