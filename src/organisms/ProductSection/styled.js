import styled from "styled-components";

export const Section = styled.section`
    display: grid;
    grid-template-areas: ". . ProductNameTitle ProductUnitTitle ProductQuantityTitle"
     "FirstBreakingLine FirstBreakingLine FirstBreakingLine FirstBreakingLine FirstBreakingLine" 
     "RemoveButton ProductPicture ProductTitle ProductPrice QuantityCounter" 
     "SecondBreakingLine SecondBreakingLine SecondBreakingLine SecondBreakingLine SecondBreakingLine" 
     ". . . . UpdateButton";
    padding: 30px;
    grid-template-columns: repeat(autofit, minmax(50px, 1fr));
    /* grid-template-columns: minmax(50px,1fr) minmax(200px,1fr) minmax(120px,1fr) minmax(120px,1fr) minmax(200px,1fr); */
    margin-right: 20px;
    flex-shrink: 1;
    flex-grow: 1;
    box-shadow: 1px 1px 7px -2px ${({ theme }) => theme.colors.AthensGray};

    @media(max-width: ${({ theme }) => theme.breakPoints.tabletBreak}){
        margin: 0 auto 30px;
    }
`;

const StyledHeaderText = styled.p`
    color: ${({ theme }) => theme.colors.AthensGray};
    font-weight: 700;

    @media(max-width: ${({ theme }) => theme.breakPoints.mobileBreak}){
        font-size: 10px;
    }
`;

export const ProductNameTitle = styled(StyledHeaderText).attrs({ className: "ProductNameTitle" })`
    grid-area: ProductNameTitle;
`;

export const ProductUnitTitle = styled(StyledHeaderText).attrs({ className: "ProductUnitTitle" })`
    grid-area: ProductUnitTitle;
`;

export const ProductQuantityTitle = styled(StyledHeaderText).attrs({ className: "ProductQuantityTitle" })`
    grid-area: ProductQuantityTitle;
`;

export const FirstBreakingLine = styled.div.attrs({ className: "FirstBreakingLine" })`
    grid-area: FirstBreakingLine;
    background-color: ${({ theme }) => theme.colors.AthensGray};
    font-weight: 700;
    margin-bottom: 50px;
    height: 2px;
`;

export const SecondBreakingLine = styled.div.attrs({ className: "SecondBreakingLine" })`
    grid-area: SecondBreakingLine;
    background-color: ${({ theme }) => theme.colors.AthensGray};
    font-weight: 700;
    margin-top: 50px;
    height: 2px;
`;

export const ProductPicture = styled.img.attrs({ className: "ProductPicture" })`
    grid-area: ProductPicture;
    align-self: center;

    @media(max-width: ${({ theme }) => theme.breakPoints.mobileBreak}){
        width: 50px;
    }
`;

const StyledContentText = styled.p`
    align-self: center;
    color: ${({ theme }) => theme.colors.AthensGray};

    @media(max-width: ${({ theme }) => theme.breakPoints.mobileBreak}){
        font-size: 10px;
    }
`;

export const ProductTitle = styled(StyledContentText).attrs({ className: "ProductTitle" })`
    grid-area: ProductTitle;
`;

export const ProductPrice = styled(StyledContentText).attrs({ className: "ProductPrice" })`
    grid-area: ProductPrice;
`;

export const UpdateButton = styled.button.attrs({ className: "UpdateButton" })`
    grid-area: UpdateButton;
    color: ${({ theme }) => theme.colors.PrimaryButtonFont};
    background-color: ${({ theme }) => theme.colors.PrimaryButtonBackground};
    margin: 10px 0 20px;
    border: none;
    cursor: pointer;
    padding: 10px 0;
    transition: background-color 0.15s linear;

    @media(max-width: ${({ theme }) => theme.breakPoints.mobileBreak}){
        font-size: 10px;
    }

    &:hover{
        background-color: ${({ theme }) => theme.colors.PrimaryButtonHover}
    }
`;
