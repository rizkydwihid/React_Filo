import React, { Component } from 'react';
// import '../assets/css/detailcouns.css';
import Header from '../component/header/Header';
import Footer from '../component/Footer';
import {connect} from 'unistore/react';
import {withRouter} from 'react-router-dom';
import {actions} from '../store';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { avanull } from '../assets/js/avanull.js'


class DetailCouns extends Component {
    constructor (props) {
        super(props);
        this.state = {
            idCounselor:"",
            username: "",
            fullName:"",
            gender:"",
            contact:"",
            lisensi:"",
            email:"",
            address:"",
            district:"",
            city:"",
            idcouns:"",
            token:"",
            calendar: "",
            time:"",
            avatar: "",
        };
    }
    changeTime = date => {
        var string = JSON.stringify(date);
        var realdate = string.split(" ")
        var Tanggal = realdate[0].split("T")
        var Jam = Tanggal[1].split(".")
        var TanggalFix = Tanggal[0].replace('"2','2');
        var JamGMT = Jam[0].split(":")
        var JamFix = Number(JamGMT[0]) + 7
        if (JamFix > 24) {
          JamFix = JamFix -24;
    } else {
          JamFix  = JamFix;
    }
        var JamSTR = JamFix.toString()
        var JamWIB = JamSTR + ":00:00"
        var DateFix = TanggalFix + ' ' + JamWIB
    
        this.setState({ time: DateFix, calendar: date });
    };
    addAppointment = () => {
        this.state.postAppointment().then(()=> {
          this.props.history.replace("/about");
        });
    };
    // appointment
    postAppointment = (state, idcouns, calendar) => {
          const data = { idCounselor : this.state.idCounselor, sessionDate : this.state.calendar };
          const postApp = {
            method: 'post',
            url: "http://localhost:8010/proxy/appointment",
            data: data,
            headers: { Authorization: "Bearer " + this.props.token }
        };
          axios(postApp)
          .then((response) => {
            if (response.status === 200) {
                alert("response.data.message")
                this.state.history.replace("/about")
            }
            else if (response.status === 401) {
              alert("response.data.message")
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
        
    componentDidMount= async () => {
        // this.componentDidCatch.params.index
        const idcouns = this.props.location.pathname.slice(18)
        const url = "http://localhost:8010/proxy/public/counselor/" + idcouns
        const self = this;
        await axios.get(url)
        .then(function(response) {
            // console.log("test url 2", response.data)
                self.setState({...response.data.counselor}, () => {
                // console.log("test response", response)
                // console.log('test', self.state)
            })
                self.setState({ id: response.data.idCounselor })
                if (response.data.user.avatar === "") {
                    self.setState({ avatar: avanull })
                }
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="cart-container">
                    <div className="row more-info-cart cart mb-2">
                    <div className="col-md-1 text-center mt-2">
                        <img src={this.state.avatar} className="img-responsive imeg pb-2" width="70" height="75" /><br/>
                        <h5 className="user-name"> {this.state.username}</h5>
                        {/* ID : <b>{this.state.idCounselor}</b>  */}
                        {/* <img src={require('../assets/img/girl(1).png')} className="img-responsive imeg pb-2" width="75" height="75" /> */}
                    </div>
                    <div className="col-md-3 mt-2">
                        <h5 className="user-name "><b>Nama &nbsp; : &nbsp; &nbsp; {this.state.fullName} </b></h5>
                        <hr/>
                        <h5 className="user-name "><b>Gender : &nbsp; &nbsp; {this.state.gender} </b></h5>
                        <hr/>
                        <h5 className="user-name "><b>Lisensi &nbsp; : &nbsp; &nbsp; {this.state.lisensi} </b></h5>
                    </div>
                    <div className="col-md-3 mt-2">
                        <h5 className="user-name "><b>Kontak : &nbsp; &nbsp; {this.state.contact} </b></h5>
                        <hr/>
                        <h5 className="user-name "><b>Email &nbsp; : &nbsp; &nbsp; {this.state.email} </b></h5>
                        <hr/>
                        <h5 className="user-name "><b>Alamat : &nbsp; &nbsp; {this.state.address} </b></h5>
                    </div>
                    <div className="col-md-5 text-center">
                    <h5 className="user-name text-center">Anda ingin berkonsultasi dengan beliau? <br/>
                    Silahkan tentukan terlebih dahulu untuk tanggal dan waktunya. </h5><br/>
                    <div>
                        <DatePicker 
                            selected={this.state.calendar}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={60}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            timeCaption="time"
                            onChange={e => {this.changeTime(e)}}                  
                            minDate={Date.now()}
                            placeholderText="Tanggal dan waktu "
                        />
                    </div>
                    <br/>
                        <button className="nav-link button" onClick={() => this.postAppointment(this.state.idCounselor)}>Atur Janji</button>
                        {/* <Link to="/edit" style={{color:"red",textDecoration:"none", fontWeight:"600"}}><i class="fas fa-times-circle"></i> Batalkan</Link><br/><br/>
                        <Link to="/login" style={{color:"#287a6a",textDecoration:"none", fontWeight:"600"}}><i class="fas fa-money-bill-wave" style={{color:"#e1a70a"}}></i> Bayar</Link> */}
                    </div>
                </div>
                </div>
                <br/><br/><br/>
                <Footer/>
            </div>
        )
    }
}
export default connect (
    "id, token", actions)(withRouter(DetailCouns));
