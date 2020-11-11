import React from "react";
import { ModalWrapper, Modal, StyledIconButton, Message } from "./styled";
import XIcon from "../../assets/images/x-img.png";

const CheckoutModal = () => {
    return (
        <ModalWrapper>
            <Modal >
                <StyledIconButton
                    image={XIcon}
                    width="30px"
                    height="30px"
                />
                <Message>Your order has been submitted successfully</Message>
            </Modal>
        </ModalWrapper >
    )
};

export default CheckoutModal;