import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import App from './App';
import Page404 from './layouts/404/404';
import AuthPage from './layouts/login&regPage/AuthPage';
import Main from './layouts/main/Main';
import MainByHashtags from './layouts/main/mainByHashtags/MainByHashtags';
import MainByUsers from './layouts/main/MainByUser/MainByUsers';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TwittProvider } from '../Context/Context';

const islogin = () => !! localStorage.getItem("token")  && localStorage.getItem("token") !== "undefined"

const Publicroute = ({component , ...props}) => {
return <Route {...props} render ={(props) =>{
    if(islogin()){
      return  <Redirect to = {"/"} />
    }
    return React.createElement(component , props)
} }  />
}

const Privateroute = ({render , ...props} ) => {
    return <Route {...props} render = {(props) => {
        if(islogin()){
            return render(props)
        }
       else return <Redirect to = {"/login"} />
    }
  }/>
}

const Appp = () => {
    return (
        <>
        <BrowserRouter>
        <Switch>
            <Publicroute path = {"/login"} component = {AuthPage} />
            <Privateroute path = {"/"} render={() => {
                return  (
                <TwittProvider>
                    <App>
                        <Switch>
                            <Route path={"/Hashtags/:hashtag"} component={MainByHashtags}/>
                            <Route path={"/User/:name"} component={MainByUsers} />
                            <Route path={"/"} component={Main} />
                            <Route component = {Page404} />
                        </Switch>
                    </App>
                </TwittProvider>
                 ) }} />

        </Switch>
         </BrowserRouter>
         <ToastContainer/>
         </>
      );
}
 
export default Appp;