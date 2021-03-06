import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About/About';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Details from './Pages/Details/Details/Details';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/Not Found/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
            <Header></Header>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>

                <Route path="/home">
                  <Home></Home>
                </Route>

                <Route path="/login">
                  <Login></Login>
                </Route>

                <PrivateRoute path="/about">
                  <About></About>
                </PrivateRoute>

                <PrivateRoute path="/appointment">
                  <Appointment></Appointment>
                </PrivateRoute>

                <PrivateRoute path="/details/:serviceId">
                  <Details></Details>
                </PrivateRoute>

                <Route path="/*">
                  <NotFound></NotFound>
                </Route>

              </Switch>
          </BrowserRouter>
          <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
