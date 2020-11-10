import React from "react";
import { StyledWrapper, Title } from "./styled";
import PrimaryButton from "../../components/PrimaryButton";

const Header = () => {
    return (
        <StyledWrapper>
            <Title>Shopping Cart</Title>
            <PrimaryButton>Proceed to checkout</PrimaryButton>
        </StyledWrapper>
    );
};

export default Header;