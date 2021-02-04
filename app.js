fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Bangladesh", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "f4f0a1e37fmsh26955d87fe72dd1p1f4b75jsnd3dbfff51dd6",
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com"
    }
})
    .then(res => res.json())
    .then(info => {
        console.log(info.data);
        document.getElementById('confirmed').innerHTML = `${ info.data.confirmed }`;
        document.getElementById('death').innerHTML = `${ info.data.deaths }`;
        document.getElementById('recovered').innerHTML = info.data.recovered;
        document.getElementById('lastChecked').innerHTML = (info.data.lastChecked).split("T")[0];
    })