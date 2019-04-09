import React, {Component} from 'react';
import Header from '../component/header/Header';
import Footer from '../component/Footer';
// import { Link } from 'react-router-dom';
import '../assets/css/find.css';
import Search from '../component/Search';
import axios from 'axios';
import IsiFindCoun from '../component/IsiFindCoun';
import { avanull } from '../assets/js/avanull';
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';

class FindCounselor extends Component {
    constructor (props){
        super(props);
        this.state = {
            findCouns: [],
            listSearch: this.props.listSearch,
            search: ""
            // avatar:""
        };
    };
    componentDidMount = async () => {
        const self = this;
        await axios
        .get("http://0.0.0.0:5000/public/counselor")
        .then(function(response){
            self.setState({findCouns: response.data.listCounselor})
            // if (response.data.user.avatar === "") {
            //     self.setState({ avatar: avanull })
            // }
        })
        .catch(function(error){
            console.log("failed get data counselor", error);
        })
    }
    handleInputChange = e => {
        console.log("even", e.target.value);
        let value = e.target.value;
        this.searchCouns(value)
        };

    searchCouns = async (keyword) => {
        if (keyword.length > 3 ){
            try {
            const response = await axios.get("http://0.0.0.0:5000/public/counselor?city=" + keyword)
            // console.log("kota", response)
            this.setState({ findCouns: response.data.listCounselor })
            // console.log("hasil pencarian",this.state.findCouns)
            }
            catch (error){
            console.log(error)
            }
        }
        }

    render() {
        return (
            <div>
                <Header/>
                <Search doSearch={this.handleInputChange}/>
                <div class="cart-container mb-5">
                {this.state.findCouns.map((item, key) => {
                    const fullname = item.fullName !== null ? item.fullName:"";
                    const avatar = item.avatar !== null ? item.avatar: avanull;
                    const gnder = item.gender !== null ? item.gender:"";
                    const lisens = item.lisensi !== null ? item.lisensi:"";
                    const contact = item.contact !== null ? item.contact:"";
                    const id = item.idCounselor !== null ? item.idCounselor:"";
                    return <IsiFindCoun key={key} fullname={fullname} gnder={gnder} lisens={lisens} contact={contact} id={id} avatar={avatar} />;
                })}
                <br/>
                </div><br/><br/><br/>
                <Footer/>
            </div>
        )
    }
}
export default connect(
    "is_login, username, password, findCouns, listSearch", actions)(withRouter(FindCounselor));