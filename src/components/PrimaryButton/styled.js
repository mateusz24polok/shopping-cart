import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.PrimaryButtonBackground};
    color: ${({ theme }) => theme.colors.PrimaryButtonFont};
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.15s linear;

    &:hover{
        background-color: ${({ theme }) => theme.colors.PrimaryButtonHover}
    }
`;