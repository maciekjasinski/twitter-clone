import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {
    Container,
    GridWrapper,
    ImageWrapper,
    FormWrapper,
    SignUpButton,
    LogInButton,
    Wrapper,
    Footer
} from './Login.styles';

export function Login() {
    return (
        <Container>
            <GridWrapper>
                <ImageWrapper>
                    <div></div>
                    <Logo />
                </ImageWrapper>
                <Wrapper>
                    <FormWrapper>
                        <input placeholder="Phone, email, or username" />
                        <input type="password" placeholder="Password"/>
                        <button>Log in</button>
                    </FormWrapper>
                    <div className="content">
                        <Logo />
                        <h1>Happening now</h1>
                        <h2>Join Twitter today</h2>
                        <SignUpButton>Sign up</SignUpButton>
                        <LogInButton>Log in</LogInButton>
                    </div>
                </Wrapper>
            </GridWrapper>
            <Footer>
                <Link to='/'>About</Link>
                <Link to='/'>Help Center</Link>
                <Link to='/'>Terms of Service</Link>
                <Link to='/'>Privacy Policy</Link>
                <Link to='/'>Cookie Policy</Link>
                <Link to='/'>Ads info</Link>
                <Link to='/'>Blog</Link>
                <Link to='/'>Status</Link>
            </Footer>
        </Container>
    )
}
