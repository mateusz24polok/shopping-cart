import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { computer, Headphones } from "../../assets/data/exampleProducts";
import {
    Section,
    ProductNameTitle,
    ProductUnitTitle,
    ProductQuantityTitle,
    ProductPicture,
    ProductTitle,
    ProductPrice,
    UpdateButton,
    GridSection,
    AddButton,
    BasicBreakingLine
} from "./styled";
import QuantityCounter from "../../molecules/QuantityCounter";
import IconButton from "../../components/IconButton";
import { selectShoppingCartItems, removeItem, shoppingCartSummarize, addItem } from "../../slices/ShoppingCartSlice";
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
        dispatch(shoppingCartSummarize());
    };

    //Refresh values of Shopping Cart

    const updateButtonHandler = () => {
        dispatch(shoppingCartSummarize());
    };

    //Add Computer Function

    const addComputerHandler = () => {
        dispatch(addItem(computer));
        dispatch(shoppingCartSummarize());
    }

    //Add Headphones Function

    const addHeadphonesHandler = () => {
        dispatch(addItem(Headphones));
        dispatch(shoppingCartSummarize());
    }

    return (
        <Section>
            <GridSection>
                <ProductNameTitle>Product Name</ProductNameTitle>
                <ProductUnitTitle>Unit Price</ProductUnitTitle>
                <ProductQuantityTitle>Qty</ProductQuantityTitle>
            </GridSection>
            <BasicBreakingLine marginBottom />

            {items && items.map(item => (
                <GridSection key={item.id}>
                    <IconButton
                        onClick={() => { removeItemHandler(item.id) }}
                        image={XIcon}
                        width="30px"
                        height="30px"
                        gridVerticalCenter
                    />
                    <ProductPicture alt={item.name} src={item.image} />
                    <ProductTitle>{item.name}</ProductTitle>
                    <ProductPrice>{`$${item.price}`}</ProductPrice>
                    <QuantityCounter id={item.id} />
                </GridSection>
            ))}

            <BasicBreakingLine marginTop />
            <GridSection>
                <AddButton onClick={addComputerHandler}>Add Computer</AddButton>
                <AddButton onClick={addHeadphonesHandler}>Add Headphones</AddButton>
                <UpdateButton onClick={updateButtonHandler}>Update Shopping Cart</UpdateButton>
            </GridSection>
        </Section>
    );
};

export default ProductSection;