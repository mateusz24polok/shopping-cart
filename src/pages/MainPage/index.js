import React from "react";
import { StyledWrapper } from "./styled";
import Header from "../../organisms/Header";
import ProductSection from "../../organisms/ProductSection";

const MainPage = () => {
    return (
        <StyledWrapper>
            <Header />
            <ProductSection />
        </StyledWrapper>
    );
};

export default MainPage;