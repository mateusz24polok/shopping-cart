import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.Snuff};
    border: 1px solid ${({ theme }) => theme.colors.AthensGray};
    color: ${({ theme }) => theme.colors.AthensGray};
    font-weight: 700;
    padding: 5px;
    height: 30px;
    width: 30px;
    cursor: pointer;
    transition: background-color 0.15s linear;

    @media(max-width: ${({ theme }) => theme.breakPoints.mobileBreak}){
        font-size: 10px;
        height: 20px;
        width: 20px;
    }

    &:hover{
        background-color: ${({ theme }) => theme.colors.Whisper};
    }
`;