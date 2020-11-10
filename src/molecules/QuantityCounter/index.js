import React from "react";
import CounterButton from "../../components/CounterButton";
import IconButton from "../../components/IconButton/"
import { StyledWrapper, CounterOutput } from "./styled";
import EditIcon from "../../assets/images/edit-img.png";

const QuantityCounter = () => {
    return (
        <StyledWrapper>
            <CounterButton>+</CounterButton>
            <CounterOutput>2</CounterOutput>
            <CounterButton>-</CounterButton>
            <IconButton
                image={EditIcon}
                width="30px"
                height="30px"
            />
        </StyledWrapper>
    );
};

export default QuantityCounter;