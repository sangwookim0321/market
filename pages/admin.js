import { Button } from "semantic-ui-react";

import { useRouter } from "next/router";
import auth from "../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Admin(){

    const router = useRouter();

    const [user, loading] = useAuthState(auth);

    if(loading){
        return <div>Loading...</div>
    }
    if(!user){
        router.push("/");
        return <div>please sign in to continue</div>
    }

    const logOut = () => {
        auth.signOut();
    }

    return(
        <div>
            <div>
                <span>어드민 페이지</span>
                <Button onClick={logOut}>로그아웃</Button>
            </div>
        </div>
    )
}