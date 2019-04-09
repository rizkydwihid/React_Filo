import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter, Redirect } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';

class JadwalCounselor extends Component {
    doConfirm = async (id, keyword) => {
        await this.props.confirmationCounselor(id, keyword)
            .then(() => {
                if (keyword === 'confirm') {
                    alert('Jadwal dengan '+(this.props.fullname)+' telah disetujui.')
                }
                this.props.history.replace('/profile')

            });
    };
    render() {
        return (
            <div className="row mb-2">

                <div className="col-md-2">
                    <h5 className="user-name text-center"><b>Pasien</b></h5>
                    <h5 className="user-mail text-center"><i>{this.props.fullname}</i></h5>
                </div>
                <div className="col-md-3">
                    <h5 className="user-name text-center"><b>Kontak</b></h5>
                    <h5 className="user-mail text-center"><i>{this.props.contact}<br/>{this.props.email}</i></h5>
                </div>
                <div className="col-md-2">
                    <h5 className="user-name text-center"><b>Waktu</b></h5>
                    <h5 className="user-mail text-center"><i>{this.props.waktu}</i></h5>
                </div>
                <div className="col-md-2">
                    <h5 className="user-name text-center"><b>Status Konfirmasi</b></h5>
                    <h5 className="user-mail text-center"><i>{this.props.status}</i></h5>
                </div>
                <div className="col-md-3">
                        <div className="row mx-auto">
                            <button className="btn btn-outline-info mb-2" onClick={(id, keyord) => this.doConfirm(this.props.idAppointment, 'confirm')} style={{ fontSize: "14px", width: '110px', fontWeight: 'bold' }}><i class="fas fa-check"></i> Konfirmasi</button>
                        </div>
                        <div className="row mx-auto">
                            <button className="btn btn-outline-danger" onClick={(id, keyord) => this.doConfirm(this.props.idAppointment, 'cancel')} style={{ fontSize: "14px", width: '110px', fontWeight: 'bold' }}><i class="fas fa-ban"></i> Batalkan</button>
                        </div>

                </div>

            </div>
        )
    }
}
export default connect(
    "", actions)(withRouter(JadwalCounselor));