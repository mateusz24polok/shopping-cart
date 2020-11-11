import styled from "styled-components";

export const StyledButton = styled.button`
    grid-area: ${({ gridArea }) => gridArea ? gridArea : ""};
    background: url(${({ image }) => image ? image : ""});
    background-repeat: no-repeat;
    background-position: ${({ xPosition }) => xPosition ? xPosition : "center"} ${({ yPosition }) => yPosition ? yPosition : "center"};
    height: ${({ height }) => height ? height : "auto"};
    width: ${({ width }) => width ? width : "auto"};
    border: none;
    cursor: pointer;
    align-self: ${({ gridVerticalCenter }) => gridVerticalCenter && "center"};

    @media(max-width: ${({ theme }) => theme.breakPoints.mobileBreak}){
        height: 20px;
        width: 20px;
    }
`;

