showIp();

function Show(ip) {
    const header = document.getElementById("warning");
    var str = "Unprotected";
    var result = str.fontcolor("red");
    const fetchIsp = fetch("http://ip-api.com/json/"+ip.ip);
    const StreamPromis = fetchIsp.then((response) => response.json())
    StreamPromis.then((j) => header.innerHTML += "ISP:"+j.isp + " • Status: " + result);

    
    header.innerHTML += "Your IP:" +ip.ip + " • ";
}

function showIp() {
    const fetchIp = fetch("https://api64.ipify.org?format=json");
    const StreamPromis = fetchIp.then((response) => response.json())

    StreamPromis.then((j) => Show(j));
}
