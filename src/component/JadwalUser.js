import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';

class JadwalUser extends Component {
    doCancel = async (id) => {
        console.log("EROR", this.props.jadwal.id)
        await this.props.cancelAppointmentUser(id)
            .then(() => {
                alert("Jadwal telah dibatalkan")
                this.props.history.replace("/profile");
            });
    };
    render() {
        // console.log("Ini id appointment", this.props.jadwal.id)
        let buttonCancel
        console.log("jadwal", this.props.jadwal)
        if(this.props.jadwal.status == "created") {
            buttonCancel = <Link to="" className="btn btn-outline-danger" onClick={(id) => this.doCancel(this.props.jadwal.id)} style={{fontSize:"10px", width: '100px'}}><i class="fas fa-user-edit"></i> Batalkan</Link>
        } else { 
            buttonCancel = null}
        return (
            <div className="col-md-6 info ml-2">
                <center>
                <span style={{ color: "#476678", fontSize:"14px"}}> <b> Jadwal Konseling </b></span>
                </center>
                <div className="row more-info-cart shadow rounded mb-5">
                    <div className="col-md-2 mb-3">
                        <img src={this.props.jadwal.avatar} className="img-responsive imeg pb-2" width="70" height="75" />
                        {/* <img src={require('../assets/img/girl(1).png')} className="img-responsive imeg pb-2" width="75" height="75" /> */}
                    </div>
                    <div className="col-md-2">
                        <h5 className="user-name text-center"><b>Nama Konselor</b></h5>
                        <h5 className="user-mail text-center"><i>{this.props.jadwal.namaCounselor}</i></h5>
                    </div>
                    <div className="col-md-2">
                        <h5 className="user-name text-center"><b>Status Konselor</b></h5>
                        <h5 className="user-mail text-center"><i>{this.props.jadwal.counselorStatus}</i></h5>
                    </div>
                    <div className="col-md-2">
                        <h5 className="user-name text-center"><b>Waktu</b></h5>
                        <h5 className="user-mail text-center"><i>{this.props.jadwal.sessionDate}</i></h5>
                    </div>
                    <div className="col-md-2">
                        <h5 className="user-name text-center"><b>Kontak</b></h5>
                        <h5 className="user-mail text-center"><i>{this.props.jadwal.contact}</i></h5>
                    </div>
                    <div className="col-md-2">
                        {buttonCancel}
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    "", actions)(withRouter(JadwalUser));