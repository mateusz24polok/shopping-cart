import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalWrapper, Modal, StyledIconButton, Message } from "./styled";
import { closeModal, selectShoppingCartItems, shoppingCartReset, summarizeReset } from "../../slices/ShoppingCartSlice";
import XIcon from "../../assets/images/x-img.png";

const CheckoutModal = () => {

    //Take dispatch from react-redux

    const dispatch = useDispatch();

    //Take size of ShoppingCart

    const shoppingCartSize = useSelector(selectShoppingCartItems).length;

    //Function for Modal close  -  First clear Shopping Cart and Summary section then close Modal with message 

    const handleModalClose = () => {
        dispatch(shoppingCartReset());
        dispatch(summarizeReset());
        dispatch(closeModal());
    };

    return (
        <ModalWrapper>
            <Modal >
                <StyledIconButton
                    onClick={handleModalClose}
                    image={XIcon}
                    width="30px"
                    height="30px"
                />
                <Message>
                    {shoppingCartSize !== 0 ? "Your order has been submitted successfully" : "Your Shopping Cart is empty"}
                </Message>
            </Modal>
        </ModalWrapper >
    );
};

export default CheckoutModal;