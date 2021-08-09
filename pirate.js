showIp();

function Show(ip) {
    const header = document.getElementById("warning");
    var str = "Unprotected";
    var result = str.fontcolor("red");
    const fetchIsp = fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=1be9a6884abd4c3ea143b59ca317c6b2");
    const StreamPromis = fetchIsp.then((response) => response.json())
    StreamPromis.then((j) => header.innerHTML += "ISP:"+j.connection.isp_name + " • Status: " + result);

    
    header.innerHTML += "Your IP:" +ip.ip + " • ";
}

function showIp() {
    const fetchIp = fetch("https://api64.ipify.org?format=json");
    const StreamPromis = fetchIp.then((response) => response.json())

    StreamPromis.then((j) => Show(j));
}
