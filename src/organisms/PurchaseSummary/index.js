import React from "react";
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

const PurchaseSummary = () => {
    return (
        <aside>
            <ShippingSummary>
                <ShippingSummaryTitle>Shipping</ShippingSummaryTitle>
                <ShippingSummaryPrice>$23.80</ShippingSummaryPrice>
            </ShippingSummary>
            <div>
                <TotalCartsTitle>Cart Totals</TotalCartsTitle>
                <TotalCartsDetails>
                    <TotalCartsDetailsSubtotal>
                        <TotalCartsDetailsSubtotalTitle>Subtotal</TotalCartsDetailsSubtotalTitle>
                        <TotalCartsDetailsSubtotalPrice>$23.80</TotalCartsDetailsSubtotalPrice>
                    </TotalCartsDetailsSubtotal>
                    <TotalCartsDetailsGrandTotal>
                        <TotalCartsDetailsGrandTotalTitle>Grand Total</TotalCartsDetailsGrandTotalTitle>
                        <TotalCartsDetailsGrandTotalPrice>$23.80</TotalCartsDetailsGrandTotalPrice>
                    </TotalCartsDetailsGrandTotal>
                    <PrimaryButton>Proceed to checkout</PrimaryButton>
                </TotalCartsDetails>
            </div>
        </aside>
    );
};

export default PurchaseSummary;
