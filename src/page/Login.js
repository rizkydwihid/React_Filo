import React, {Component} from 'react';
import '../assets/css/login.css';
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Link } from 'react-router-dom';
import Header from '../component/header/Header'

class Login extends Component {
    doLoginUser = () => {
        this.props.postLoginUser()
        .then(() => {
            this.props.history.push("/about");
            }
        )
    };

    render() {
        return (
            <div>
                <Header/>
                <div className="modal-dialog text-center">
                    <div className="col-sm-9 main-section">
                        <div className="modal-content">
                            <div className="col-12 user-img mb-1">
                                <img src={require('../assets/img/boy.png')}/><br/>
                                {/* <hr style={{width:"100px", border:"1px solid #ffe9af"}}/> */}
                                <span style={{color:"#476678",fontWeight:"bold"}}>User</span>
                            </div>
                            <div className="col-12 form-input">
                                <form onSubmit={event => event.preventDefault()}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="username" placeholder="username" onChange={e => this.props.setField(e)} required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" name="password" placeholder="password" onChange={e => this.props.setField(e)} required/>
                                    </div>
                                    <button type="submit" className="btn btn-success" onClick={() => this.doLoginUser()}>Login</button>
                                </form>
                                
                            </div>
                            <div className="col-12 register">
                            <span style={{color:"#476678"}}>Don't have an account? Register </span> <Link to="/regisuser" style={{color:"#476678"}}>Here</Link>
                            </div>
                            <div className="col-12 register">
                            <span style={{color:"#476678"}}><i class="fas fa-question-circle" style={{color:"#476678"}}></i> Login as </span> <Link to="/logcounselor" style={{color:"#476678"}}>Conselor</Link>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    "is_login, username, password", actions)(withRouter(Login));