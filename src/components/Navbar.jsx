import React from 'react'
import styled from 'styled-components' 
import SearchIcon from '@mui/icons-material/Search';
const Container = styled.div`
    height:60px;
 
        
`
const Wrapper = styled.div`
 padding:10px 20px ;
display : flex ;
justify-content : space-between;
`

const Left = styled.div`
flex :1;
`
const SearchContainer = styled.div `
font-size:14px;

`
const Language = styled.div `
font-size:14px;
cursor :pointer;
`
const Center = styled.div`
flex :1;
 `
const Right = styled.div`
flex :1;
`


const Navbar = () => {
  return (
   <Container>
    <Wrapper>
       <Left>
        <Language>VN</Language>
        <SearchContainer>
            
        <SearchIcon/>
        </SearchContainer>
        </Left>
       <Center>Center</Center>
       <Right>Right</Right>
    </Wrapper>
   </Container>
  )
}

export default Navbar

