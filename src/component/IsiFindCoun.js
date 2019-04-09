import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class IsiFindCouns extends Component {
    constructor (props){
        super(props);
        this.state = {
            link: "/public/counselor/"
        };
     };
    render() {
        return (
            <div className="row more-info-cart cart mb-5">
                <div className="col-md-2">
                    <img src={this.props.avatar} className="img-responsive imeg pb-2" width="70" height="75" />
                </div>
                <div className="col-md-2">
                    <h5 className="user-name text-center"><b>Nama Konselor</b></h5>
                    <h5 className="user-mail text-center"><i>{this.props.fullname}</i></h5>
                </div>
                <div className="col-md-2">
                    <h5 className="user-name text-center"><b>Gender</b></h5>
                    <h5 className="user-mail text-center"><i>{this.props.gnder}</i></h5>
                </div>
                <div className="col-md-2">
                    <h5 className="user-name text-center"><b>Lisensi</b></h5>
                    <h5 className="user-mail text-center"><i>{this.props.lisens}</i></h5>
                </div>
                <div className="col-md-2">
                    <h5 className="user-name text-center"><b>Kontak</b></h5>
                    <h5 className="user-mail text-center"><i>{this.props.contact}</i></h5>
                </div>
                <div className="col-md-2 text-center">
                    <Link to={this.state.link + this.props.id} className="nav-link button">Buat Janji</Link>
                    </div><br/><br/>
                <br/>    
            </div>
        )
    }
}
export default IsiFindCouns;