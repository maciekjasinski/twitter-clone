import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Login } from './pages/Login/Login';
import { SideMenu } from './components/SideMenu/SideMenu';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 600px 350px;
  margin: auto;
  width: 1250px;
  /* add responsive */
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
              Home
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
