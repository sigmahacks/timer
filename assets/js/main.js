/* FAQ */
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active1");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


/* Confetti */

var confetti_colors = [
'#E68F17',
'#FAB005',
'#FA5252',
'#E64980',
'#BE4BDB',
'#0B7285',
'#15AABF',
'#EE1233',
'#40C057'];

var confettis_conf = [
// 1
{
  angle: 270,
  spread: 45,
  startVelocity: 20,
  elementCount: 10,
  decay: 0.7,
  colors: confetti_colors },

// 2
{
  angle: 270,
  spread: 90,
  startVelocity: 30,
  elementCount: 30,
  decay: 0.73,
  colors: confetti_colors },

// 3
{
  angle: 90,
  spread: 180,
  startVelocity: 40,
  elementCount: 50,
  decay: 0.75,
  colors: confetti_colors },

// 4
{
  angle: 90,
  spread: 270,
  startVelocity: 50,
  elementCount: 80,
  decay: 0.77,
  colors: confetti_colors },

// 5
{
  angle: 90,
  spread: 360,
  startVelocity: 60,
  elementCount: 150,
  decay: 0.82,
  colors: confetti_colors }];



var buttons = Array.from(document.querySelectorAll('[data-fun]'));
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    window.confetti(button.children[0], confettis_conf[button.getAttribute('data-fun')]);
  });
});

/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid'); 
	}
	else{
		$('#site-nav').removeClass('navbar-solid'); 
	}
}

/*
 * Registration Form
*/

$('#registration-form').submit(function(e){
    e.preventDefault();
    
    var postForm = { //Fetch form data
            'fname'     : $('#registration-form #fname').val(),
            'lname'     : $('#registration-form #lname').val(),
            'email'     : $('#registration-form #email').val(),
            'cell'      : $('#registration-form #cell').val(),
            'address'   : $('#registration-form #address').val(),
            'zip'       : $('#registration-form #zip').val(),
            'city'      : $('#registration-form #city').val(),
            'program'   : $('#registration-form #program').val()
    };

    $.ajax({
            type      : 'POST',
            url       : './assets/php/contact.php',
            data      : postForm,
            dataType  : 'json',
            success   : function(data) {
                            if (data.success) {
                                $('#registration-msg .alert').html("Registration Successful");
                                $('#registration-msg .alert').removeClass("alert-danger");
                                $('#registration-msg .alert').addClass("alert-success");
                                $('#registration-msg').show();
                            }
                            else
                            {
                                $('#registration-msg .alert').html("Registration Failed");
                                $('#registration-msg .alert').removeClass("alert-success");
                                $('#registration-msg .alert').addClass("alert-danger");
                                $('#registration-msg').show();
                            }
                        }
        });
});

/*
 * SmoothScroll
*/

smoothScroll.init();