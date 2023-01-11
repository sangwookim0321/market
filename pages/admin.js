import { Button } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function Admin(){

    const router = useRouter();
    
    return(
        <div>
            {
                // admin && admin.uid == "d6zEbHiHb5UYRR567nHRxTAe1by1" ? 
                <div>
                    <span>어드민 페이지</span>
                    <Button>로그아웃</Button>
                </div>
                // : null
            }
        </div>
    )
}