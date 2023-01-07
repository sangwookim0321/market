import {
    Text_Gray, Container, Item_Wrap,
    Item_Text_Box, Text_Price, Text_Name
} from "../styles/commonStyeld";
import { Grid } from 'semantic-ui-react'
import Numeral from "numeral";

import Link from "next/link";
import { useData } from "../firebase/useData"

export default function ItemList({itemList}){

    const { data } = useData();

    return(
        <Container>
            <Grid columns={3} divided>
                <Grid.Row>
                {
                    itemList == [] ? data.map((item) => {
                        return(
                            <Grid.Column key={item.id}>
                                <Item_Wrap>
                                <Link href={`/view/${item.id}`}>
                                    <img src={item.URL} alt={item.이름} />
                                </Link>
                                    <Item_Text_Box>
                                        <Text_Name>{item.이름}</Text_Name>
                                        <Text_Gray>{item.카테고리}</Text_Gray>
                                        <Text_Price>{Numeral(item.가격).format(0,0)}원</Text_Price>
                                    </Item_Text_Box>
                                </Item_Wrap>
                            </Grid.Column>
                        )
                    })
                : itemList.map((item) => {
                    return(
                        <Grid.Column key={item.id}>
                            <Item_Wrap>
                            <Link href={`/view/${item.id}`}>
                                <img src={item.URL} alt={item.이름} />
                            </Link>
                                <Item_Text_Box>
                                    <Text_Name>{item.이름}</Text_Name>
                                    <Text_Gray>{item.카테고리}</Text_Gray>
                                    <Text_Price>{Numeral(item.가격).format(0,0)}원</Text_Price>
                                </Item_Text_Box>
                            </Item_Wrap>
                        </Grid.Column>
                    )
                })
            }











                {/* {
                itemList.map((item) => {
                    return(
                        <Grid.Column key={item.id}>
                            <Link href={`/view/${item.id}`}>
                                <a>
                            <Item_Wrap>
                                <img src={item.URL} alt={item.이름} />
                                <Item_Text_Box>
                                    <strong>{item.이름}</strong>
                                    <Text_Gray>{item.카테고리}</Text_Gray>
                                    <Text_Price>{Numeral(item.가격).format(0,0)}원</Text_Price>
                                </Item_Text_Box>
                            </Item_Wrap>
                                </a>
                            </Link>
                            
                        </Grid.Column>
                    )
                })
                } */}
                </Grid.Row>
            </Grid>
        </Container>
    )
}



