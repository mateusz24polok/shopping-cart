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
    UpdateButton,
} from "./styled";
import QuantityCounter from "../../molecules/QuantityCounter";
import IconButton from "../../components/IconButton";
import { selectShoppingCartItems, removeItem, shoppingCartSummarize, summarizeReset } from "../../slices/ShoppingCartSlice";
import XIcon from "../../assets/images/x-img.png";

export const ProductSection = () => {

    // This is main component of chosen product and its details like price and quantity
    // Product is rednder with map funciton on the base of redux state
    // Here are also funtions and functionality of remove this item and update whole Shopping Cart

    //Take dispatch from react-redux

    const dispatch = useDispatch();

    //Take array of items from redux state

    const items = useSelector(selectShoppingCartItems);

    //Function which firstly removeItem on the base of specific ID and then reset values of Shopping Cart

    const removeItemHandler = id => {
        dispatch(removeItem(id));
        dispatch(summarizeReset());
    }

    //Refresh values of Shopping Cart

    const updateButtonHandler = () => {
        dispatch(shoppingCartSummarize());
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
                        gridArea="RemoveButton"
                        width="30px"
                        height="30px"
                        gridVerticalCenter
                    />
                    <ProductPicture src={item.image} />
                    <ProductTitle>{item.name}</ProductTitle>
                    <ProductPrice>{`$${item.price}`}</ProductPrice>
                    <QuantityCounter id={item.id} />
                    <SecondBreakingLine />
                </>
            ))}
            <UpdateButton onClick={updateButtonHandler}>Update Shopping Cart</UpdateButton>
        </Section>
    );
};

export default ProductSection;