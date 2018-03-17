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


var colors = d3.scale.linear().domain([0, 200, 20000]).range(['#ffffff', '#336699', '#112233']);

var epoch_mul = 0;

var val_from_slider = function (currency, country, trx_data) {
    setTimeout(function() {
        if (epoch_mul == 59) {
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
    }, 1000)

};


d3.json("/Cryptoanalytics/data/bitcnew.json", function (trx_data) {
    window.setInterval(function () {

        WorldMapcontainer.updateChoropleth({
            ALA: colors(setTimeout(val_from_slider('BTC', 'ALA', trx_data), 'ALA'),500),
            ARE: colors(setTimeout(val_from_slider('BTC', 'ARE', trx_data), 'ARE'),500),
            ARG: colors(setTimeout(val_from_slider('BTC', 'ARG', trx_data), 'ARG'),500),
            ARM: colors(setTimeout(val_from_slider('BTC', 'ARM', trx_data), 'ARM'),500),
            AUS: colors(setTimeout(val_from_slider('BTC', 'AUS', trx_data), 'AUS'),500),
            AUT: colors(setTimeout(val_from_slider('BTC', 'AUT', trx_data), 'AUT'),500),
            BEL: colors(setTimeout(val_from_slider('BTC', 'BEL', trx_data), 'BEL'),500),
            BGR: colors(setTimeout(val_from_slider('BTC', 'BGR', trx_data), 'BGR'),500),
            BIH: colors(setTimeout(val_from_slider('BTC', 'BIH', trx_data), 'BIH'),500),
            BLR: colors(setTimeout(val_from_slider('BTC', 'BLR', trx_data), 'BLR'),500),
            BMU: colors(setTimeout(val_from_slider('BTC', 'BMU', trx_data), 'BMU'),500),
            BRA: colors(setTimeout(val_from_slider('BTC', 'BRA', trx_data), 'BRA'),500),
            CAN: colors(setTimeout(val_from_slider('BTC', 'CAN', trx_data), 'CAN'),500),
            CHE: colors(setTimeout(val_from_slider('BTC', 'CHE', trx_data), 'CHE'),500),
            CHL: colors(setTimeout(val_from_slider('BTC', 'CHL', trx_data), 'CHL'),500),
            CHN: colors(setTimeout(val_from_slider('BTC', 'CHN', trx_data), 'CHN'),500),
            COL: colors(setTimeout(val_from_slider('BTC', 'COL', trx_data), 'COL'),500),
            CRI: colors(setTimeout(val_from_slider('BTC', 'CRI', trx_data), 'CRI'),500),
            CUW: colors(setTimeout(val_from_slider('BTC', 'CUW', trx_data), 'CUW'),500),
            CYP: colors(setTimeout(val_from_slider('BTC', 'CYP', trx_data), 'CYP'),500),
            CZE: colors(setTimeout(val_from_slider('BTC', 'CZE', trx_data), 'CZE'),500),
            DEU: colors(setTimeout(val_from_slider('BTC', 'DEU', trx_data), 'DEU'),500),
            DNK: colors(setTimeout(val_from_slider('BTC', 'DNK', trx_data), 'DNK'),500),
            DOM: colors(setTimeout(val_from_slider('BTC', 'DOM', trx_data), 'DOM'),500),
            EGY: colors(setTimeout(val_from_slider('BTC', 'EGY', trx_data), 'EGY'),500),
            ESP: colors(setTimeout(val_from_slider('BTC', 'ESP', trx_data), 'ESP'),500),
            EST: colors(setTimeout(val_from_slider('BTC', 'EST', trx_data), 'EST'),500),
            FIN: colors(setTimeout(val_from_slider('BTC', 'FIN', trx_data), 'FIN'),500),
            FRA: colors(setTimeout(val_from_slider('BTC', 'FRA', trx_data), 'FRA'),500),
            FRO: colors(setTimeout(val_from_slider('BTC', 'FRO', trx_data), 'FRO'),500),
            GBR: colors(setTimeout(val_from_slider('BTC', 'GBR', trx_data), 'GBR'),500),
            GEO: colors(setTimeout(val_from_slider('BTC', 'GEO', trx_data), 'GEO'),500),
            GLP: colors(setTimeout(val_from_slider('BTC', 'GLP', trx_data), 'GLP'),500),
            GRC: colors(setTimeout(val_from_slider('BTC', 'GRC', trx_data), 'GRC'),500),
            HKG: colors(setTimeout(val_from_slider('BTC', 'HKG', trx_data), 'HKG'),500),
            HND: colors(setTimeout(val_from_slider('BTC', 'HND', trx_data), 'HND'),500),
            HRV: colors(setTimeout(val_from_slider('BTC', 'HRV', trx_data), 'HRV'),500),
            HUN: colors(setTimeout(val_from_slider('BTC', 'HUN', trx_data), 'HUN'),500),
            IDN: colors(setTimeout(val_from_slider('BTC', 'IDN', trx_data), 'IDN'),500),
            IMN: colors(setTimeout(val_from_slider('BTC', 'IMN', trx_data), 'IMN'),500),
            IND: colors(setTimeout(val_from_slider('BTC', 'IND', trx_data), 'IND'),500),
            IRL: colors(setTimeout(val_from_slider('BTC', 'IRL', trx_data), 'IRL'),500),
            IRN: colors(setTimeout(val_from_slider('BTC', 'IRN', trx_data), 'IRN'),500),
            ISL: colors(setTimeout(val_from_slider('BTC', 'ISL', trx_data), 'ISL'),500),
            ISR: colors(setTimeout(val_from_slider('BTC', 'ISR', trx_data), 'ISR'),500),
            ITA: colors(setTimeout(val_from_slider('BTC', 'ITA', trx_data), 'ITA'),500),
            JPN: colors(setTimeout(val_from_slider('BTC', 'JPN', trx_data), 'JPN'),500),
            KAZ: colors(setTimeout(val_from_slider('BTC', 'KAZ', trx_data), 'KAZ'),500),
            KGZ: colors(setTimeout(val_from_slider('BTC', 'KGZ', trx_data), 'KGZ'),500),
            KHM: colors(setTimeout(val_from_slider('BTC', 'KHM', trx_data), 'KHM'),500),
            KOR: colors(setTimeout(val_from_slider('BTC', 'KOR', trx_data), 'KOR'),500),
            LAO: colors(setTimeout(val_from_slider('BTC', 'LAO', trx_data), 'LAO'),500),
            LTU: colors(setTimeout(val_from_slider('BTC', 'LTU', trx_data), 'LTU'),500),
            LUX: colors(setTimeout(val_from_slider('BTC', 'LUX', trx_data), 'LUX'),500),
            LVA: colors(setTimeout(val_from_slider('BTC', 'LVA', trx_data), 'LVA'),500),
            MAC: colors(setTimeout(val_from_slider('BTC', 'MAC', trx_data), 'MAC'),500),
            MCO: colors(setTimeout(val_from_slider('BTC', 'MCO', trx_data), 'MCO'),500),
            MDA: colors(setTimeout(val_from_slider('BTC', 'MDA', trx_data), 'MDA'),500),
            MEX: colors(setTimeout(val_from_slider('BTC', 'MEX', trx_data), 'MEX'),500),
            MKD: colors(setTimeout(val_from_slider('BTC', 'MKD', trx_data), 'MKD'),500),
            MLT: colors(setTimeout(val_from_slider('BTC', 'MLT', trx_data), 'MLT'),500),
            MNG: colors(setTimeout(val_from_slider('BTC', 'MNG', trx_data), 'MNG'),500),
            MYS: colors(setTimeout(val_from_slider('BTC', 'MYS', trx_data), 'MYS'),500),
            NAM: colors(setTimeout(val_from_slider('BTC', 'NAM', trx_data), 'NAM'),500),
            NGA: colors(setTimeout(val_from_slider('BTC', 'NGA', trx_data), 'NGA'),500),
            NLD: colors(setTimeout(val_from_slider('BTC', 'NLD', trx_data), 'NLD'),500),
            NOR: colors(setTimeout(val_from_slider('BTC', 'NOR', trx_data), 'NOR'),500),
            NZL: colors(setTimeout(val_from_slider('BTC', 'NZL', trx_data), 'NZL'),500),
            PAN: colors(setTimeout(val_from_slider('BTC', 'PAN', trx_data), 'PAN'),500),
            PER: colors(setTimeout(val_from_slider('BTC', 'PER', trx_data), 'PER'),500),
            PHL: colors(setTimeout(val_from_slider('BTC', 'PHL', trx_data), 'PHL'),500),
            POL: colors(setTimeout(val_from_slider('BTC', 'POL', trx_data), 'POL'),500),
            PRI: colors(setTimeout(val_from_slider('BTC', 'PRI', trx_data), 'PRI'),500),
            PRT: colors(setTimeout(val_from_slider('BTC', 'PRT', trx_data), 'PRT'),500),
            QAT: colors(setTimeout(val_from_slider('BTC', 'QAT', trx_data), 'QAT'),500),
            REU: colors(setTimeout(val_from_slider('BTC', 'REU', trx_data), 'REU'),500),
            ROU: colors(setTimeout(val_from_slider('BTC', 'ROU', trx_data), 'ROU'),500),
            RUS: colors(setTimeout(val_from_slider('BTC', 'RUS', trx_data), 'RUS'),500),
            SGP: colors(setTimeout(val_from_slider('BTC', 'SGP', trx_data), 'SGP'),500),
            SMR: colors(setTimeout(val_from_slider('BTC', 'SMR', trx_data), 'SMR'),500),
            SRB: colors(setTimeout(val_from_slider('BTC', 'SRB', trx_data), 'SRB'),500),
            SVK: colors(setTimeout(val_from_slider('BTC', 'SVK', trx_data), 'SVK'),500),
            SVN: colors(setTimeout(val_from_slider('BTC', 'SVN', trx_data), 'SVN'),500),
            SWE: colors(setTimeout(val_from_slider('BTC', 'SWE', trx_data), 'SWE'),500),
            SYC: colors(setTimeout(val_from_slider('BTC', 'SYC', trx_data), 'SYC'),500),
            THA: colors(setTimeout(val_from_slider('BTC', 'THA', trx_data), 'THA'),500),
            TUR: colors(setTimeout(val_from_slider('BTC', 'TUR', trx_data), 'TUR'),500),
            TWN: colors(setTimeout(val_from_slider('BTC', 'TWN', trx_data), 'TWN'),500),
            UKR: colors(setTimeout(val_from_slider('BTC', 'UKR', trx_data), 'UKR'),500),
            URY: colors(setTimeout(val_from_slider('BTC', 'URY', trx_data), 'URY'),500),
            USA: colors(setTimeout(val_from_slider('BTC', 'USA', trx_data), 'USA'),500),
            // USA: colors(val_from_slider('BTC', 'USA', trx_data), 'USA'),
            VEN: colors(setTimeout(val_from_slider('BTC', 'VEN', trx_data), 'VEN'),1000),
            VNM: colors(setTimeout(val_from_slider('BTC', 'VNM', trx_data), 'VNM'),500),
            ZAF: colors(setTimeout(val_from_slider('BTC', 'ZAF', trx_data), 'ZAF'),500),

        })

    }, 2000);

});