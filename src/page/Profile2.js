import React, { Component } from 'react';
import Footer from '../component/Footer';
import '../assets/css/profile.css';
import "../../node_modules/react-vis/dist/style.css"
import Header from '../component/header/Header';
import EmotionRecord from '../component/EmotionRecord';
import JadwalUser from '../component/JadwalUser';
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { avanull } from '../assets/js/avanull.js'

class ProfileUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            username: "",
            fullName: "",
            gender: "",
            email: "",
            address: "",
            avatar: "",
            listJadwal: [],

            day7: "",
            day6: "",
            day5: "",
            day4: "",
            day3: "",
            day2: "",
            day1: "",
            day0: "",

            sad7: "",
            sad6: "",
            sad5: "",
            sad4: "",
            sad3: "",
            sad2: "",
            sad1: "",
            sad0: "",

            happy7: "",
            happy6: "",
            happy5: "",
            happy4: "",
            happy3: "",
            happy2: "",
            happy1: "",
            happy0: "",
        }
    }
    componentDidMount = async () => {
        const url = "http://0.0.0.0:5000/user"
        const self = this;
        const getEmo = {
            method: 'get',
            url: 'http://0.0.0.0:5000/emotionmeter',
            headers: { Authorization: "Bearer " + this.props.token }
        }
        await axios.get(url, { headers: { Authorization: "Bearer " + this.props.token } })
            .then(function (response) {
                // console.log("test url 2", response.data)
                self.setState({ ...response.data.user }, () => { })
                if (response.data.user.avatar === "") {
                    self.setState({ avatar: avanull })
                }

            })
            .catch(function (error) {
                console.log(error);
            })
        axios(getEmo)
            .then(function (response) {
                // console.log("Apaan TUUH Kuis dangdut", response.data.weeklyCheck[0]['createdAt'])
                self.setState({
                    day7: response.data.weeklyCheck[0]['createdAt'],
                    day6: response.data.weeklyCheck[1]['createdAt'],
                    day5: response.data.weeklyCheck[2]['createdAt'],
                    day4: response.data.weeklyCheck[3]['createdAt'],
                    day3: response.data.weeklyCheck[4]['createdAt'],
                    day2: response.data.weeklyCheck[5]['createdAt'],
                    day1: response.data.weeklyCheck[6]['createdAt'],
                    day0: response.data.weeklyCheck[7]['createdAt'],

                    sad7: response.data.weeklyCheck[0]['sad'],
                    sad6: response.data.weeklyCheck[1]['sad'],
                    sad5: response.data.weeklyCheck[2]['sad'],
                    sad4: response.data.weeklyCheck[3]['sad'],
                    sad3: response.data.weeklyCheck[4]['sad'],
                    sad2: response.data.weeklyCheck[5]['sad'],
                    sad1: response.data.weeklyCheck[6]['sad'],
                    sad0: response.data.weeklyCheck[7]['sad'],

                    happy7: response.data.weeklyCheck[0]['happy'],
                    happy6: response.data.weeklyCheck[1]['happy'],
                    happy5: response.data.weeklyCheck[2]['happy'],
                    happy4: response.data.weeklyCheck[3]['happy'],
                    happy3: response.data.weeklyCheck[4]['happy'],
                    happy2: response.data.weeklyCheck[5]['happy'],
                    happy1: response.data.weeklyCheck[6]['happy'],
                    happy0: response.data.weeklyCheck[7]['happy'],
                })
            })
        await axios
            .get("http://0.0.0.0:5000/appointment/user",
                { headers: { Authorization: "Bearer " + this.props.token } }
            )
            .then(function (response) {
                if (response.status === 200) {
                    self.setState({ listJadwal: response.data.appointment })
                }
                console.log("list jadwal", self.getState(this.state.listJadwal));
            })
            .catch(function (error) {
                console.log("failed get data counselor", error);
            });
    }

    render() {
        let jadwalKonseling
        if ((!this.props.is_login) && (this.props.statusUser !== "user")) {
            this.props.history.push("/about")
        }

        return (
            <section>
                <Header />
                <div className="cart-container mb-5">
                    <div className="row text-left rounded">
                        <div className="col-md-2 info pt-5 img mt-4 mb-2">
                            <center>
                                <img src={this.state.avatar} className="img-responsive imeg" height="100" width="90" height="75" />
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
                                <dt> <small> Alamat : </small> {this.state.address} </dt>
                            </dl>
                            <br />
                            <br />
                            <Link to="/editprofileuser" className="nav-link button" style={{ fontSize: "14px" }}><i class="fas fa-user-edit"></i> Perbarui Profil</Link>
                        </div>
                        <div className="col-md-6 info mt-5">
                            <center>
                                <EmotionRecord
                                    day7={this.state.day7}
                                    day6={this.state.day6}
                                    day5={this.state.day5}
                                    day4={this.state.day4}
                                    day3={this.state.day3}
                                    day2={this.state.day2}
                                    day1={this.state.day1}
                                    day0={this.state.day0}

                                    sad7={this.state.sad7}
                                    sad6={this.state.sad6}
                                    sad5={this.state.sad5}
                                    sad4={this.state.sad4}
                                    sad3={this.state.sad3}
                                    sad2={this.state.sad2}
                                    sad1={this.state.sad1}
                                    sad0={this.state.sad0}

                                    happy7={this.state.happy7}
                                    happy6={this.state.happy6}
                                    happy5={this.state.happy5}
                                    happy4={this.state.happy4}
                                    happy3={this.state.happy3}
                                    happy2={this.state.happy2}
                                    happy1={this.state.happy1}
                                    happy0={this.state.happy0}
                                />

                            </center>
                        </div>
                    </div>
                    <div className="row text-left">
                        <div className="col-md-6 info ml-2">
                            <center>
                                <span style={{ color: "#476678", fontSize: "14px" }}> <b> Jadwal Konseling </b></span>
                            </center>
                            {this.state.listJadwal.map((item, key) => {
                                const idAppointment = item.idAppointment !== null ? item.idAppointment : "";
                                const namaCounselor = item.namaCounselor !== null ? item.namaCounselor : "";
                                const counselorStatus = item.counselorStatus !== null ? item.counselorStatus : "";
                                const status = item.status !== null ? item.status : "";
                                const avatar = item.avatar !== null ? item.avatar : avanull;
                                const lisensi = item.lisensi !== null ? item.lisensi : "";
                                const contact = item.contact !== null ? item.contact : "";
                                const email = item.email !== null ? item.email : "";
                                const sessionDate = item.sessionDate !== null ? item.sessionDate : "";
                                return <JadwalUser
                                    idAppointment={idAppointment}
                                    namaCounselor={namaCounselor}
                                    counselorStatus={counselorStatus}
                                    status={status}
                                    lisensi={lisensi}
                                    avatar={avatar}
                                    contact={contact}
                                    sessionDate={sessionDate}
                                    email={email} />;
                            })}
                        </div>
                        <br />
                    </div>
                </div><br /><br />
                <Footer />
            </section>
        )
    }
}
export default connect(
    "is_login, username, password, email, phone, token", actions)(withRouter(ProfileUser));