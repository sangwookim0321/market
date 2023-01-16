import { Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import auth from "../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Admin(){

    const [user, loading] = useAuthState(auth);

    const router = useRouter();

    const logOut = async () => {
        await auth.signOut();
        localStorage.removeItem("admin");
        alert("로그아웃 성공");
        window.location.reload();
    }

    const Page_Check = () => {
        const admin_Check = localStorage.getItem("admin");
        if(!admin_Check){
            alert("관리자 페이지 입니다.");
            router.push("/");
        }
    }

    useEffect(() => {
        Page_Check();
    }, [])
    
    return(
        <div>
            <div>
                <span>어드민 페이지</span>
                <Button onClick={logOut}>로그아웃</Button>
            </div>
        </div>
    )
}