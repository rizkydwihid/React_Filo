import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AppStart from './AppStart';
// import Start from './page/Start';
import Login from './page/Login';
import Register from './page/Register';
import LoginConselor from './page/LoginConselor';
import About from './page/About';
import Profile2 from './page/Profile2';
import RegisterUser from './page/RegisterUser';
import FindCounselor from './page/FindCounselor';
import ProfileCounselor from './page/ProfileCounselor';
import DetailCouns from './page/DetailCouns';
import Appointment from './page/Appointment';
import EditProfile from './page/EditProfile';
import EditProfileUser from './page/EditProfileUser';


const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={AppStart}/>
            <Route path="/login" component={Login}/>
            <Route path="/regiscounselor" component={Register}/>
            <Route path="/regisuser" component={RegisterUser}/>
            <Route path="/logcounselor" component={LoginConselor}/>
            <Route path="/about" component={About}/>
            <Route path="/profile" component={Profile2}/>
            <Route path="/profilecouns" component={ProfileCounselor}/>
            <Route path="/findcouns" component={FindCounselor}/>
            <Route path="/public/counselor/:int" component={DetailCouns}/>
            <Route path="/myappointment" component={Appointment}/>
            <Route path="/editprofile" component={EditProfile}/>
            <Route path="/editprofileuser" component={EditProfileUser}/>
        </Switch>
    )
}
export default MainRoute;