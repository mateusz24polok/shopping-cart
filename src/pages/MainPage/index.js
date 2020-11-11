import React from "react";
import { StyledWrapper, Main } from "./styled";
import Header from "../../organisms/Header";
import ProductSection from "../../organisms/ProductSection";
import PurchaseSummary from "../../organisms/PurchaseSummary";
import CheckoutModal from "../../templates/CheckoutModal";

const MainPage = () => {
    return (
        <>
            <StyledWrapper>
                <Header />
                <Main>
                    <ProductSection />
                    <PurchaseSummary />
                </Main>
            </StyledWrapper>
            {true && <CheckoutModal />}
        </>
    );
};

export default MainPage;