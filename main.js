function validate() {
    var username = document.getElementById('username').value;
    var checkin = document.getElementById('check-in').value;
        
      if (username === "" || username === null) {
        intensify($('#userLabel'));
                    return false;
      }
      
      if (checkin === "" || checkin === null) {
                 intensify($('#checkinLabel'));
                    return false;
      }
    }
    
    function intensify(intense) {
        intense.addClass('animated shakeit').delay(6000).queue(function(){
                        intense.removeClass('animated shakeit').dequeue();
                    });
    }
    
    function clicked() {
        $('button').addClass('clicked').delay(200).queue(function(){
            $('button').removeClass('clicked').dequeue();
        });
    }
    
    var Go = document.getElementById('Go');
    Go.addEventListener('click', clicked);
    Go.addEventListener('click', validate);