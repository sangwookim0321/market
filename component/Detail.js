import { Container, Item_Wrap_Detail, Item_Text_Box,
    Text_Name, Text_Gray, Text_Price, Image_Box, Img,
    Text_h3, Text_P_tag
} from "../styles/commonStyeld"
import { Button, Divider } from "semantic-ui-react";
import Numeral from "numeral";

import { useAtom } from "jotai";
import { Detail_Item } from "../jotai/jotaiProvider";

export default function Detail(){

    const [get_Detail_Item, set_Detail_Item] = useAtom(Detail_Item);
    
    return(
        <Container>
            <Item_Wrap_Detail>
                <Image_Box>
                    <Img src={get_Detail_Item?.URL} alt={get_Detail_Item?.이름} />
                </Image_Box>
                <Item_Text_Box>
                    <Text_Name>{get_Detail_Item?.이름}</Text_Name>
                    <Text_Price>{Numeral(get_Detail_Item?.가격).format(0,0)}원</Text_Price>
                    <Text_Gray>{get_Detail_Item?.카테고리}</Text_Gray>
                    <Button color="black">구매하기</Button>
                </Item_Text_Box>
            </Item_Wrap_Detail>
            <Divider/>
            <Text_h3 as="h3">Description</Text_h3>
            <Text_P_tag>{get_Detail_Item?.설명}</Text_P_tag>
        </Container>
    )
}