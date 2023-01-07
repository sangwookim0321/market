import { Loader } from "semantic-ui-react";

export default function Loaders(){

    return(
        <div style={{ padding: "200px 0" }}>
        <Loader inline="centered" active>Loading</Loader>
        </div>
    )
}