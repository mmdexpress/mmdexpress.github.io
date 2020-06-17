$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        // event.preventDefault(); 

        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "your name must consist of at least 2 characters",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "your subject must consist of at least 4 characters",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "your Number must consist of at least 5 characters",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "please enter a valid email address"
                },
                message: {
                    required: "please write a valid message with a length of 20",
                    minlength: "please write a valid message"
                }
            },
            submitHandler: function(form) {
                // alert($(form).serialize());
                var xhttp = new XMLHttpRequest();
                
                xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    // document.getElementById("demo").innerHTML = this.responseText;
                    $('#review-alert').show();
                }
                };
                // var data = {name: $(name).val(), subject: $(subject).val(), email: $(email).val(), message: $(message).val()};
                // xhttp.open("POST", "https://email-app-testtest.herokuapp.com/", true);
                xhttp.open("POST", "http://localhost:9998", true);
                xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");    
                xhttp.send(JSON.stringify($(form)));

            }
        })
        return false;
    })
        
 })(jQuery)
})