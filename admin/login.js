let LOGIN_URL = '../api/v1/token/';

login = function () {
    let username = $("#username").val();
    let password = $("#password").val();
    $.ajax({
        url: LOGIN_URL,
        method: 'POST',
        data: JSON.stringify({
            'username': username,
            'password': password
        }),
        dataType: 'json',
        success: function (response) {
            console.log(response);
            if(response){
                localStorage.setItem("token", response);
                window.location.assign("admin.html");
            } else {
                alert('Unrecognized username and/or password.');
            }
        }
    })
};