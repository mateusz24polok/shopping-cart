import React from "react";
import { StyledButton } from "./styled";

const PrimaryButton = ({ children, onClick }) => (
    <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default PrimaryButton;