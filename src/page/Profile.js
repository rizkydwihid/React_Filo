import React, {Component} from 'react';
import Footer from '../component/Footer';
import '../assets/css/profile.css';
import "../../node_modules/react-vis/dist/style.css"
import Header from '../component/header/Header';
// import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
import { XYPlot, LineSeries, DiscreteColorLegend } from 'react-vis';
// import {Link} from 'react-router-dom';
import axios from 'axios';
// import { ProgressBar } from 'react-bootstrap';

class ProfileUser extends Component {
    constructor (props){
        super(props);
        this.state = {
        token: "",
        username:"",
        fullName:"",
        gender: "",
        email: "",
        address:"",
        sad: "70"
        }
    }
    componentDidMount= () => {
        const url = "http://localhost:8010/proxy/user"
        const self = this;
        axios.get(url, {headers: { Authorization: "Bearer " + this.props.token }})
        .then(function(response) {
            // console.log("test url 2", response.data)
                self.setState({...response.data.user}, () => {
                console.log('test', self.state)
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render () {
        const data = [
            { x: 0, y: 8 },
            { x: 1, y: 5 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 1 },
            { x: 5, y: 7 },
            { x: 6, y: 6 },
        ];
        const data2 = [
            { x: 0, y: 4 },
            { x: 1, y: 2 },
            { x: 2, y: 7 },
            { x: 3, y: 9 },
            { x: 4, y: 0 },
            { x: 5, y: 2 },
            { x: 6, y: 3 },
        ];
        return (
            <div>
                <Header/>
                <div className="container mt-5">
                    <div className="row box shadow pt-3 mb-3 mt-3 text-left rounded">
                        <div className="col-md-2 info pt-5 img mt-4 mb-2">
                            <center>
                            <img src={require('../assets/img/avatar.png')} className="img-responsive" height="100" />  
                            </center>
                            {/* <div className="profile-picture">
                                <div className="profile-picture-outer-radius"></div>
                            </div><br/> */}
                        </div>
                        <div className="col-md-4 info mt-5">
                            <p style={{color:"#476678"}}> - {this.state.username} - <br/>
                            <br/> {this.state.fullName} 
                            <br/> {this.state.gender}
                            <br/> {this.state.contact}
                            <br/> {this.state.email}
                            <br/> {this.state.address}
                            </p>
                        </div>
                        <div className="col-md-6 info mt-5">
                            <small style={{color:"#476678"}}>Your Emotion Meter</small><hr style={{width:"100px", border:"0.6px solid #ffe9af", marginTop:"5px", align:"left"}}/>
                            {/* <p className="styled"> <progress value={this.state.sad} max="100"/> </p> */}
                            <center>
                            <XYPlot height={100} width={400}>
                                <LineSeries color='red' data={data} curve={'curveMonotoneX'} />
                                <LineSeries color='blue' data={data2} curve={'curveMonotoneX'} />
                            </XYPlot>
                            </center>
                            <small style={{color: '#476678'}}>Gloomy Meter</small><hr style={{width: '50px', border: 'solid red 1px'}}/>
                            <small style={{color: '#476678'}}>Happy Meter</small><hr style={{width: '50px', border: 'solid blue 1px'}}/>
                        </div>
                    </div>
                    {/* <div className="row box shadow p-3 mb-3 bg-transparent mt-3 ">
                        <div className="col-md-12 info">
                            <p style={{color:"#a7b6b5"}}>Perkenalkan, dia <span style={{fontWeight:"bold",color:"#ffe9af"}}>Filo</span> .. <br/>Partner konseling kami yang baik, dan anda dapat berinteraksi dengannya layaknya bercerita dengan orang terdekat anda.
                                <br/>Selain itu, <span style={{fontWeight:"bold"}}>Filo</span> juga akan memberikan bantuan kepada anda yaitu berupa saran conselor-conselor terbaik ketika anda memiliki keluhan yang ingin anda selesaikan.
                            </p>
                        </div>
                    </div> */}
                    <hr/><br/><br/>
                </div><br/>
            <Footer/>
            </div>
        )
    }
}
export default connect(
    "is_login, username, password, email, phone, token", actions)(withRouter(ProfileUser));