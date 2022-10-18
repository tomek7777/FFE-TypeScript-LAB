import { link } from "fs";
import { FC } from "react"
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Posts } from "../Routes/Posts/posts";

const Wrapper = styled.div`
    border: 10px solid ${stackColor.black}l
`;

const SecondSpan = styled(Posts)`
    border: 3px solid yellow;
`;

const ExampleDiv = styled.div<{isActive: boolean}>`
    background: yellow;
    ${props => props.isActive && css`
        background: blue;
    `}
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