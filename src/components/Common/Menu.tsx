import { FC } from "react"
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { colorStack } from "../../style/colorStack";
import { Posts } from "../Routes/Posts/posts";
import { SomeSpan } from "./Components";

const Wrapper = styled.div`
    border: 10px solid ${colorStack.black}l
`;

const SecondSpan = styled(SomeSpan)`
    border: 3px solid yellow;
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
        <Wrapper>
            <SecondSpan>abcdeefgascxz</SecondSpan>
            <ExampleDiv isActive> div </ExampleDiv>
            <ExampleDiv isActive={false}> div2 </ExampleDiv>
            <Link to="posts">Posts</Link>
            <Link to="/">Home</Link>
        </Wrapper>
    )
}