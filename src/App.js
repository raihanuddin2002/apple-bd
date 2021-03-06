import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import OrderPlace from './components/OrderPlace/OrderPlace';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';
import AllProducts from './components/AllProducts/AllProducts';
import Dashboard from './components/dashboard/DashBoard/Dashboard';

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
            

          <Switch>

              <Route path="/home">
                <Header></Header>
                  <Home></Home>
              </Route>

              <Route path="/about">
                    <Header></Header>
                  <About></About>
              </Route>

              <Route path="/products">
                    <Header></Header>
                  <AllProducts></AllProducts>
              </Route>

              <PrivateRoute path="/dashboard">
                  <Dashboard></Dashboard>
              </PrivateRoute>

              <PrivateRoute  path="/orderPlace/:id">
                <Header></Header>
                  <OrderPlace></OrderPlace>
              </PrivateRoute>

              <Route path="/login">
                <Header></Header>
                  <Login></Login>
              </Route>

              <Route path="/signup">
                <Header></Header>
                  <SignUp></SignUp>
              </Route>

              <Route exact path="/">
                <Header></Header>
                  <Home></Home>
              </Route>

              <Route path="*">
                <Header></Header>
                  <NotFound></NotFound>
              </Route>

          </Switch>

          <Footer></Footer>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
