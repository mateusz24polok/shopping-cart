import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CounterButton from "../../components/CounterButton";
import IconButton from "../../components/IconButton/"
import { StyledWrapper, CounterOutput } from "./styled";
import { selectShoppingCartItemById, increaseItemQuantity, decreaseItemQuantity } from "../../slices/ShoppingCartSlice";
import EditIcon from "../../assets/images/edit-img.png";

const QuantityCounter = ({ id }) => {
    const dispatch = useDispatch();
    const itemById = useSelector(state => selectShoppingCartItemById(state, id))[0];

    const increaseCounter = (id) => {
        dispatch(increaseItemQuantity(id));
    }

    const decreaseCounter = (id) => {
        dispatch(decreaseItemQuantity(id));
    }

    return (
        <StyledWrapper>
            <CounterButton onClick={() => increaseCounter(id)}>+</CounterButton>
            <CounterOutput>{itemById.quantity}</CounterOutput>
            <CounterButton onClick={() => decreaseCounter(id)}>-</CounterButton>
            <IconButton
                image={EditIcon}
                width="30px"
                height="30px"
            />
        </StyledWrapper>
    );
};

export default QuantityCounter;