import styled from "styled-components";
import XIcon from "../../assets/images/x-img.png";

export const Section = styled.section`
    display: grid;
    grid-template-areas: ". . ProductNameTitle ProductUnitTitle ProductQuantityTitle"
     "FirstBreakingLine FirstBreakingLine FirstBreakingLine FirstBreakingLine FirstBreakingLine" 
     "RemoveButton ProductPicture ProductTitle ProductPrice QuantityCounter" 
     "SecondBreakingLine SecondBreakingLine SecondBreakingLine SecondBreakingLine SecondBreakingLine" 
     ". . . . UpdateButton";
    padding: 30px;
    margin-right: 20px;
    flex-shrink: 1;
    flex-grow: 1;
    box-shadow: 1px 1px 7px -2px ${({ theme }) => theme.colors.AthensGray};
`;

export const ProductNameTitle = styled.p.attrs({ className: "ProductNameTitle" })`
    grid-area: ProductNameTitle;
    color: ${({ theme }) => theme.colors.AthensGray};
    font-weight: 700;
`;

export const ProductUnitTitle = styled.p.attrs({ className: "ProductUnitTitle" })`
    grid-area: ProductUnitTitle;
    color: ${({ theme }) => theme.colors.AthensGray};
    font-weight: 700;
`;

export const ProductQuantityTitle = styled.p.attrs({ className: "ProductQuantityTitle" })`
    grid-area: ProductQuantityTitle;
    color: ${({ theme }) => theme.colors.AthensGray};
    font-weight: 700;
`;

export const FirstBreakingLine = styled.div.attrs({ className: "FirstBreakingLine" })`
    grid-area: FirstBreakingLine;
    color: ${({ theme }) => theme.colors.AthensGray};
    font-weight: 700;
    margin-bottom: 50px;
    height: 2px;
`;

export const SecondBreakingLine = styled.div.attrs({ className: "SecondBreakingLine" })`
    grid-area: SecondBreakingLine;
    color: ${({ theme }) => theme.colors.AthensGray};
    font-weight: 700;
    margin-top: 50px;
    height: 2px;
`;

export const RemoveButton = styled.button.attrs({ className: "RemoveButton" })`
    grid-area: RemoveButton;
    background: url(${XIcon});
    background-repeat: no-repeat;
    background-position: left center;
    border: none;
    cursor: pointer;
`;

export const ProductPicture = styled.img.attrs({ className: "ProductPicture" })`
    grid-area: ProductPicture;
    align-self: center;
`;

export const ProductTitle = styled.p.attrs({ className: "ProductTitle" })`
    grid-area: ProductTitle;
    align-self: center;
    color: ${({ theme }) => theme.colors.AthensGray};
`;

export const ProductPrice = styled.p.attrs({ className: "ProductPrice" })`
    grid-area: ProductPrice;
    align-self: center;
    color: ${({ theme }) => theme.colors.AthensGray};
`;

export const UpdateButton = styled.button.attrs({ className: "UpdateButton" })`
    grid-area: UpdateButton;
    color: white;
    background-color: black;
    margin: 10px 0 20px;
    border: none;
    cursor: pointer;
    padding: 10px 0;
`;













// .productSection__quantityCounter__editButton {
//     background: url("./images/edit-img.png");
//     background - repeat: no - repeat;
//     background - position: center;
//     width: 30px;
//     height: 30px;
//     border: none;
//     cursor: pointer;
// }

