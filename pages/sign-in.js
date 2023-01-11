import { Button } from "semantic-ui-react";
import { useRouter } from "next/router";

import auth from "../firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login(){
    
    const router = useRouter();

    const [user, loading] = useAuthState(auth);
    
    if(loading){
        return <div>Loading...</div>
    }

    const provider = new GoogleAuthProvider();

    const signIn = async () => {
        const result = await signInWithPopup(auth, provider);
        
        const token = await result.user.getIdToken();

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
