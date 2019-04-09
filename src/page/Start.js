import React, {Component} from 'react';
import '../assets/css/loading.css';
// import Footer from '../component/Footer';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';

class Start extends Component{
    
    render() {
        return(
            <div>
                <div id="loader">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div style={{display:"none"}} id="myDiv" className="animate-bottom mt-5 pt-5">
                    <div className="container">
                        <div className="row mx-0">
                            <div className="col-md-4 mt-3 pt-2 text-center">
                                <img src={require('../assets/img/untitled.png')} style={{alignContent:"middle"}} style={{width:"90%"}} alt=""/><br/>
                                <hr style={{width:"30%", border:"1px solid #415e61"}}/>
                                <p style={{fontSize:"14px", color:"#415e61"}}>Counseling and Mental Health Therapy. 
                                <br/> With <span style={{fontWeight:"bold"}} >AI Chat</span> for mental health, stress check and anxiety relief.
                                </p><br/>
                                <Link to="/about" className="nav-link button">Try it</Link>
                            </div>
                            <div className="col-md-2">
                            </div>
                            <div className="col-md-6 mt-3 mb-5 pt-2 text-center">
                                <img src={require('../assets/img/psychologist-vector.jpg')} style={{width:"100%", borderRadius:"15px 70px"}} className="counseling" alt=""/>
                            </div>
                        </div>
                    </div><br/><br/><br/>
                    {/* <div className="container-fluid"> */}
                        <div className="row mx-0">
                            <div className="col-md-12 bg">
                            </div>
                        </div>
                    {/* </div> */}
                </div>
                
            </div>
        )
    }
}
export default connect('', actions)(withRouter(Start));