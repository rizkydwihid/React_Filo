import React, {Component} from 'react';
import MainRoute from './MainRoute';
import {withRouter} from 'react-router-dom';


class AppRoute extends Component {

    postSignout = () => {
        localStorage.removeItem("is_login");
        this.props.history.push("/about");
    };
    render() {
        return (
          <div className="app">
            <MainRoute />
          </div>
        );
    }
}
export default withRouter(AppRoute);