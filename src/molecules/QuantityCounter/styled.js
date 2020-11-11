import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    align-self: center;
    grid-column: 5 / 6;
    grid-row: 1 / 2;
`;

export const CounterOutput = styled.output`
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    color: ${({ theme }) => theme.colors.AthensGray};

    @media(max-width: ${({ theme }) => theme.breakPoints.mobileBreak}){
        font-size: 10px;
        height: 20px;
        width: 20px;
    }

`;

