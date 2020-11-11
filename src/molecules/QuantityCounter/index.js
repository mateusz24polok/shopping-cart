import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CounterButton from "../../components/CounterButton";
import IconButton from "../../components/IconButton/"
import { StyledWrapper, CounterOutput } from "./styled";
import { selectShoppingCartItemById, increaseItemQuantity, decreaseItemQuantity, shoppingCartSummarize } from "../../slices/ShoppingCartSlice";
import EditIcon from "../../assets/images/edit-img.png";

const QuantityCounter = ({ id }) => {

    //Take dispatch from React-Redux

    const dispatch = useDispatch();

    //Take item from the redux state with id that we want ([0] in the end, because action in reducer filter array with one suitable element)

    const itemById = useSelector(state => selectShoppingCartItemById(state, id))[0];

    //Declaration of Counter functions

    const increaseCounter = (id) => {
        dispatch(increaseItemQuantity(id));
    }

    const decreaseCounter = (id) => {
        dispatch(decreaseItemQuantity(id));
    }

    const summarizeShopping = () => {
        dispatch(shoppingCartSummarize());
    }

    return (
        <StyledWrapper>
            <CounterButton onClick={() => increaseCounter(id)}>+</CounterButton>
            <CounterOutput>{itemById.quantity}</CounterOutput>
            <CounterButton onClick={() => decreaseCounter(id)}>-</CounterButton>
            <IconButton
                onClick={summarizeShopping}
                image={EditIcon}
                width="30px"
                height="30px"
            />
        </StyledWrapper>
    );
};

export default QuantityCounter;