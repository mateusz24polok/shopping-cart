import styled from "styled-components";
import IconButton from "../../components/IconButton";

export const ModalWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(20,20,20,0.5);
`;

export const Modal = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 80%;
    background-color: white;
`;

export const Message = styled.h2`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const StyledIconButton = styled(IconButton)`
    position: absolute;
    top: 20px;
    left: 20px;
`;

