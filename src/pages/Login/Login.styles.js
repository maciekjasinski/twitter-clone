import styled from 'styled-components';
import background from '../../assets/background.png';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
`;

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    height: 95%;
    @media screen and (max-width: 1410px) {
        grid-template-columns: 50% 50%;
    }
    @media screen and (max-width: 1360px) {
        grid-template-columns: 40% 60%;
    }
    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    > div {
        width: 100%;
        height: 100%;
        background-image: url(${background});
        background-size: cover;
        background-position: center center;
    }
    > svg {
        width: 400px;
        height: 400px;
        fill: ${({ theme }) => theme.colors.white};
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    @media screen and (max-width: 1470px) {
        > svg {
            width: 300px;
            height: 300px;
        }
    }
    @media screen and (max-width: 960px) {
        > div {
            height: 300px;
            width: 100%;
        }
        > svg {
            width: 200px;
            height: 200px;
        }
    }
`;

export const FormWrapper = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 100px;
    grid-column-gap: 14px;
    > input {
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        border: 1px solid ${({ theme }) => theme.colors.borderGray};
        border-radius: 4px;
        font-size: 16px;
    }
    > button {
        width: 100%;
        height: 50px;
        border-radius: 9999px;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primary};
        font-weight: bold;
        font-size: 14px;
        outline: none;
        background-color: ${({ theme }) => theme.colors.white};
    }
    @media screen and (max-width: 960px) {
        display: none;
    }
`;

export const SignUpButton = styled.button`
    max-width: 380px;
    width: -webkit-fill-available;
    margin-bottom: 18px;
    display: block;
    height: 48px;
    cursor: pointer;
    outline: none;
    user-select: none;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    box-sizing: border-box;
    border: none;
    font-size: 14px;
    font-weight: bold;
    @media screen and (max-width: 960px) {
        margin: 0 auto 18px;
    }
`;

export const LogInButton = styled(SignUpButton)`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const Wrapper = styled.div`
    padding: 14px 28px;
    .content {
        margin-top: 250px;
        > svg {
            width: 42px;
            height: 42px;
            fill: ${({ theme }) => theme.colors.primary};
        }
        > h1, h2 {
            color: ${({ theme }) => theme.colors.black};
        }
        > h1 {
            font-size: 61px;
        }
        > h2 {
            font-size: 28px;
        }
        @media screen and (max-width: 1410px) {
            margin: 100px 0;
        }
        @media screen and (max-width: 960px) {
            margin: 0;
        }
    }
`;

export const Footer = styled.div`
    padding: 9px 14px;
    display: flex;
    justify-content: center;
    > a {
        font-size: 12px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.gray};
        margin: 5px 0;
        padding-right: 14px;
    }
`;