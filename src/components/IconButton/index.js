import React from "react";
import { StyledButton } from "./styled";

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