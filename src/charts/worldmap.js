var WorldMapcontainer = new Datamap({
    element: document.getElementById("WorldMapcontainer"),
    projection: 'mercator',
    geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true,
        borderColor: '#aaa',
        borderWidth: 0.5,

    },
    fills: {
        defaultFill: "#336699",
        authorHasTraveledTo: "#b3cce6"
    },
    data: {
        USA: {fillKey: "MktCap"},
        JPN: {fillKey: "MktCap"},
        ITA: {fillKey: "MktCap"},
        CRI: {fillKey: "MktCap"},
        KOR: {fillKey: "MktCap"},
        DEU: {fillKey: "MktCap"},
    }
});

var colors = d3.scale.linear().domain([0, 159724601, 289724601]).range(['#ffffff', '#336699', '#112233']);

//async data file loading
// queue()
//     .defer(d3.json, "http://localhost:63343/Cryptoanalytics/data/bitcoin_trx_nr.json")
//     .await(ready);
//
// var country, mapFeatures, boundaries, crpyto;
//
// function ready(error, trx) {
//     console.log(val_from_slider());
//     var cumVal = trx[val_from_slider()]["cum"];
//     console.log(cumVal);
//     return cumVal;
// };


d3.json("/data/bitcoin_trx_nr.json", function (trx_data) {
    window.setInterval(function () {
        WorldMapcontainer.updateChoropleth({
            USA: colors(val_from_slider(), 'BTC', 'USA'),
            // RUS: colors(ready(), 'BTC', 'RUS'),
            // AUS: colors(ready(), 'BTC', 'AUS'),
            // BRA: colors(ready(), 'BTC', 'BRA'),
            // CAN: colors(ready(), 'BTC', 'CAN'),
            // ZAF: colors(ready(), 'BTC', 'ZAF'),

        });
    }, 500);

    var epoch_mul = 0;

    function val_from_slider() {
        if (epoch_mul == 15) {
            window.clearInterval();
        } else {
            epoch_mul++;
            console.log(epoch_mul);
            var epoch = String(parseFloat(document.getElementById("slider").value) + 8640000000 * epoch_mul); //gets the oninput value
            console.log(epoch);
            document.getElementById('output').innerHTML = epoch; //displays this value to the html page
            var cumVal = trx_data[epoch]["cum"];
            console.log(cumVal);
            setTimeout(1000);
        }

        return cumVal;

    }
});