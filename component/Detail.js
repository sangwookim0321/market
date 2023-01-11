import { Container, Item_Wrap_Detail, Item_Text_Box,
    Text_Name, Text_Gray, Text_Price, Image_Box, Img,
    Text_h3, Text_P_tag
} from "../styles/commonStyeld"
import { Button, Divider } from "semantic-ui-react";
import Numeral from "numeral";
import Link from "next/link"

import { useAtom } from "jotai";
import { Find_Data } from "../jotai/jotaiProvider";

export default function Detail({ data }){

    const [find_Get_Data, set_Find_Data] = useAtom(Find_Data);
    
    return(
        <Container>
            <Item_Wrap_Detail>
                <Image_Box>
                    <Img src={data.URL} alt={data.이름} />
                </Image_Box>
                <Item_Text_Box>
                    <Text_Name>{data.이름}</Text_Name>
                    <Text_Price>{Numeral(data.가격).format(0,0)}원</Text_Price>
                    <Text_Gray>{data.카테고리}</Text_Gray>
                    {/* <Link> */}
                        <Button color="black">구매하기</Button>
                    {/* </Link> */}
                </Item_Text_Box>
            </Item_Wrap_Detail>
            <Divider/>
            <Text_h3 as="h3">Description</Text_h3>
            <Text_P_tag>{data.설명}</Text_P_tag>
        </Container>
    )
}