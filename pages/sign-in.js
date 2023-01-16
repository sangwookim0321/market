import { Button } from "semantic-ui-react";
import { useRouter } from "next/router";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAtom } from "jotai";
import { Local_Token } from "../jotai/jotaiProvider";

export default function Login(){
    
    const [user, loading] = useAuthState(auth);
    const [admin_Token, set_Admin_Token] = useAtom(Local_Token);
    
    const router = useRouter();
    
    if(loading){
        return <div>Loading...</div>
    }
    
    const provider = new GoogleAuthProvider();
    
    const signIn = async () => {
        const result = await signInWithPopup(auth, provider);
        
        const token = await result.user.getIdToken();
        if(result.user.email == "pointjumpit@gmail.com"){
            localStorage.setItem("admin", token);
            set_Admin_Token(token);
        }

        await fetch("/api/login", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ token }),
        })
        await router.push("/admin")
    }

    return(
        <div>
            <Button onClick={signIn}>관리자 로그인</Button>
        </div>
    )
}
