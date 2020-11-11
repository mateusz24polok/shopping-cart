import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    ShippingSummary,
    ShippingSummaryTitle,
    ShippingSummaryPrice,
    TotalCartsDetails,
    TotalCartsTitle,
    TotalCartsDetailsSubtotal,
    TotalCartsDetailsSubtotalTitle,
    TotalCartsDetailsSubtotalPrice,
    TotalCartsDetailsGrandTotal,
    TotalCartsDetailsGrandTotalTitle,
    TotalCartsDetailsGrandTotalPrice
} from "./styled";
import PrimaryButton from "../../components/PrimaryButton";
import {
    selectSummmaryShipping,
    selectSummmarySubtotal,
    selectSummmaryGrandTotal,
    openModal,
} from "../../slices/ShoppingCartSlice";

const PurchaseSummary = () => {

    // Take dispatch from react-redux

    const dispatch = useDispatch();

    // Take summary state variables from redux store

    const summaryShipping = useSelector(selectSummmaryShipping);
    const summarySubtotal = useSelector(selectSummmarySubtotal);
    const summaryGrandTotal = useSelector(selectSummmaryGrandTotal);

    // Function for handle Modal Open - only open the Modal, clear shopping cart and summarize section will be after modal close

    const handleModalOpen = () => {
        dispatch(openModal());
    };

    return (
        <aside>
            <ShippingSummary>
                <ShippingSummaryTitle>Shipping</ShippingSummaryTitle>
                <ShippingSummaryPrice>{summaryShipping.toFixed(2)}</ShippingSummaryPrice>
            </ShippingSummary>
            <div>
                <TotalCartsTitle>Cart Totals</TotalCartsTitle>
                <TotalCartsDetails>
                    <TotalCartsDetailsSubtotal>
                        <TotalCartsDetailsSubtotalTitle>Subtotal</TotalCartsDetailsSubtotalTitle>
                        <TotalCartsDetailsSubtotalPrice>{summarySubtotal.toFixed(2)}</TotalCartsDetailsSubtotalPrice>
                    </TotalCartsDetailsSubtotal>
                    <TotalCartsDetailsGrandTotal>
                        <TotalCartsDetailsGrandTotalTitle>Grand Total</TotalCartsDetailsGrandTotalTitle>
                        <TotalCartsDetailsGrandTotalPrice>{summaryGrandTotal.toFixed(2)}</TotalCartsDetailsGrandTotalPrice>
                    </TotalCartsDetailsGrandTotal>
                    <PrimaryButton onClick={handleModalOpen}>Proceed to checkout</PrimaryButton>
                </TotalCartsDetails>
            </div>
        </aside>
    );
};

export default PurchaseSummary;
