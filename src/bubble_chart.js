

        dataset = {
            "date": "2018-03-08",
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
        // set color scheme and bubble chart size
        var diameter = 600;
        var color = d3.scaleOrdinal(d3.schemeCategory20);

        // set bubble parameters
        var bubble = d3.pack(dataset)
            .size([diameter - 100, diameter]) // should be equal to svg w and h
            .padding(3);

        // set svg parameters
        var svg = d3.select("body")
            .append("svg")
            .attr("width", diameter - 100)
            .attr("height", diameter)
            .attr("class", "bubble");

        // set nodes size correlated with dataset.cap
        var nodes = d3.hierarchy(dataset)
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

        // append market cap data as text, optional
        //node.append("text")
         //   .attr("dy", "1.3em")
         //   .style("text-anchor", "middle")
         //   .text(function(d) {
         //       return d.data.MarketCap;
         //   })
         //   .attr("font-family",  "Gill Sans", "Gill Sans MT")
         //   .attr("font-size", function(d){
         //       return d.r/6;
         //   })
         //   .attr("fill", "white");

        d3.select(self.frameElement)
            .style("height", diameter + "px");

        // add slider