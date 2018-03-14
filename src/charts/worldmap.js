var WorldMapcontainer = new Datamap({
    element: document.getElementById("WorldMapcontainer"),
    projection: 'mercator',
    geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true,
        borderColor: '#444',
        borderWidth: 0.5,

    },
    fills: {
        defaultFill: "#ccc",
        authorHasTraveledTo: "#336699"
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


var colors = d3.scale.linear().domain([0, 200, 1000]).range(['#ffffff', '#336699', '#112233']);

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


var epoch_mul = 0;

var val_from_slider = function (currency, country, trx_data) {
    if (epoch_mul == 15) {
        window.clearInterval();
    } else {
        epoch_mul++;
        console.log(epoch_mul);
        var epoch = String(parseFloat(document.getElementById("slider").value) + 86400 * epoch_mul); //gets the oninput value
        document.getElementById('output').innerHTML = new Date(parseInt(epoch) * 1000); //displays this value to the html page
        console.log(trx_data, epoch);
        var cumVal = trx_data[epoch][country];
        console.log(cumVal, country);

    }

    return cumVal;
};


d3.json("/Cryptoanalytics/data/bitcnew.json", function (trx_data) {
    window.setInterval(function () {

        WorldMapcontainer.updateChoropleth({
            ALA: colors(val_from_slider('BTC', 'ALA', trx_data), 'ALA'),
            ARE: colors(val_from_slider('BTC', 'ARE', trx_data), 'ARE'),
            ARG: colors(val_from_slider('BTC', 'ARG', trx_data), 'ARG'),
            ARM: colors(val_from_slider('BTC', 'ARM', trx_data), 'ARM'),
            AUS: colors(val_from_slider('BTC', 'AUS', trx_data), 'AUS'),
            AUT: colors(val_from_slider('BTC', 'AUT', trx_data), 'AUT'),
            BEL: colors(val_from_slider('BTC', 'BEL', trx_data), 'BEL'),
            BGR: colors(val_from_slider('BTC', 'BGR', trx_data), 'BGR'),
            BIH: colors(val_from_slider('BTC', 'BIH', trx_data), 'BIH'),
            BLR: colors(val_from_slider('BTC', 'BLR', trx_data), 'BLR'),
            BMU: colors(val_from_slider('BTC', 'BMU', trx_data), 'BMU'),
            BRA: colors(val_from_slider('BTC', 'BRA', trx_data), 'BRA'),
            CAN: colors(val_from_slider('BTC', 'CAN', trx_data), 'CAN'),
            CHE: colors(val_from_slider('BTC', 'CHE', trx_data), 'CHE'),
            CHL: colors(val_from_slider('BTC', 'CHL', trx_data), 'CHL'),
            CHN: colors(val_from_slider('BTC', 'CHN', trx_data), 'CHN'),
            COL: colors(val_from_slider('BTC', 'COL', trx_data), 'COL'),
            CRI: colors(val_from_slider('BTC', 'CRI', trx_data), 'CRI'),
            CUW: colors(val_from_slider('BTC', 'CUW', trx_data), 'CUW'),
            CYP: colors(val_from_slider('BTC', 'CYP', trx_data), 'CYP'),
            CZE: colors(val_from_slider('BTC', 'CZE', trx_data), 'CZE'),
            DEU: colors(val_from_slider('BTC', 'DEU', trx_data), 'DEU'),
            DNK: colors(val_from_slider('BTC', 'DNK', trx_data), 'DNK'),
            DOM: colors(val_from_slider('BTC', 'DOM', trx_data), 'DOM'),
            EGY: colors(val_from_slider('BTC', 'EGY', trx_data), 'EGY'),
            ESP: colors(val_from_slider('BTC', 'ESP', trx_data), 'ESP'),
            EST: colors(val_from_slider('BTC', 'EST', trx_data), 'EST'),
            FIN: colors(val_from_slider('BTC', 'FIN', trx_data), 'FIN'),
            FRA: colors(val_from_slider('BTC', 'FRA', trx_data), 'FRA'),
            FRO: colors(val_from_slider('BTC', 'FRO', trx_data), 'FRO'),
            GBR: colors(val_from_slider('BTC', 'GBR', trx_data), 'GBR'),
            GEO: colors(val_from_slider('BTC', 'GEO', trx_data), 'GEO'),
            GLP: colors(val_from_slider('BTC', 'GLP', trx_data), 'GLP'),
            GRC: colors(val_from_slider('BTC', 'GRC', trx_data), 'GRC'),
            HKG: colors(val_from_slider('BTC', 'HKG', trx_data), 'HKG'),
            HND: colors(val_from_slider('BTC', 'HND', trx_data), 'HND'),
            HRV: colors(val_from_slider('BTC', 'HRV', trx_data), 'HRV'),
            HUN: colors(val_from_slider('BTC', 'HUN', trx_data), 'HUN'),
            IDN: colors(val_from_slider('BTC', 'IDN', trx_data), 'IDN'),
            IMN: colors(val_from_slider('BTC', 'IMN', trx_data), 'IMN'),
            IND: colors(val_from_slider('BTC', 'IND', trx_data), 'IND'),
            IRL: colors(val_from_slider('BTC', 'IRL', trx_data), 'IRL'),
            IRN: colors(val_from_slider('BTC', 'IRN', trx_data), 'IRN'),
            ISL: colors(val_from_slider('BTC', 'ISL', trx_data), 'ISL'),
            ISR: colors(val_from_slider('BTC', 'ISR', trx_data), 'ISR'),
            ITA: colors(val_from_slider('BTC', 'ITA', trx_data), 'ITA'),
            JPN: colors(val_from_slider('BTC', 'JPN', trx_data), 'JPN'),
            KAZ: colors(val_from_slider('BTC', 'KAZ', trx_data), 'KAZ'),
            KGZ: colors(val_from_slider('BTC', 'KGZ', trx_data), 'KGZ'),
            KHM: colors(val_from_slider('BTC', 'KHM', trx_data), 'KHM'),
            KOR: colors(val_from_slider('BTC', 'KOR', trx_data), 'KOR'),
            LAO: colors(val_from_slider('BTC', 'LAO', trx_data), 'LAO'),
            LTU: colors(val_from_slider('BTC', 'LTU', trx_data), 'LTU'),
            LUX: colors(val_from_slider('BTC', 'LUX', trx_data), 'LUX'),
            LVA: colors(val_from_slider('BTC', 'LVA', trx_data), 'LVA'),
            MAC: colors(val_from_slider('BTC', 'MAC', trx_data), 'MAC'),
            MCO: colors(val_from_slider('BTC', 'MCO', trx_data), 'MCO'),
            MDA: colors(val_from_slider('BTC', 'MDA', trx_data), 'MDA'),
            MEX: colors(val_from_slider('BTC', 'MEX', trx_data), 'MEX'),
            MKD: colors(val_from_slider('BTC', 'MKD', trx_data), 'MKD'),
            MLT: colors(val_from_slider('BTC', 'MLT', trx_data), 'MLT'),
            MNG: colors(val_from_slider('BTC', 'MNG', trx_data), 'MNG'),
            MYS: colors(val_from_slider('BTC', 'MYS', trx_data), 'MYS'),
            NAM: colors(val_from_slider('BTC', 'NAM', trx_data), 'NAM'),
            NGA: colors(val_from_slider('BTC', 'NGA', trx_data), 'NGA'),
            NLD: colors(val_from_slider('BTC', 'NLD', trx_data), 'NLD'),
            NOR: colors(val_from_slider('BTC', 'NOR', trx_data), 'NOR'),
            NZL: colors(val_from_slider('BTC', 'NZL', trx_data), 'NZL'),
            PAN: colors(val_from_slider('BTC', 'PAN', trx_data), 'PAN'),
            PER: colors(val_from_slider('BTC', 'PER', trx_data), 'PER'),
            PHL: colors(val_from_slider('BTC', 'PHL', trx_data), 'PHL'),
            POL: colors(val_from_slider('BTC', 'POL', trx_data), 'POL'),
            PRI: colors(val_from_slider('BTC', 'PRI', trx_data), 'PRI'),
            PRT: colors(val_from_slider('BTC', 'PRT', trx_data), 'PRT'),
            QAT: colors(val_from_slider('BTC', 'QAT', trx_data), 'QAT'),
            REU: colors(val_from_slider('BTC', 'REU', trx_data), 'REU'),
            ROU: colors(val_from_slider('BTC', 'ROU', trx_data), 'ROU'),
            RUS: colors(val_from_slider('BTC', 'RUS', trx_data), 'RUS'),
            SGP: colors(val_from_slider('BTC', 'SGP', trx_data), 'SGP'),
            SMR: colors(val_from_slider('BTC', 'SMR', trx_data), 'SMR'),
            SRB: colors(val_from_slider('BTC', 'SRB', trx_data), 'SRB'),
            SVK: colors(val_from_slider('BTC', 'SVK', trx_data), 'SVK'),
            SVN: colors(val_from_slider('BTC', 'SVN', trx_data), 'SVN'),
            SWE: colors(val_from_slider('BTC', 'SWE', trx_data), 'SWE'),
            SYC: colors(val_from_slider('BTC', 'SYC', trx_data), 'SYC'),
            THA: colors(val_from_slider('BTC', 'THA', trx_data), 'THA'),
            TUR: colors(val_from_slider('BTC', 'TUR', trx_data), 'TUR'),
            TWN: colors(val_from_slider('BTC', 'TWN', trx_data), 'TWN'),
            UKR: colors(val_from_slider('BTC', 'UKR', trx_data), 'UKR'),
            URY: colors(val_from_slider('BTC', 'URY', trx_data), 'URY'),
            USA: colors(val_from_slider('BTC', 'USA', trx_data), 'USA'),
            VEN: colors(val_from_slider('BTC', 'VEN', trx_data), 'VEN'),
            VNM: colors(val_from_slider('BTC', 'VNM', trx_data), 'VNM'),
            ZAF: colors(val_from_slider('BTC', 'ZAF', trx_data), 'ZAF'),

        })

    }, 1000);

});