import React from "react";
import { StyledWrapper, Main } from "./styled";
import Header from "../../organisms/Header";
import ProductSection from "../../organisms/ProductSection";
import PurchaseSummary from "../../organisms/PurchaseSummary";

const MainPage = () => {
    return (
        <StyledWrapper>
            <Header />
            <Main>
                <ProductSection />
                <PurchaseSummary />
            </Main>
        </StyledWrapper>
    );
};

export default MainPage;