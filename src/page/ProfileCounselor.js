import React, {Component} from 'react';
import Footer from '../component/Footer';
import '../assets/css/profile.css';
import Header from '../component/header/Header';
// import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
import {Link} from 'react-router-dom';
import axios from 'axios';
import JadwalCounselor from '../component/JadwalCouns';
import { avanull } from '../assets/js/avanull.js'

class ProfileCounselor extends Component {
    constructor (props){
        super(props);
        this.state = {
        token: "",
        username:"",
        fullName:"",
        gender: "",
        email: "",
        address:"",
        religion:"",
        contact: "",
        lisensi: "",
        city: "",
        meet: [],
        avatar:""
        }
    }
    componentDidMount= async () => {
        const url = "https://api.relieve.care/counselor"
        const self = this;
        await axios.get(url, {headers: { Authorization: "Bearer " + this.props.token }})
        .then(function(response) {
                self.setState({...response.data.user}, () => {})
                if (response.data.user.avatar === "") {
                    self.setState({ avatar: avanull })
                }
        })
        .catch(function (error) {
            console.log(error);
        })
    
        await axios
        .get("https://api.relieve.care/appointment/counselor",
            { headers: { Authorization: "Bearer " + this.props.token } }
        )
        .then(function(response){
            self.setState({meet: response.data.appointment})
        })
        .catch(function(error){
            console.log("failed get data counselor", error);
        });
    }

    render () {
        if ((!this.props.is_login) && (this.props.statusUser !== "counselor")) {
            this.props.history.push("/about")
        }
        return (
            <div>
                <Header/>
                <div className="cart-container container mb-5">
                    <div className="row text-left rounded">
                        <div className="col-md-2 info pt-5 img mt-3 mb-2">
                        <center>
                            <img src={this.state.avatar} className="img-responsive imeg box shadow rounded mb-3" style={{width:"90%", objectFit:'cover'}}/><br/>
                            <Link to="/editprofile" className="nav-link button" style={{fontSize:"12px"}}><i class="fas fa-user-edit"></i> Perbarui Profil</Link>
                        </center>
                        </div>
                        <div className="col-md-3 info mt-5">
                            <dl className="dlist-align text-center" style={{ color: "#476678" }}>
                                <dt>Nama Psikolog :</dt>
                                <dd>{this.state.fullName}</dd>
                            </dl>
                            <dl className="dlist-align text-center" style={{ color: "#476678" }}>
                                <dt>Akun :</dt>
                                <dd>@{this.state.username}</dd> 
                            </dl>
                            <dl className="dlist-align text-center" style={{ color: "#476678" }}>
                                <dt>Gender :</dt>
                                <dd>{this.state.gender}</dd> 
                            </dl>
                            <dl className="dlist-align text-center" style={{ color: "#476678" }}>
                                <dt>Kontak :</dt>
                                <dd> {this.state.contact} | {this.state.email} </dd>
                            </dl>
                            <dl className="dlist-align text-center" style={{ color: "#476678" }}>
                                <dt>Alamat :</dt>
                                <dd>{this.state.address}, {this.state.city}</dd>
                            </dl>
                            <dl className="dlist-align text-center" style={{ color: "#476678" }}>
                                <dt>Lisensi :</dt>
                                <dd>{this.state.lisensi}</dd>
                            </dl> 
                            <br/>
                            <br/>
                        </div>
                        <div className="col-md-7 info mt-5">
                            <center className="border-bottom">
                            <span style={{ color: "#476678", fontSize:"16px"}}> <b> Jadwal Konseling </b></span>
                            </center>
                            <br/>
                            <div className=" text-left pl-2">
                            <center>
                            {this.state.meet.map((item, key) => {
                                const fullname = item.namaPasien !== null ? item.namaPasien:"";
                                const contact = item.contact !== null ? item.contact:"";
                                const email = item.email !== null ? item.email:"";
                                const waktu = item.sessionDate !== null ? item.sessionDate:"";
                                const idAppointment = item.idAppointment !== null ? item.idAppointment:"";
                                const status = item.counselorStatus !== null ? item.counselorStatus:"";
                                return <JadwalCounselor key={key} fullname={fullname} contact={contact} email={email} status={status} waktu={waktu} idAppointment={idAppointment} />;
                            })}
                            </center>
                        </div>
                        </div>
                    </div>
                </div><br/>
            <Footer/>
            </div>
        )
    }
}
export default connect(
    "is_login, username, password, email, phone, city, address, lisensi, token", actions)(withRouter(ProfileCounselor));