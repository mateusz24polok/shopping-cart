import styled from "styled-components";

export const ShippingSummary = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    background-color: ${({ theme }) => theme.colors.Snuff};
    padding: 0 15px;
    border: 1px solid ${({ theme }) => theme.colors.AthensGray};
`;

export const ShippingSummaryTitle = styled.p`
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    padding: 0;
`;

export const ShippingSummaryPrice = styled.p`
    font-weight: 700;
`;

export const TotalCartsTitle = styled.p`
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.Snuff};
    border: 1px solid ${({ theme }) => theme.colors.AthensGray};
    padding: 10px 15px;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 0;
`;

export const TotalCartsDetails = styled.div`
    padding: 10px 15px 25px 15px;
    background-color: ${({ theme }) => theme.colors.Whisper};
    border: 1px solid ${({ theme }) => theme.colors.AthensGray};
    border-top: none;
`;

export const TotalCartsDetailsSubtotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.AthensGray};
`;

export const TotalCartsDetailsSubtotalTitle = styled.p`
    padding-left: 5px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.AthensGray};
`;

export const TotalCartsDetailsSubtotalPrice = styled.p`
    font-weight: 700;
`;

export const TotalCartsDetailsGrandTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TotalCartsDetailsGrandTotalTitle = styled.p`
    padding-left: 5px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.AthensGray};
`;


export const TotalCartsDetailsGrandTotalPrice = styled.p`
    font-weight: 700;
    font-size: 20px;
`;






