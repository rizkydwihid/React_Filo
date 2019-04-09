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
        const url = "http://localhost:8010/proxy/counselor"
        const self = this;
        // console.log("test url 2", this.props.token)        
        await axios.get(url, {headers: { Authorization: "Bearer " + this.props.token }})
        .then(function(response) {
            // console.log("test url 2", response.data)
                self.setState({...response.data.user}, () => {})
                if (response.data.user.avatar === "") {
                    self.setState({ avatar: avanull })
                }
        })
        .catch(function (error) {
            console.log(error);
        })
    
        await axios.get("http://localhost:8010/proxy/appointment",
            { headers: { Authorization: "Bearer " + this.props.token } }
        )
        .then(function(response){
            // console.log("rensponse data", response.data.produk)
            self.setState({meet: response.data.appointment})
            // console.log("meet up", response.data.appointment)
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
                            <img src={this.state.avatar} className="img-responsive box shadow rounded" style={{ width:"100%", height:'15vw', objectFit:'cover'}}/>
                        </center>
                        </div>
                        <div className="col-md-4 info mt-5">
                            <dl className="dlist-align" style={{ color: "#476678" }}>
                                <dt> <small> Nama Lengkap : </small> {this.state.fullName} </dt>
                            </dl>
                            <dl className="dlist-align" style={{ color: "#476678" }}>
                                <dt> <small> Akun : </small> {this.state.username} </dt>
                            </dl>
                            <dl className="dlist-align" style={{ color: "#476678" }}>
                                <dt> <small> Gender : </small> {this.state.gender} </dt>
                            </dl>
                            <dl className="dlist-align" style={{ color: "#476678" }}>
                                <dt> <small> Kontak : </small> {this.state.contact} | {this.state.email} </dt>
                            </dl>
                            <dl className="dlist-align" style={{ color: "#476678" }}>
                                <dt> <small> Alamat : </small> {this.state.address}, {this.state.city}</dt>
                            </dl>
                            <dl className="dlist-align" style={{ color: "#476678" }}>
                                <dt> <small> Lisensi : </small> {this.state.lisensi} </dt>
                            </dl> 
                            <br/>
                            <br/>
                            <Link to="/editprofile" className="nav-link button" style={{fontSize:"14px"}}><i class="fas fa-user-edit"></i> Perbarui Profil</Link>
                        </div>
                        <div className="col-md-6 info mt-5">
                            <center>
                            <span style={{ color: "#476678", fontSize:"14px"}}> <b> Jadwal Konseling </b></span>
                            </center>
                            <br/>
                            <div className="row text-left pl-2 rounded">
                            <center>
                            {this.state.meet.map((item, key) => {
                                const fullname = item.namaPasien !== null ? item.namaPasien:"";
                                const contact = item.kontakPasien !== null ? item.kontakPasien:"";
                                const email = item.emailPasien !== null ? item.emailPasien:"";
                                const waktu = item.sessionDate !== null ? item.sessionDate:"";
                                const id = item.idCounselor !== null ? item.idCounselor:"";
                                const status = item.counselorStatus !== null ? item.counselorStatus:"";
                                return <JadwalCounselor key={key} fullname={fullname} contact={contact} email={email} status={status} waktu={waktu} id={id} />;
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