import $ from 'jquery';

$(function() {
    function submit_message(message) {
      // $.post( "http://localhost:5000/send_message", {message: message}, handle_response);
      $.post( "http://localhost:8010/proxy/send_message", {message: message}, handle_response);
  
      function handle_response(data) {
        // append the bot repsonse to the div
        $.each( data.message, function(index, value){

          $('.chat-container').append(`
              <div class="chat-message col-8 speech-bubble bot-message">
                  ${value}
              </div>
        `)
        })
        
        // remove the loading indicator
        $( "#loading" ).remove();
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 100);
        
      }
  }
  
  $('#target').on('submit', function(e){
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

    $("#chat-circle").click(function() {    
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
    })
    
    $(".chat-box-toggle").click(function() {
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
    })
    
  })