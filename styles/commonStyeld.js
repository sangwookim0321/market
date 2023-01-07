import styled from "styled-components"

// 컨테이너
export const Container = styled.div`
    padding: 24px;
`
export const Container_App = styled.div`
    width: 80%;
    margin: 0 auto;
`
export const Container_Footer = styled.div`
    margin-top: 4;
    padding: 40px 0;
    text-align: center;
`

// 박스
export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
`
export const Item_Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
export const Item_Wrap_Detail = styled.div`
    display: flex;
`
export const Item_Text_Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px 12px;
    line-height: 2;
`
export const Item_Text_Box_Detail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px 0px;
    line-height: 2;
`
export const Image_Box = styled.div`
`
export const Logo_Box = styled.div`

`
export const Img = styled.img`
    border-radius: 8px;
`

// 텍스트
export const Text_Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    font-family: var(--font_noto_sans_kR);
`
export const Text_h3 = styled.h3`
    font-family: var(--font_noto_sans_kR);
`
export const Text_Gray = styled.span`
    color: var(--font-color-gray);
    font-family: var(--font_noto_sans_kR);
`
export const Text_Name = styled.span`
    color: var(--font-color-black);
    font-family: var(--font_noto_sans_kR);
    font-weight: bold;
`
export const Text_Price = styled.span`
    color: var(--font-color-sky);
    font-family: var(--font_noto_sans_kR);
    font-weight: bold;
`
export const Text_P_tag = styled.p`
    font-family: var(--font_noto_sans_kR);
    font-weight: bold;
`

