import React, { Component } from 'react';
import '../assets/css/register.css';
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
import { storage } from '../firebase';
import { Link } from 'react-router-dom';
import Header from '../component/header/Header'
import '../assets/css/firebase.css'


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        }

        this.handleChange = this
            .handleChange
            .bind(this);

        this.handleUpload = this
            .handleUpload
            .bind(this);

    }

    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }



    handleUpload = () => {

        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
                this.setState({ progress })
            },
            (error) => {
                console.log(error)
            },
            () => {

                storage.ref('images').child(image.name).getDownloadURL().then(async (url) => {
                    await this.setState({ url })
                    this.props.setAvatar(this.state.url)
                })
            }


        );
    }
    doRegister = () => {
        this.props.postRegis().then(() => {
            alert('Registrasi Berhasil!')
            this.props.history.replace("/logcounselor");
        });
    };

    render() {
        return (
            <div>
                <Header />
                <div className="container register-form mt-5">
                    <div className="form">
                        <div className="note couns-img">
                            <img src={require('../assets/img/employee.png')} /> <br />
                            <p style={{ color: "#476678", fontWeight: "bold", fontSize: '20px'}}>Daftar Sebagai Counselor</p>
                        </div>
                        <div className="form-content">
                            <form onSubmit={event => event.preventDefault()}>
                                <div className="row mt-4">
                                
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Username" name="username" required onChange={e => this.props.setField(e)} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" placeholder="Nama Lengkap" name="fullname" required onChange={e => this.props.setField(e)} />
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="form-group col-md-6">
                                        <input type="password" className="form-control" placeholder="Buat Sandi" name="password" required onChange={e => this.props.setField(e)} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" placeholder="Email" name="email" required onChange={e => this.props.setField(e)} />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label className="form-check form-check-inline mr-5">
                                                <input onClick={e => this.props.setGender(e)} className="form-check-input" type="radio" name="gender"
                                                    value="Male" />
                                                <span className="form-check-label" style={{ color: "#476678", fontWeight:"600" }}> &nbsp; Pria </span>
                                            </label>
                                            <label className="form-check form-check-inline">
                                                <input onClick={e => this.props.setGender(e)} className="form-check-input" type="radio" name="gender"
                                                    value="Female" />
                                                <span className="form-check-label" style={{ color: "#476678", fontWeight:"600" }}> &nbsp; Wanita </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Alamat" name="jalan" required onChange={e => this.props.setField(e)} />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Kecamatan" name="district" required onChange={e => this.props.setField(e)} />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Kota" name="city" required onChange={e => this.props.setField(e)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Surat Izin Praktik" name="lisensi" required onChange={e => this.props.setField(e)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Nomor Handphone" name="phone"
                                                required onChange={e => this.props.setField(e)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <center>
                                            <div className="text-center kotakgambar card mb-3" style={{ height: '200px', width: '200px' }}>
                                                <img className="my-auto mx-auto" src={this.state.url} style={{ width: '100%' , height:'15vw', objectFit:'cover'}} />
                                            </div>
                                            <progress className="mb-3" value={this.state.progress} max="100" />
                                        </center>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group tambahgambar">
                                            <center>
                                                <button className="btn btn-info" width="100px" ><i class="fas fa-plus-circle"></i> Pilih Avatarmu</button>
                                                <input required type="file" onChange={this.handleChange} />
                                            </center>
                                        </div>
                                        <center>
                                            <button className="btn btn-info mb-3" width="100px" onClick={this.handleUpload}><i class="fas fa-image"></i> Lihat Gambar</button>
                                        </center>
                                    </div>
                                </div>
                                <div className="col-12 register text-center">
                                    <button type="submit" className="btn btn-success mb-3" onClick={() => this.doRegister()}>Register</button><br />
                                    <span style={{ color: "#476678" }}>Sudah punya akun? Silahkan Login </span> <Link to="/logcounselor" style={{ color: "#476678" }}>Disini</Link>
                                </div>
                                <div className="col-12 register text-center">
                                    <span style={{ color: "#476678" }}><i class="fas fa-question-circle" ></i> Registrasi sebagai </span> <Link to="/regisuser" style={{ color: "#476678" }}>User</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}
export default connect(
    "is_login, username, password, avatar", actions)(withRouter(Register));