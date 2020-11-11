import React from "react";
import { useSelector } from "react-redux";
import { StyledWrapper, Main } from "./styled";
import Header from "../../organisms/Header";
import ProductSection from "../../organisms/ProductSection";
import PurchaseSummary from "../../organisms/PurchaseSummary";
import CheckoutModal from "../../templates/CheckoutModal";
import { selectCheckoutOpen } from "../../slices/ShoppingCartSlice";

const MainPage = () => {

    //Take state of Modal Open/Close

    const isCheckoutOpen = useSelector(selectCheckoutOpen);

    return (
        <>
            <StyledWrapper>
                <Header />
                <Main>
                    <ProductSection />
                    <PurchaseSummary />
                </Main>
            </StyledWrapper>
            {isCheckoutOpen && <CheckoutModal />}
        </>
    );
};

export default MainPage;