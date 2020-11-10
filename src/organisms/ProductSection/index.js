import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Section,
    ProductNameTitle,
    ProductUnitTitle,
    ProductQuantityTitle,
    FirstBreakingLine,
    SecondBreakingLine,
    ProductPicture,
    ProductTitle,
    ProductPrice,
    UpdateButton
} from "./styled";
import QuantityCounter from "../../molecules/QuantityCounter";
import IconButton from "../../components/IconButton";
import { selectShoppingCartItems, removeItem } from "../../slices/ShoppingCartSlice";
import XIcon from "../../assets/images/x-img.png";

export const ProductSection = () => {
    const dispatch = useDispatch();
    const items = useSelector(selectShoppingCartItems);

    const removeItemHandler = id => {
        dispatch(removeItem(id));
    }

    return (
        <Section>
            <ProductNameTitle>Product Name</ProductNameTitle>
            <ProductUnitTitle>Unit Price</ProductUnitTitle>
            <ProductQuantityTitle>Qty</ProductQuantityTitle>
            <FirstBreakingLine />
            {items && items.map(item => (
                <>
                    <IconButton
                        onClick={() => { removeItemHandler(item.id) }}
                        image={XIcon}
                        xPosition="left"
                        gridArea="RemoveButton"
                    />
                    <ProductPicture src={item.image} />
                    <ProductTitle>{item.name}</ProductTitle>
                    <ProductPrice>{`$${item.price}`}</ProductPrice>
                    <QuantityCounter id={item.id} />
                    <SecondBreakingLine />
                </>
            ))}
            <UpdateButton>Update Shopping Cart</UpdateButton>
        </Section>
    );
};

export default ProductSection;