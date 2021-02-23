import styled from 'styled-components';

export const SectionTitle = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    font-size: 18px;
    margin: 0;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 14px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
    > svg {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 46px auto;
    grid-column-gap: 14px;
    box-sizing: border-box;
    padding: 14px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
`;

export const InputWrapper = styled.div`
    > textarea {
        padding-top: 14px;
        width: 100%;
        min-height: 50px;
        border: none;
        font-size: 16px;
        resize: none;
        outline: none;
    }
    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;
    }
`;

export const Button = styled.button`
    border: none;
    outline: none;
    padding: 0 18px;
    height: 37px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
`;

export const IconsWrapper = styled.div`
    > svg {
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
        margin-right: 8px;
    }
    @media screen and (max-width: 690px) {
        > svg {
            width: 16px;
            height: 16px;
        }
    }
`;

export const UserIconWrapper = styled.div`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.borderGray};
    display: flex;
    align-items: center;
    justify-content: center;
    > svg {
        color: ${({ theme }) => theme.colors.gray};
        width: 40px;
        height: 40px;
    }
`;