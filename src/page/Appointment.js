import React, {Component} from 'react';
import Header from '../component/header/Header';
import Footer from '../component/Footer';
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
import swal from 'sweetalert';
// import { Link } from 'react-router-dom';
import '../assets/css/find.css';
import axios from 'axios';
import IsiAppoint from '../component/IsiAppoint';

class Appointment extends Component {
    constructor (props){
        super(props);
        this.state = {
            listAppt: []
        };
    };
    componentDidMount = async () => {
        // this.props.getURLProduk()
        const self = this;
        // console.log("TAEEEK", this.props.token )
        await axios
        .get("https://api.relieve.care/appointment", {
            headers: { 
                Authorization: "Bearer " + this.props.token ,
                'Content-Type':'application/json',
            }
        })
        .then(function(response){
            // console.log("data appoi", this.props.token)
            self.setState({listAppt: response.data.appointment})
        })
        swal( "Jadwal konseling berhasil dibuat..","","success")
        .catch(function(error){
            console.log("failed get data counselor", error);
        });
        // console.log("local state product", this.state.listProduk)
    }

    render() {
        return (
            <div>
                <Header/>
                <div class="cart-container">
                {this.state.listAppt.map((item, key) => {
                    const namepass = item.namaPasien !== null ? item.namaPasien:"";
                    const counsstatus = item.counselorStatus !== null ? item.counselorStatus:"";
                    const jadwal = item.sessionDate !== null ? item.sessionDate:"";
                    const kontak = item.kontakPasien !== null ? item.kontakPasien:"";
                    const imel = item.email !== null ? item.email:"";
                    return <IsiAppoint key={key} namepass={namepass} counsstatus={counsstatus} jadwal={jadwal} kontak={kontak} imel={imel} />;
                })}
                <br/>
                </div><br/>
                <Footer/>
            </div>
        )
    }
}
export default  connect(
    "token", actions)(withRouter(Appointment));