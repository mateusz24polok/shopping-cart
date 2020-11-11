import styled from "styled-components";

export const Section = styled.section`
    padding: 30px;
    margin-right: 20px;
    flex-shrink: 1;
    flex-grow: 1;
    box-shadow: 1px 1px 7px -2px ${({ theme }) => theme.colors.AthensGray};

    @media(max-width: ${({ theme }) => theme.breakPoints.tabletBreak}){
        margin: 0 auto 30px;
        padding: 0;
    }
`;

export const GridSection = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 40px 180px 150px 150px 200px;
    grid-template-rows: 1fr;
    margin: 0 auto;

    @media(max-width: ${({ theme }) => theme.breakPoints.tabletBreak}){
        grid-template-columns: 50px 200px 150px 150px 250px;
    }

    @media(max-width: ${({ theme }) => theme.breakPoints.firstGridBreak}){
        grid-template-columns: 50px 150px 100px 100px 180px;
    }

    @media(max-width: ${({ theme }) => theme.breakPoints.mobileBreak}){
        grid-template-columns: 40px 80px 80px 60px 100px;
    }
`;

const StyledHeaderText = styled.p`
    color: ${({ theme }) => theme.colors.AthensGray};
    font-weight: 700;

    @media(max-width: ${({ theme }) => theme.breakPoints.mobileBreak}){
        font-size: 10px;
    }
`;

export const ProductNameTitle = styled(StyledHeaderText)`
    grid-column: 3 / 4;
`;

export const ProductUnitTitle = styled(StyledHeaderText)`
    grid-column: 4 / 5;
`;

export const ProductQuantityTitle = styled(StyledHeaderText)`
    grid-column: 5 / 6;
`;

export const FirstBreakingLine = styled.div`
    background-color: ${({ theme }) => theme.colors.AthensGray};
    font-weight: 700;
    margin-bottom: 50px;
    height: 2px;
`;

export const SecondBreakingLine = styled.div`
    background-color: ${({ theme }) => theme.colors.AthensGray};
    font-weight: 700;
    margin-top: 50px;
    height: 2px;
`;

export const ProductPicture = styled.img`
    grid-column: 2 / 3;
    align-self: center;
    width: 150px;

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

export const ProductTitle = styled(StyledContentText)`
    grid-column: 3 / 4;
`;

export const ProductPrice = styled(StyledContentText)`
    grid-column: 4 / 5;
`;

export const UpdateButton = styled.button`
    grid-column: 5 / 6;
    color: ${({ theme }) => theme.colors.PrimaryButtonFont};
    background-color: ${({ theme }) => theme.colors.PrimaryButtonBackground};
    margin: 10px 0 20px;
    border: none;
    cursor: pointer;
    padding: 10px;
    transition: background-color 0.15s linear;

    @media(max-width: ${({ theme }) => theme.breakPoints.mobileBreak}){
        font-size: 10px;
        margin-right: 10px;
    }

    &:hover{
        background-color: ${({ theme }) => theme.colors.PrimaryButtonHover}
    }
`;

export const AddButton = styled(UpdateButton)`
    grid-column: 2 / 3;
`;
