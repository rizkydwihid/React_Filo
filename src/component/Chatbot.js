import React, { Component } from 'react';
import '../assets/css/chatbot.css';
// import '../assets/js/chat';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
import $ from 'jquery';

class Chatbot extends Component {
    componentDidMount() {
        const token = this.props.token
        $(function () {
            function submit_message(message) {
                // $.post( "http://localhost:5000/send_message", {message: message}, handle_response);
                //   $.post( "http://localhost:8010/proxy/send_message", {message: message}, handle_response);
                $.ajax({
                    url: 'https://api.relieve.care/send_message',
                    type: 'post',
                    data: {
                        message: message
                    },
                    headers: {
                        Authorization: 'Bearer ' + token,
                        // "Header Name Two": 'Header Value Two'
                    },
                    dataType: 'json',
                    // success: function (data) {
                    //     console.info(data);
                    // }
                    success: function handle_response(data) {
                        // append the bot repsonse to the div
                        $.each( data.message, function(index, value){

                            $('.chat-container').append(`
                                <div class="chat-message col-8 speech-bubble bot-message">
                                    ${value}
                                </div>
                          `)
                          })
                        // remove the loading indicator
                        $("#loading").remove();
                        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 100);
                    }
                });

            }

            $('#target').on('submit', function (e) {
                e.preventDefault();
                const input_message = $('#input_message').val()
                // return if the user does not enter any text
                if (!input_message) {
                    return
                }

                $('.chat-container').append(`
                    
                    <div class="chat-message col-8 offset-4 speech-bubble human-message">
                        ${input_message}
                    </div>
                `)
                // loading 
                $('.chat-container').append(`
                    <div class="chat-message col-8 bot-message speech-bubble" id="loading">
                        <b>...</b>
                    </div>
                    
                `)

                // clear the text input 
                $('#input_message').val('')

                // send the message
                submit_message(input_message)
            });

            $("#chat-circle").click(function () {
                $("#chat-circle").toggle('scale');
                $(".chat-box").toggle('scale');
            })

            $(".chat-box-toggle").click(function () {
                $("#chat-circle").toggle('scale');
                $(".chat-box").toggle('scale');
            })

        })
    }

    postSession = async () => {
        const token = this.props.token
        const post = {
            method: 'post',
            url: 'https://api.relieve.care/emotionmeter',
            headers: { Authorization: "Bearer " + token }
        }
        await axios(post)
            .catch(function(error) {
                console.log(error);
              });
    }

    render() {
        return (
            <div>
                <div id="body">
                    <div id="chat-circle" className="btn btn-raised">
                        <div id="chat-overlay"></div>
                        <img onClick = { () => this.postSession() } src={require('../assets/img/lovebird.ico')} id="filo" height="60" />
                        <div className="kelip">
                            <span id="blink_text" >Sapa Aku..</span><br />
                            <span> </span>
                        </div>
                    </div>
                    <div className="chat-box">
                        <div className="chat-box-header">
                            Filo
                            <span className="chat-box-toggle"><i className="fas fa-times-circle"></i></span>
                        </div>
                        <div className="chat-box-body">
                            <div className="chat-box-overlay"></div>
                            <div className="chat-logs">
                                <div className="chat-container"></div>
                            </div>
                        </div>
                        <div className="chat-input ">
                            <div className="h-100 justify-content-center">
                                <form id="target">
                                    <input className="input" type="text" id="input_message" autoComplete="off" placeholder="Silahkan sapa Filo.." />
                                    {/* <input type="submit" hidden/> */}
                                    <button type="submit" className="chat-submit" id="chat-submit"><i className="fas fa-share"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// export default Chatbot;
export default connect("is_login, token", actions)(withRouter(Chatbot))