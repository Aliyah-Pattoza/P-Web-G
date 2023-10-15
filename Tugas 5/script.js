function searchCity() {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        type: 'GET',
        data: {
            'q': $('.input-keyword').val(),
            'appid': 'ecedf4726972ee769f03346bc7ca4cfd',
            'units': 'metric'
        },
        success: function(response) {
            let result = $('.result');

            result.html(`<h2 style="margin-bottom: 15px;">${response.name}, ${response.sys.country}</h2>
                                <h5><span class="temp">${response.main.temp}°С</span> <span class="temp">${response.weather[0].description}</span></h5>
                                <p style="margin-bottom: 17px;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
                                <h5>Wind Speed : ${response.wind.speed} m/s</h5>
                                <h5 style="margin-bottom: 17px;">Clouds : ${response.clouds.all}%</h5>
                                <h4 style="color: #012443;">Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</h4>` 
            );
        }
    });

    $('.input-keyword').val('');
}

$('#search-button').on('click', function() {
    searchCity();
});


$('#search-input').on('keyup', function(a){
    if(a.keyCode == 13){
        searchCity();
    }
});