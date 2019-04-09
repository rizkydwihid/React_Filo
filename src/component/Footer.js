import React, { Component } from 'react';
import '../assets/css/footer.css';


class Footer extends Component{
    render() {
        return(
            <div>
            <div id="footer ">
		      <div className="container pt-5 mt-5">
		      	<div className="row1">
		      		<div className="col-xs-12 col-sm-12 col-md-12 mt-2 ">
		      			<ul className="list-unstyled list-inline social text-center">
		      				<li className="list-inline-item"><a><i className="fab fa-facebook"></i></a></li>
		      				<li className="list-inline-item"><a><i className="fab fa-twitter"></i></a></li>
		      				<li className="list-inline-item"><a><i className="fab fa-instagram"></i></a></li>
		      				<li className="list-inline-item"><a><i className="fab fa-google-plus"></i></a></li>
		      				
		      			</ul>
		      		</div>
		      		
		      	</div>	
		      	<div className="row1">
		      		<div className="col-xs-12 col-sm-12 col-md-12 mt-2 text-center mb-5">
		      			<p className="h6" style={{color:"#415e61", fontWeight:"bold"}}> - &nbsp; Relieve &nbsp; -</p>
		      		</div>
		      		
		      	</div>	
		    	</div>
				<div className="container-fluid">
				<div className="row mt-5">
                <div className="col-md-12 bg-foot">
                {/* <img src={require('../assets/img/mountain.jpg')} style={{width:"100%"}} alt=""/> */}
                </div>
            </div>
			</div>
	        </div>
			    
            </div>
        )
    }
}
export default Footer;