import React, {Component} from 'react';

// import {Link} from 'react-router-dom';

class IsiAppoint extends Component {
    render() {
        return (
            <div class="row more-info-cart cart mb-2">
                <div class="col-md-2">
                    <img src={require('../assets/img/user.png')} className="img-responsive imeg pb-2" width="70" height="75" />
                    {/* <img src={require('../assets/img/girl(1).png')} class="img-responsive imeg pb-2" width="75" height="75" /> */}
                </div>
                <div class="col-md-2">
                    <h5 className="user-name text-center"><b>Nama Pasien</b></h5>
                    <h5 class="user-mail text-center"><i>{this.props.namepass}</i></h5>
                </div>
                <div class="col-md-2">
                    <h5 class="user-name text-center"><b>Jadwal</b></h5>
                    <h5 class="user-mail text-center"><i>{this.props.jadwal}</i></h5>
                </div>
                <div class="col-md-2">
                    <h5 class="user-name text-center"><b>Kontak</b></h5>
                    <h5 class="user-mail text-center"><i>{this.props.kontak} <br/> {this.props.imel}</i></h5>
                </div>
                <div class="col-md-2">
                    <h5 class="user-name text-center"><b>Konfirmasi Jadwal</b></h5>
                    <h5 class="user-mail text-center"><i>{this.props.counsstatus}</i></h5>
                </div>
                {/* <div class="col-md-2 text-center"> */}
                    {/* <Link to={this.state.link + this.props.id} className="nav-link button">Detail</Link> */}
                    {/* <Link to="/edit" style={{color:"red",textDecoration:"none", fontWeight:"600"}}><i class="fas fa-times-circle"></i> Batalkan</Link><br/><br/>
                    <Link to="/login" style={{color:"#287a6a",textDecoration:"none", fontWeight:"600"}}><i class="fas fa-money-bill-wave" style={{color:"#e1a70a"}}></i> Bayar</Link> */}
                {/* </div><br/> */}
                <br/>
            </div>  
        )
    }
}
export default IsiAppoint;