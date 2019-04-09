import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class JadwalCounselor extends Component {
    render() {
        // console.log("jadwal", this.props.jadwal)
        return (
                <div className="row more-info-cart mb-2 no-border">
                    {/* <div className="col-md-3 mb-3">
                        <img src={this.props.jadwal.avatar} className="img-responsive imeg pb-2" width="70" height="75" />
                    </div> */}
                    <div className="col-md-2">
                        <h5 className="user-name text-center"><b>Nama Pasien</b></h5>
                        <h5 className="user-mail text-center"><i>{this.props.fullname}</i></h5>
                    </div>
                    <div className="col-md-2">
                        <h5 className="user-name text-center"><b>Kontak</b></h5>
                        <h5 className="user-mail text-center"><i>{this.props.contact}, {this.props.email}</i></h5>
                    </div>
                    <div className="col-md-2">
                        <h5 className="user-name text-center"><b>Waktu</b></h5>
                        <h5 className="user-mail text-center"><i>{this.props.waktu}</i></h5>
                    </div>
                    <div className="col-md-2">
                        <h5 className="user-name text-center"><b>Status Konfirmasi</b></h5>
                        <h5 className="user-mail text-center"><i>{this.props.status}</i></h5>
                    </div>
                    <div className="col-md-2">
                        <Link to="" className="btn btn-outline-info mr-2 mb-1" style={{fontSize:"12px", width: '100px'}}><i class="fas fa-user-edit"></i> Konfirmasi</Link>
                        <Link to="" className="btn btn-outline-danger" style={{fontSize:"12px", width: '100px'}}><i class="fas fa-user-edit"></i> Batalkan</Link>
                        {/* <h5 className="user-name text-center"><b>Waktu</b></h5> */}
                        {/* <h5 className="user-mail text-center"><i>{this.props.waktu}</i></h5> */}
                    </div>
                </div>
        )
    }
}
export default JadwalCounselor;