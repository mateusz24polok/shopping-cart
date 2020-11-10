import React from "react";
import { StyledButton } from "./styled";

const IconButton = ({ image, xPosition, gridArea, width, height }) => (
    <StyledButton
        image={image}
        xPosition={xPosition}
        gridArea={gridArea}
        width={width}
        height={height}
    />
);

export default IconButton;