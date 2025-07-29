var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('get','/document/create',true);
req.send();
function handleResponse() {
    var token = this.responseText.match(/name="csrf-token" content="(\w+)"/)[1];
    var profileid = this.responseText.match(/class="m-4 text-dark text-center" href="(\w+)"/)[1];
    console.log(profileid);
};
