import Gnb from "./Gnb";
import {
  Container, Wrap, Logo_Box, Text_Title
} from "../styles/commonStyeld";

export default function Top() {

  return (
    <Container>
      <Wrap>
        <Logo_Box>
          <img
            src="/images/logo_500px.png"
            alt="logo"
            style={{ display: "block", width: 80 }}
          />
        </Logo_Box>
        <Text_Title>더 할인 마켓</Text_Title>
      </Wrap>
      <Gnb />
    </Container>
  );
}



