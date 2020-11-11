import styled from "styled-components";

export const StyledWrapper = styled.div`
    max-width: 1000px;
    margin: 50px auto;
`;

export const Main = styled.main`
    display: flex;

    @media(max-width: ${({ theme }) => theme.breakPoints.tabletBreak}){
        justify-content: center;
        flex-wrap: wrap;
    }
`;