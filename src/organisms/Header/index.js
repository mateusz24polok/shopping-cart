import React from "react";
import { useDispatch } from "react-redux";
import { StyledWrapper, Title } from "./styled";
import PrimaryButton from "../../components/PrimaryButton";
import { openModal } from "../../slices/ShoppingCartSlice";

const Header = () => {

    //Take dispatch from react-redux

    const dispatch = useDispatch();

    // Function for handle Modal Open - only open the Modal, clear shopping cart and summarize section will be after modal close

    const handleModalOpen = () => {
        dispatch(openModal());
    };

    return (
        <StyledWrapper>
            <Title>Shopping Cart</Title>
            <PrimaryButton onClick={handleModalOpen}>Proceed to checkout</PrimaryButton>
        </StyledWrapper>
    );
};

export default Header;