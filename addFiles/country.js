$.get("http://ipinfo.io", function(response) {
    if(response.country == "RU") {
        const city = ymaps.geolocation.city;
        $("#country").html(city);
    }
    else {
        $("#country").html("СНГ");
    }
}, "jsonp");



