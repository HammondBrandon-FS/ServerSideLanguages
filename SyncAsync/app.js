var http = require('http'); // 1. htt needs to be http

var myname = function(){ // 2. functon needs to be function
    return "Here is my IP address"; // 3. return instead of log
}

async function callHttpbin() { // 4. callHttpbi should be callHttpbin, 5. function needs to be async
    let promise = new Promise((resolve, reject) => {
        http.get(
        'http://httpbin.org/ip',
            function(response) {
                var str="";
                response.setEncoding('utf8');
                response.on('data', function(data){
                    str += data;
                });
                response.on('end', function() {
                    var result = JSON.parse(str);
                    myips = result.origin;
                    resolve(myips); // 6. semicolon, resolve my ips
                });
            }
        );
    });

    let result = await promise;
    return result; // 7. must RETURN the result
}

async function executeAsyncTask(){ // 8. must be async to use await
    const valueA = await callHttpbin(); // semicolon
    const valueB = myname();
    console.log(valueB+" "+valueA +", "+valueA);  // 9. semicolon, concat valueA again to duplicate the value for exact output
} // 10, close bracket needed

executeAsyncTask(); // 11. function must be called

// Output Here is my IP address 149.24.160.1, 149.24.160.1