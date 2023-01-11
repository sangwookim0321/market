import db from "./db";
import { collection, getDocs, query } from "firebase/firestore"

export const useData = async () => {
    
    const data = await getDocs(query(collection(db, "product")))
    .then(result => {
      const newList = [];
      result.forEach(doc => {
        const current_data = doc.data();
        newList.push(current_data);
      })
      return newList;
    })

    return{
        data: JSON.stringify(data),
    };
};