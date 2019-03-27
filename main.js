function formValidation()
{
    console.log("hola");
    var http = new XMLHttpRequest();
    var url = 'http://localhost:8080/users';
    var params = '{"' +
        'username":' + '"'  + document.getElementById("userid").valueOf() + '",' +
        '"mail":"nicole@mail.com",' +
        '"password":"123"' +
        '}';
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send(params);
}