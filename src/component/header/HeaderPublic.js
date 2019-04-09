import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class HeaderPublic extends Component {
    render() {
        return (
            <ul className="navbar-nav ml-auto text-center">
                <li className="nav-item mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link className="nav-link" to="/about"><i class="fas fa-info-circle"></i> Tentang Kami </Link>
                </li>                
                <li className="nav-item mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link className="nav-link" to='/login'><i className="fas fa-sign-in-alt"></i> Masuk </Link>
                </li>
                <li className="nav-item mr-3" data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link className="nav-link" to="/regisuser"><i className="fas fa-user-plus"></i> Daftar </Link>
                </li>
            </ul>
        )
    }
}
export default withRouter(HeaderPublic)