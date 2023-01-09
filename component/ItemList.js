import {
    Text_Gray, Container, Item_Wrap,
    Item_Text_Box, Text_Price, Text_Name
} from "../styles/commonStyeld";
import { Grid } from 'semantic-ui-react'
import Numeral from "numeral";

import Link from "next/link";

export default function ItemList({ data }){

    return(
        <Container>
            <Grid columns={3} divided>
                <Grid.Row>
                {
                    data.map(( item ) => {
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
                </Grid.Row>
            </Grid>
        </Container>
    )
}



