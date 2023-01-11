import { Container_App } from "../styles/commonStyeld"
import '../styles/globals.css'
import '../styles/reset.css'
import "semantic-ui-css/semantic.min.css";

import { Provider } from "jotai"

import Footer from "../component/Footer";
import Top from "../component/Top";

export default function App({ Component, pageProps }) {

  return(
    <Provider>
    <Container_App>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </Container_App>
    </Provider>
  ) 
}


