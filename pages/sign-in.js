import { Button, Form } from "semantic-ui-react";
import { useRouter } from "next/router";

import { auth } from "../firebase/firebaseAuth";
import { useAtom } from "jotai";
import { Admin_ID, Admin_PASSWORD } from "../jotai/jotaiProvider";

export default function Login(){

    const [email, setEmail] = useAtom(Admin_ID);
    const [password, setPassword] = useAtom(Admin_PASSWORD);

    const router = useRouter();

    const submit = async () => {

    }

    return(
        <div>
            <Form>
                <Form.Field inline>
                    <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                </Form.Field>
                <Form.Field inline>
                    <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Field>
                <Button onClick={submit}>접속</Button>
            </Form>
        </div>
    )
}
