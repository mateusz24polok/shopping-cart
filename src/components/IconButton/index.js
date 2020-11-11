import React from "react";
import { StyledButton } from "./styled";

//IconButton is a component prepare to get small Icon Image (gridArea attribut if display is grid and it has his own grid-area)

const IconButton = ({ image, xPosition, yPosition, gridArea, width, height, onClick, gridVerticalCenter }) => (
    <StyledButton
        onClick={onClick}
        image={image}
        xPosition={xPosition}
        yPosition={yPosition}
        gridArea={gridArea}
        width={width}
        height={height}
        gridVerticalCenter={gridVerticalCenter}
    />
);

export default IconButton;