import React from "react";
import { StyledButton } from "./styled";

//IconButton is a component prepare to get small Icon Image (gridArea attribut if display is grid and it has his own grid-area)

const IconButton = ({ image, xPosition, gridArea, width, height, onClick }) => (
    <StyledButton
        onClick={onClick}
        image={image}
        xPosition={xPosition}
        gridArea={gridArea}
        width={width}
        height={height}
    />
);

export default IconButton;