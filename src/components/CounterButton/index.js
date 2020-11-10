import React from "react";
import { StyledButton } from "./styled";

const CounterButton = ({ onClick, children }) => {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    );
};

export default CounterButton;