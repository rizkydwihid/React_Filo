import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter, Redirect } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';

class JadwalUser extends Component {
    state = {
        redirect: false
      }
    
    doCancel = async (id) => {
        await this.props.cancelAppointmentUser(id)
            .then(() => {
                // alert("Jadwal dengan "+(this.props.namaCounselor)+" telah dibatalkan")
                this.props.history.replace('/profile')

            });
    };

    render() {
        return (

            <div className="row more-info-cart shadow rounded mb-5">
                <div className="col-md-2 mb-3">
                    <center>
                    <img src={this.props.avatar} className="img-responsive imeg pb-2" width="70" height="75" />
                    </center>
                </div>
                <div className="col-md-2">
                    <h5 className="user-name text-center"><b>Nama Konselor</b></h5>
                    <h5 className="user-mail text-center"><i>{this.props.namaCounselor}</i></h5>
                </div>
                <div className="col-md-2">
                    <h5 className="user-name text-center"><b>Status Konselor</b></h5>
                    <h5 className="user-mail text-center"><i>{this.props.counselorStatus}</i></h5>
                </div>
                <div className="col-md-2">
                    <h5 className="user-name text-center"><b>Waktu</b></h5>
                    <h5 className="user-mail text-center"><i>{this.props.sessionDate}</i></h5>
                </div>
                <div className="col-md-2">
                    <h5 className="user-name text-center"><b>Kontak</b></h5>
                    <h5 className="user-mail text-center"><i>{this.props.contact}</i></h5>
                </div>
                <div className="col-md-2 mb-2">
                <center>
                <button className="btn btn-outline-danger" onClick={(id) => this.doCancel(this.props.idAppointment)} style={{ fontSize: "12px", width: '90px', fontWeight: 'bold' }}><i class="fas fa-ban"></i> Batalkan</button>
                </center>
                </div>
                <br/>
            </div>
        )
    }
}
export default connect(
    "", actions)(withRouter(JadwalUser));