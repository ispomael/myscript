var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/settings/general',true);
req.send();
function handleResponse() {
    var token = this.responseText.match(/name="csrf-token" content="(\w+)"/)[1];
    console.log(token);
};
