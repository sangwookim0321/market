import firebase from "./firebaseApp"

export const useData = async () => {

    const db = firebase.firestore();
    const dataList = db.collection("product");
    const snapshot = await dataList.get();
    const data = snapshot.docs.map(doc => ({
      ...doc.data(),
    }));

    return{
        data: JSON.stringify(data),
    };
};