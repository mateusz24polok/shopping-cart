import React from "react";
import { useSelector } from "react-redux";
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
import { selectSummmaryShipping, selectSummmarySubtotal, selectSummmaryGrandTotal } from "../../slices/ShoppingCartSlice";

const PurchaseSummary = () => {

    // Take summary state variables from redux store

    const summaryShipping = useSelector(selectSummmaryShipping);
    const summarySubtotal = useSelector(selectSummmarySubtotal);
    const summaryGrandTotal = useSelector(selectSummmaryGrandTotal);

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
                    <PrimaryButton>Proceed to checkout</PrimaryButton>
                </TotalCartsDetails>
            </div>
        </aside>
    );
};

export default PurchaseSummary;
