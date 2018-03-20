var WorldMapcontainer = new Datamap({
    element: document.getElementById("WorldMapcontainer"),
    projection: 'mercator',
    geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true,
        borderColor: '#444',
        borderWidth: 0.5,
        // popupTemplate: function (geography, data) {
        //     return '<div class="maphoverinfo">' + geography.properties.name +
        //         'Nr. of Nodes:' + data.fillKey + ' '
        // },

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


var colors = d3.scale.linear().domain([0, 600, 2000]).range(['#ffffff', '#336699', '#334455']);


var val_from_slider = function (currency, country, trx_data, epoch_mul) {

    console.log(epoch_mul);
    var epoch = String(parseFloat(document.getElementById("slider").value) + 86400 * epoch_mul); //gets the oninput value
    document.getElementById('output').innerHTML = new Date(parseInt(epoch) * 1000).toISOString().slice(0, 10); //displays this value to the html page
    var cumVal = trx_data[epoch][country];
    console.log(cumVal, country);

    return cumVal;


};


d3.json("/data/bitcnew.json", function (trx_data) {
    var epoch_mul = 0;

    window.setInterval(function () {
        if (epoch_mul == 59) {
            // window.clearInterval();
        } else {
            epoch_mul++;
            WorldMapcontainer.updateChoropleth({
                ALA: colors(val_from_slider('BTC', 'ALA', trx_data, epoch_mul), 'ALA'),
                ARE: colors(val_from_slider('BTC', 'ARE', trx_data, epoch_mul), 'ARE'),
                ARG: colors(val_from_slider('BTC', 'ARG', trx_data, epoch_mul), 'ARG'),
                ARM: colors(val_from_slider('BTC', 'ARM', trx_data, epoch_mul), 'ARM'),
                AUS: colors(val_from_slider('BTC', 'AUS', trx_data, epoch_mul), 'AUS'),
                AUT: colors(val_from_slider('BTC', 'AUT', trx_data, epoch_mul), 'AUT'),
                BEL: colors(val_from_slider('BTC', 'BEL', trx_data, epoch_mul), 'BEL'),
                BGR: colors(val_from_slider('BTC', 'BGR', trx_data, epoch_mul), 'BGR'),
                BIH: colors(val_from_slider('BTC', 'BIH', trx_data, epoch_mul), 'BIH'),
                BLR: colors(val_from_slider('BTC', 'BLR', trx_data, epoch_mul), 'BLR'),
                BMU: colors(val_from_slider('BTC', 'BMU', trx_data, epoch_mul), 'BMU'),
                BRA: colors(val_from_slider('BTC', 'BRA', trx_data, epoch_mul), 'BRA'),
                CAN: colors(val_from_slider('BTC', 'CAN', trx_data, epoch_mul), 'CAN'),
                CHE: colors(val_from_slider('BTC', 'CHE', trx_data, epoch_mul), 'CHE'),
                CHL: colors(val_from_slider('BTC', 'CHL', trx_data, epoch_mul), 'CHL'),
                CHN: colors(val_from_slider('BTC', 'CHN', trx_data, epoch_mul), 'CHN'),
                COL: colors(val_from_slider('BTC', 'COL', trx_data, epoch_mul), 'COL'),
                CRI: colors(val_from_slider('BTC', 'CRI', trx_data, epoch_mul), 'CRI'),
                CUW: colors(val_from_slider('BTC', 'CUW', trx_data, epoch_mul), 'CUW'),
                CYP: colors(val_from_slider('BTC', 'CYP', trx_data, epoch_mul), 'CYP'),
                CZE: colors(val_from_slider('BTC', 'CZE', trx_data, epoch_mul), 'CZE'),
                DEU: colors(val_from_slider('BTC', 'DEU', trx_data, epoch_mul), 'DEU'),
                DNK: colors(val_from_slider('BTC', 'DNK', trx_data, epoch_mul), 'DNK'),
                DOM: colors(val_from_slider('BTC', 'DOM', trx_data, epoch_mul), 'DOM'),
                EGY: colors(val_from_slider('BTC', 'EGY', trx_data, epoch_mul), 'EGY'),
                ESP: colors(val_from_slider('BTC', 'ESP', trx_data, epoch_mul), 'ESP'),
                EST: colors(val_from_slider('BTC', 'EST', trx_data, epoch_mul), 'EST'),
                FIN: colors(val_from_slider('BTC', 'FIN', trx_data, epoch_mul), 'FIN'),
                FRA: colors(val_from_slider('BTC', 'FRA', trx_data, epoch_mul), 'FRA'),
                FRO: colors(val_from_slider('BTC', 'FRO', trx_data, epoch_mul), 'FRO'),
                GBR: colors(val_from_slider('BTC', 'GBR', trx_data, epoch_mul), 'GBR'),
                GEO: colors(val_from_slider('BTC', 'GEO', trx_data, epoch_mul), 'GEO'),
                GLP: colors(val_from_slider('BTC', 'GLP', trx_data, epoch_mul), 'GLP'),
                GRC: colors(val_from_slider('BTC', 'GRC', trx_data, epoch_mul), 'GRC'),
                HKG: colors(val_from_slider('BTC', 'HKG', trx_data, epoch_mul), 'HKG'),
                HND: colors(val_from_slider('BTC', 'HND', trx_data, epoch_mul), 'HND'),
                HRV: colors(val_from_slider('BTC', 'HRV', trx_data, epoch_mul), 'HRV'),
                HUN: colors(val_from_slider('BTC', 'HUN', trx_data, epoch_mul), 'HUN'),
                IDN: colors(val_from_slider('BTC', 'IDN', trx_data, epoch_mul), 'IDN'),
                IMN: colors(val_from_slider('BTC', 'IMN', trx_data, epoch_mul), 'IMN'),
                IND: colors(val_from_slider('BTC', 'IND', trx_data, epoch_mul), 'IND'),
                IRL: colors(val_from_slider('BTC', 'IRL', trx_data, epoch_mul), 'IRL'),
                IRN: colors(val_from_slider('BTC', 'IRN', trx_data, epoch_mul), 'IRN'),
                ISL: colors(val_from_slider('BTC', 'ISL', trx_data, epoch_mul), 'ISL'),
                ISR: colors(val_from_slider('BTC', 'ISR', trx_data, epoch_mul), 'ISR'),
                ITA: colors(val_from_slider('BTC', 'ITA', trx_data, epoch_mul), 'ITA'),
                JPN: colors(val_from_slider('BTC', 'JPN', trx_data, epoch_mul), 'JPN'),
                KAZ: colors(val_from_slider('BTC', 'KAZ', trx_data, epoch_mul), 'KAZ'),
                KGZ: colors(val_from_slider('BTC', 'KGZ', trx_data, epoch_mul), 'KGZ'),
                KHM: colors(val_from_slider('BTC', 'KHM', trx_data, epoch_mul), 'KHM'),
                KOR: colors(val_from_slider('BTC', 'KOR', trx_data, epoch_mul), 'KOR'),
                LAO: colors(val_from_slider('BTC', 'LAO', trx_data, epoch_mul), 'LAO'),
                LTU: colors(val_from_slider('BTC', 'LTU', trx_data, epoch_mul), 'LTU'),
                LUX: colors(val_from_slider('BTC', 'LUX', trx_data, epoch_mul), 'LUX'),
                LVA: colors(val_from_slider('BTC', 'LVA', trx_data, epoch_mul), 'LVA'),
                MAC: colors(val_from_slider('BTC', 'MAC', trx_data, epoch_mul), 'MAC'),
                MCO: colors(val_from_slider('BTC', 'MCO', trx_data, epoch_mul), 'MCO'),
                MDA: colors(val_from_slider('BTC', 'MDA', trx_data, epoch_mul), 'MDA'),
                MEX: colors(val_from_slider('BTC', 'MEX', trx_data, epoch_mul), 'MEX'),
                MKD: colors(val_from_slider('BTC', 'MKD', trx_data, epoch_mul), 'MKD'),
                MLT: colors(val_from_slider('BTC', 'MLT', trx_data, epoch_mul), 'MLT'),
                MNG: colors(val_from_slider('BTC', 'MNG', trx_data, epoch_mul), 'MNG'),
                MYS: colors(val_from_slider('BTC', 'MYS', trx_data, epoch_mul), 'MYS'),
                NAM: colors(val_from_slider('BTC', 'NAM', trx_data, epoch_mul), 'NAM'),
                NGA: colors(val_from_slider('BTC', 'NGA', trx_data, epoch_mul), 'NGA'),
                NLD: colors(val_from_slider('BTC', 'NLD', trx_data, epoch_mul), 'NLD'),
                NOR: colors(val_from_slider('BTC', 'NOR', trx_data, epoch_mul), 'NOR'),
                NZL: colors(val_from_slider('BTC', 'NZL', trx_data, epoch_mul), 'NZL'),
                PAN: colors(val_from_slider('BTC', 'PAN', trx_data, epoch_mul), 'PAN'),
                PER: colors(val_from_slider('BTC', 'PER', trx_data, epoch_mul), 'PER'),
                PHL: colors(val_from_slider('BTC', 'PHL', trx_data, epoch_mul), 'PHL'),
                POL: colors(val_from_slider('BTC', 'POL', trx_data, epoch_mul), 'POL'),
                PRI: colors(val_from_slider('BTC', 'PRI', trx_data, epoch_mul), 'PRI'),
                PRT: colors(val_from_slider('BTC', 'PRT', trx_data, epoch_mul), 'PRT'),
                QAT: colors(val_from_slider('BTC', 'QAT', trx_data, epoch_mul), 'QAT'),
                REU: colors(val_from_slider('BTC', 'REU', trx_data, epoch_mul), 'REU'),
                ROU: colors(val_from_slider('BTC', 'ROU', trx_data, epoch_mul), 'ROU'),
                RUS: colors(val_from_slider('BTC', 'RUS', trx_data, epoch_mul), 'RUS'),
                SGP: colors(val_from_slider('BTC', 'SGP', trx_data, epoch_mul), 'SGP'),
                SMR: colors(val_from_slider('BTC', 'SMR', trx_data, epoch_mul), 'SMR'),
                SRB: colors(val_from_slider('BTC', 'SRB', trx_data, epoch_mul), 'SRB'),
                SVK: colors(val_from_slider('BTC', 'SVK', trx_data, epoch_mul), 'SVK'),
                SVN: colors(val_from_slider('BTC', 'SVN', trx_data, epoch_mul), 'SVN'),
                SWE: colors(val_from_slider('BTC', 'SWE', trx_data, epoch_mul), 'SWE'),
                SYC: colors(val_from_slider('BTC', 'SYC', trx_data, epoch_mul), 'SYC'),
                THA: colors(val_from_slider('BTC', 'THA', trx_data, epoch_mul), 'THA'),
                TUR: colors(val_from_slider('BTC', 'TUR', trx_data, epoch_mul), 'TUR'),
                TWN: colors(val_from_slider('BTC', 'TWN', trx_data, epoch_mul), 'TWN'),
                UKR: colors(val_from_slider('BTC', 'UKR', trx_data, epoch_mul), 'UKR'),
                URY: colors(val_from_slider('BTC', 'URY', trx_data, epoch_mul), 'URY'),
                USA: colors(val_from_slider('BTC', 'USA', trx_data, epoch_mul), 'USA'),
                VEN: colors(val_from_slider('BTC', 'VEN', trx_data, epoch_mul), 'VEN'),
                VNM: colors(val_from_slider('BTC', 'VNM', trx_data, epoch_mul), 'VNM'),
                ZAF: colors(val_from_slider('BTC', 'ZAF', trx_data, epoch_mul), 'ZAF'),

            })
        }
    }, 500);

});