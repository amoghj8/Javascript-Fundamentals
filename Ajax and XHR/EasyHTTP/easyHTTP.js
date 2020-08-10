function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// GET request 
easyHTTP.prototype.get = function(url,callback) {
    this.http.open('GET',url,true);
    
    this.http.onload = function() {
        if(this.status==200) {
            callback(this.responseText);
        }
    }

    this.http.send();
}

// POST request
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST',url,true);
    this.http.setRequestHeader('Content-type','application/json');

    this.http.onload = function() {
        if(this.status==201) {
            callback(this.responseText);
        }
    }
    this.http.send(JSON.stringify(data));
}

// PUT
easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT',url,true);
    this.http.setRequestHeader('Content-type','application/json');

    this.http.onload = function() {
        callback(this.responseText);
    }
    this.http.send(JSON.stringify(data));
}

// DELETE
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE',url,true);

    this.http.onload = function() {
        callback('post deleted');
    }
    this.http.send();
}