import { Container, Item_Wrap_Detail, Item_Text_Box,
    Text_Name, Text_Gray, Text_Price, Image_Box, Img,
    Text_h3, Text_P_tag
} from "../styles/commonStyeld"
import { Button, Divider } from "semantic-ui-react";
import Numeral from "numeral";

import { useAtom } from "jotai";
import { Find_Data } from "../jotai/jotaiProvider";

export default function Detail(){

    const [find_Get_Data, set_Find_Data] = useAtom(Find_Data);
    
    return(
        <Container>
            <Item_Wrap_Detail>
                <Image_Box>
                    <Img src={find_Get_Data?.URL} alt={find_Get_Data?.이름} />
                </Image_Box>
                <Item_Text_Box>
                    <Text_Name>{find_Get_Data?.이름}</Text_Name>
                    <Text_Price>{Numeral(find_Get_Data?.가격).format(0,0)}원</Text_Price>
                    <Text_Gray>{find_Get_Data?.카테고리}</Text_Gray>
                    <Button color="black">구매하기</Button>
                </Item_Text_Box>
            </Item_Wrap_Detail>
            <Divider/>
            <Text_h3 as="h3">Description</Text_h3>
            <Text_P_tag>{find_Get_Data?.설명}</Text_P_tag>
        </Container>
    )
}