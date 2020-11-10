import React from "react";
import {
    Section,
    ProductNameTitle,
    ProductUnitTitle,
    ProductQuantityTitle,
    FirstBreakingLine,
    SecondBreakingLine,
    RemoveButton,
    ProductPicture,
    ProductTitle,
    ProductPrice,
    UpdateButton
} from "./styled";
import QuantityCounter from "../../molecules/QuantityCounter";
import IconButton from "../../components/IconButton";
import HeadphonesImage from "../../assets/images/headphones.png";
import XIcon from "../../assets/images/x-img.png";

export const ProductSection = () => {
    return (
        <Section>
            <ProductNameTitle>Product Name</ProductNameTitle>
            <ProductUnitTitle>Unit Price</ProductUnitTitle>
            <ProductQuantityTitle>Qty</ProductQuantityTitle>
            <FirstBreakingLine />
            <IconButton
                image={XIcon}
                xPosition="left"
                gridArea="RemoveButton"
            />
            <ProductPicture src={HeadphonesImage} />
            <ProductTitle>Headphones</ProductTitle>
            <ProductPrice>$11.90</ProductPrice>
            <QuantityCounter />
            <SecondBreakingLine />
            <UpdateButton>Update Shopping Cart</UpdateButton>
        </Section>
    );
};

export default ProductSection;