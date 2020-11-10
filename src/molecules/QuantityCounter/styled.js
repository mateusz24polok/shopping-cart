import styled from "styled-components";

export const StyledWrapper = styled.div.attrs({ className: "QuantityCounter" })`
    grid-area: QuantityCounter;
    height: 40px;
    display: flex;
    align-self: center;
`;

export const CounterOutput = styled.output`
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    color: ${({ theme }) => theme.colors.AthensGray};
`;
