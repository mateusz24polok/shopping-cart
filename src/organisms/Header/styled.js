import styled from "styled-components";

export const StyledWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const Title = styled.h3`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.AthensGray};
    letter-spacing: 1px;
    font-weight: 400;
`;