

         dataset1 = {
            "country": "world",
            "children": [{"Currency":"Bitcoin","MarketCap":168241000000},
                {"Currency":"Ethereum","MarketCap":73788400000},
                {"Currency":"Ripple","MarketCap":34108000000},
                {"Currency":"Litecoin","MarketCap":10311600000},
                {"Currency":"NEO","MarketCap":6534770000},
                {"Currency":"Stellar","MarketCap":6091740000},
                {"Currency":"Monero","MarketCap":5342310000},
                {"Currency":"EOS","MarketCap":4651410000},
                {"Currency":"Dash","MarketCap":4059470000}]
        };

        dataset2 = {
            "country": "usa",
            "children": [{"Currency":"Bitcoin","MarketCap":16824100000},
                {"Currency":"Ethereum","MarketCap":7378840000},
                {"Currency":"Ripple","MarketCap":3410800000},
                {"Currency":"Litecoin","MarketCap":1031160000},
                {"Currency":"NEO","MarketCap":653477000},
                {"Currency":"Stellar","MarketCap":609174000},
                {"Currency":"Monero","MarketCap":534231000},
                {"Currency":"EOS","MarketCap":465141000},
                {"Currency":"Dash","MarketCap":405947000}]
        };

        dataset3 = {
            "country": "china",
            "children": [{"Currency":"Bitcoin","MarketCap":16424100000},
                {"Currency":"Ethereum","MarketCap":7678840000},
                {"Currency":"Ripple","MarketCap":3110800000},
                {"Currency":"Litecoin","MarketCap":1931160000},
                {"Currency":"NEO","MarketCap":613477000},
                {"Currency":"Stellar","MarketCap":709174000},
                {"Currency":"Monero","MarketCap":934231000},
                {"Currency":"EOS","MarketCap":565141000},
                {"Currency":"Dash","MarketCap":485947000}]
        };


        // set color scheme and bubble chart size
        var diameter = 600;
        var color = d3.scaleOrdinal(d3.schemeCategory20);

        // set bubble parameters
        var bubble = d3.pack(dataset1)
            .size([diameter - 100, diameter]) // should be equal to svg w and h
            .padding(3);

        // set svg parameters
        var svg = d3.select("body")
            .append("svg")
            .attr("width", diameter - 100)
            .attr("height", diameter)
            .attr("class", "bubble");

        // set nodes size correlated with dataset.cap
        var nodes = d3.hierarchy(dataset1)
            .sum(function(d) { return d.MarketCap; });

        // append node on svg, bind the data from children class
        var node = svg.selectAll(".node")
            .data(bubble(nodes).descendants())
            .enter()
            .filter(function(d){return  !d.children })
            .append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

        node.append("circle")
            .attr("r", function(d) {
                return d.r;
            })
            .style("fill", function(d,i) {
                return color(i);
            })
            .on("click", function(d) {
                
                var name = d.data.Currency;
                return name;

            });

        node.append("text")
            .attr("dy", ".2em")
            .style("text-anchor", "middle")
            .text(function(d) {
                return d.data.Currency.substring(0, d.r / 3);
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", function(d){
                return d.r/5;
            })
            .attr("fill", "white");

        d3.select(self.frameElement)
            .style("height", diameter + "px");

        // When the user click map, the bubble updates according to the country clicked.

        var buttons = d3.select("body")
                        .append("div")
                        .attr("clasee", "countries-button")
                        .selectAll("div")
                        .data(dataset1.country)
                        .enter()
                        .append("button")
                        .text(function(d){
                            return d;
                        });

            buttons.on("click", function(d){
                    d3.select(node)
                        .transition()
                        .duration(500)
                        .style("background", "lightBlue");

                    update(d);


            })