import styled from "styled-components";
import Tenada from '../style/fonts/Tenada.ttf'


export const HomeTitle = styled.div`
font-size:20px;
`

//Header
export const HeaderTitle = styled.h1`
  @font-face {
    text-align:center;
    font-family: 'CustomFont';
    src: url(${Tenada}) format('woff2');
  }
  font-family: 'CustomFont';
  font-size:70px;
  padding:20px;
  text-shadow: 2px 2px 2px white;
  
`

export const Header = styled.header`
text-align:center;
margin-bottom:10px;
background-color:#F0A04B;
`

//button
export const Button = styled.button`
border:none;
background-color:${(props) => props.type === 'positive' ? '#F0F0F0' : '#F8F4EA'};
color: ${(props) => props.type === 'positive' ? '#3C486B' : '#243763'};
padding:10px;
width:100px;
font-weight:600;
&:hover{
  background-color:${(props) => props.type === 'positive' ? '#579BB1' : '#CE7777'};
color: ${(props) => props.type === 'positive' ? '#F0F0F0' : '#F8F4EA'};
transform: scale(1.05);
cursor: pointer;
}
`