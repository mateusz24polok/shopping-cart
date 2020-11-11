import styled from "styled-components";

export const StyledWrapper = styled.div`
    max-width: 1000px;
    margin: 50px auto 0;
`;

export const Main = styled.main`
    display: flex;

    @media(max-width:660px){
        flex-wrap: wrap;
    }
`;