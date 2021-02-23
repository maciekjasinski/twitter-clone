import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home/Home';
import { SideMenu } from './components/SideMenu/SideMenu';

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 600px 350px;
  margin: auto;
  width: 1250px;
  @media screen and (max-width: 1280px) {
    grid-template-columns: 70px 600px 350px;
    width: 1020px;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
    grid-template-columns: 70px auto;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Container>
            <SideMenu />
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              Explore
            </Route>
            <Route path="/notifications">
              Notifications
            </Route>
            <Route path="/messages">
              Messages
            </Route>
            <Route path="/bookmarks">
              Bookmarks
            </Route>
            <Route path="/lists">
              Lists
            </Route>
            <Route path="/profile">
              Profile
            </Route>
          </Container>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
