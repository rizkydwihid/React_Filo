import React, {Component} from 'react';
import Footer from '../component/Footer';
import Chatbot from '../component/Chatbot';
import Header from '../component/header/Header';

class About extends Component {
    render () {
        return (
            <section>    
                <Header/>
                    <div className="container mb-5">
                        <div className="row pt-3 pb-3 bg-transparent">
                            <div className="col-md-3 info pt-4 mb-3">
                                <center>
                                <img src={require('../assets/img/lovebird.png')} className="img-responsive" height="40" />  
                                <img src={require('../assets/img/undraw_chatting_2yvo.svg')} className="img-responsive" height="125"/>
                                </center>
                            </div>
                            <div className="col-md-6 pt-4 info text-justify">
                                <p style={{color:"#476678"}}><span style={{fontWeight:"bold", fontSize:"20px"}}>AI Chat</span><hr style={{width:"100px",marginLeft:"0", marginTop:"5px"}}/>
                                Perkenalkan, aku <span style={{fontWeight:"bold"}}>Filo</span> .. 
                                <br/> Aku adalah Bot yang siap mendengarkan segala cerita kamu, dan bisa menjadi teman berbicara ketika kamu memiliki sesuatu yang ingin  kamu ceritakan.
                                <br/> Segala cerita akan Filo dengarkan, jadi jangan malu ya cerita ke <span style={{fontWeight:"bold"}}>Filo </span>.. 
                                </p>
                            </div>
                        </div>
                        <div className="row pt-3 pb-3 bg-transparent">
                            <div className="col-md-3 mt-4 info">
                                <center>
                                <img src={require('../assets/img/undraw_visual_data_b1wx.svg')} className="img-responsive" height="125"/>  
                                </center>
                            </div>
                            <div className="col-md-6 pt-4 info text-justify">
                                <p style={{color:"#476678"}}> <span style={{fontWeight:"bold", fontSize:"20px"}}>Statistik Kondisi Mental</span><hr style={{width:"350px",marginLeft:"0", marginTop:"5px"}}/>
                                Anda dapat mengetahui kondisi emosi atau mental anda melalui Statistik kondisi mental tersebut setelah anda berinteraksi dengan <span style={{fontWeight:"bold"}}>Filo. </span>
                                Data tersebut akan muncul pada halaman profil anda.                                 
                                </p>
                            </div>
                        </div>
                        <div className="row pt-3 pb-3 bg-transparent">
                            <div className="col-md-3 mt-5 info text-justify">
                                <center>
                                <img src={require('../assets/img/undraw_people_search_wctu.svg')} height="125" />  
                                </center>
                            </div>
                            <div className="col-md-6 pt-4 info text-justify">
                                <p style={{color:"#476678"}}><span style={{fontWeight:"bold", fontSize:"20px"}}>Temukan Konselor</span><hr style={{width:"350px",marginLeft:"0", marginTop:"5px"}}/>
                                Tidak hanya <span style={{fontWeight:"bold"}}>Filo</span> saja yang dapat membantu anda ketika anda mengalami sebuah permasalahan, 
                                anda akan mendapatkan bantuan dari beberapa konselor yang telah terdaftar pada website kami. <br/>
                                Anda dapat mencarinya pada menu <span style={{fontWeight:"bold"}}> Temukan Konselor </span>. Sebelum itu, anda harus login terlabih dahulu atau melakukan registrasi apabila
                                anda belum memiliki akun.                                
                                </p>
                            </div>
                        </div>
                    </div>
            <Chatbot/>
            <Footer/>
            </section>
        )
    }
}
export default About;
