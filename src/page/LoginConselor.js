import React, {Component} from 'react';
import '../assets/css/login.css';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
import Header from '../component/header/Header';
import '../assets/js/showpass';


class LoginConselor extends Component {
    doLoginCounselor = () => {
        this.props.postLoginCouns().then(()=> {
          this.props.history.replace("/profilecouns");
        });
    };

    render() {
        return (
            <div>
                <Header/>
                <div className="modal-dialog text-center">
                    <div className="col-sm-9 main-section">
                        <div className="modal-content">
                            <div className="col-12 user-img mb-1">
                                <img src={require('../assets/img/girl.png')}/><br/>
                                {/* <hr style={{width:"100px", border:"1px solid #ffe9af"}}/> */}
                                <span style={{color:"#476678",fontWeight:"900"}}>Counselor</span>
                            </div>
                            <div className="col-12 form-input">
                                <form onSubmit={event => event.preventDefault()}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="username" placeholder="username" onChange={e => this.props.setField(e)} required/>
                                    </div>
                                    <div className="form-group" id="show_hide_password">
                                        <input type="password" className="form-control" name="password" placeholder="password" onChange={e => this.props.setField(e)} aria-describedby="input-group-addo"required/>
                                        {/* <span id="input-group-addon">
                                            <i class="fa fa-eye-slash" aria-hidden="true"></i>
                                        </span> */}
                                    </div>
                                    <button type="submit" className="btn btn-success" onClick={() => this.doLoginCounselor()}>Login</button>
                                </form>
                                
                            </div>
                            <div className="col-12 register">
                            <span style={{color:"#476678"}}>Don't have an account? Register </span> <Link to="/regiscounselor" style={{color:"#476678"}}>Here</Link>
                            </div>
                            <div className="col-12 register">
                            <span style={{color:"#476678"}}><i class="fas fa-question-circle" style={{color:"#476678"}}></i> Login as </span> <Link to="/login" style={{color:"#476678"}}>User</Link>
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
    "is_login, username, password", actions)(withRouter(LoginConselor));