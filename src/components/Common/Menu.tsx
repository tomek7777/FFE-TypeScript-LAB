import { FC } from "react"
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { colorStack } from "../../style/colorStack";
import { Posts } from "../Routes/Posts/posts";
import { SomeSpan } from "./Components";


const Container = styled.div`
    background: #2b2e39;
    margin: 0 auto;
    width: 80%;
    max-width: 600px;
    padding: 14px;
    border-radius: 14px;
    margin-top: 14px;

`;



const Button = styled.button`
    
`

const Wrapper = styled.div`
    border: 3px solid ${colorStack.wheat}    
    
    
`;

const SecondSpan = styled(SomeSpan)`
    align-content: center;
    font-size: 30px;
    color: #f5deb3;
    
    
`;

const ExampleDiv = styled.div<{isActive: boolean}>`
    background: yellow;
    ${props => props.isActive && css`
        background: blue;
    `}
`;

const NewLink= styled(Link)`
    
`;

export const Menu: FC = () => {
    return(
        <Container>
        <Link to="posts">Posts  </Link>            
        <Link to="/">Home</Link>
        <SecondSpan>Panel logowania</SecondSpan>
        <Wrapper>            
            <ExampleDiv isActive> div </ExampleDiv>
            <ExampleDiv isActive={false}> div2 </ExampleDiv>
            
        </Wrapper>
        <Button>Zarejestruj</Button>
        </Container>
    )
}