
var urlParams = new URLSearchParams(window.location.search);
var param = urlParams.get('code')
console.log(param)
var countryLink = "https://restcountries.eu/rest/v2/alpha/" + param
console.log(countryLink)


function renderData(data) {
    const container = $('.container');

    let countryFlagDiv = $(document.createElement('div'));
    countryFlagDiv.addClass('flag_pic');
    let countryFlagImg = $(document.createElement('img'));
    countryFlagImg.attr('src', data.flag);
    countryFlagDiv.append(countryFlagImg);
    let countryName = $(document.createElement('h2'));
    countryName.text('Название:' + ' ' + data.name);
    let countryCapital = $(document.createElement('h4'));
    countryCapital.text('Столица:' + ' ' + data.capital)
    let countryPopulation = $(document.createElement('h4'));
    countryPopulation.text('Население:' + ' ' + data.population + ' ' + 'чел.');
    let countryCurrencies = $(document.createElement('h4'));
    countryCurrencies.text('Код валюты:' + ' ' + data.currencies[0].code);
    let countryCallingCode = $(document.createElement('h4'));
    countryCallingCode.text('Код для звонков:' + ' ' + data.callingCodes);

   
    let countryDiv = $(document.createElement('div'));
    countryDiv.append(countryName);
    countryDiv.append(countryCapital);
    countryDiv.append(countryPopulation);
    countryDiv.append(countryCurrencies);
    countryDiv.append(countryCallingCode);
    countryDiv.addClass('main-info');

    container.append(countryFlagDiv);
    container.append(countryDiv);
}

function jqueryParseData(response, status) {
    console.log(response);
    console.log(status);
    renderData(response);
}

function jqueryAjaxError(response, status) {
    console.log(response);
    console.log(status);
    console.log('error');
}

function jqueryLoadCountry() {
    $.ajax({
        url: countryLink,
        method: 'GET',
        success: jqueryParseData,
        error: jqueryAjaxError
    });
}


$(document).ready(function() {
    jqueryLoadCountry();
});