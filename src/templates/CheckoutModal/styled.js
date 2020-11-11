import styled from "styled-components";
import IconButton from "../../components/IconButton";

export const ModalWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(20,20,20,0.5);
`;

export const Modal = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 40%;
    background-color: ${({theme})=>theme.colors.AthensGray};
    box-shadow: 1px 1px 7px -2px ${({ theme }) => theme.colors.Snuff};

    @media(max-width: ${({ theme }) => theme.breakPoints.tabletBreak}){
        width: 60%;
        height: 30%;
    }
`;

export const Message = styled.h2`
    grid-row: 2 / 3;
    text-align: center;
    letter-spacing: 1px;
`;

export const StyledIconButton = styled(IconButton)`
    grid-row: 1 / 2;
`;

