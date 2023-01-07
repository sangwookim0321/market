import { useRouter } from "next/router";
import { useEffect } from "react";

import { useData } from "../../firebase/useData";
import { useAtom } from "jotai";
import { DetailItem, Status } from "../../jotai/jotaiProvider";

import Detail from "../../component/Detail";
import Loaders from "../../component/Loader";

const Post = () => {
    
    const router = useRouter();
    const { id } = router.query;
    const { data } = useData();

    const [getDetailItem, setDetailItem] = useAtom(DetailItem);
    const [status, setStatus] = useAtom(Status);

    const getItem = () => {
        setDetailItem(data.find((item) => item.id == id));
    }
    
    useEffect(() => {
        getItem();
    }, [data])

    return(
        <>
            {
                status == "Loading" ? <Loaders/> : <Detail/>
            }
        </>
    )
}

export default Post;