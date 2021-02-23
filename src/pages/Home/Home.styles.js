import styled from 'styled-components';

export const Container = styled.div`
    border-left: 1px solid ${({ theme }) => theme.colors.borderGray};
    border-right: 1px solid ${({ theme }) => theme.colors.borderGray};
    box-sizing: border-box;
`;
