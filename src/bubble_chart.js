

        dataset1 = {
            "country": "world",
            "children": [{"Currency":"Bitcoin","value":168241000000,"Number":"168.2 Billion", "Icon": "Bitcoin.png"},
                {"Currency":"Cardano","value":4699903785,"Number":"4.7 Billion", "Icon": "Cardano.png"},
                {"Currency":"Monero","value":3367267341,"Number":"3.3 Billion", "Icon": "Monero.svg"},
                {"Currency":"BitcoinCash","value":15698773065,"Number":"15.7 Billion","Icon": "BitcoinCash.svg"},
                {"Currency":"Ethereum","value":73788400000,"Number":"73.8 Billion", "Icon": "Ethereum.png"},
                {"Currency":"TRON","value":1946731656,"Number":"2.0 Billion", "Icon": "TRON.SVG"},
                {"Currency":"NEM","value":3150684000,"Number":"3.1 Billion", "Icon": "NEM.png"},
                {"Currency":"Ripple","value":34108000000,"Number":"34.1 Billion", "Icon": "Ripple.png"},
                {"Currency":"Litecoin","value":10311600000,"Number":"10.3 Billion", "Icon": "Litecoin.svg"},
                {"Currency":"NEO","value":6534770000,"Number":"6.5 Billion", "Icon": "NEO.svg"},
                {"Currency":"Stellar","value":6091740000,"Number":"6.1 Billion", "Icon": "Stellar.svg"},
                {"Currency":"IOTA","value":5342310000,"Number":"5.3 Billion", "Icon": "IOTA.png"},
                {"Currency":"EOS","value":4651410000,"Number":"4.7 Billion", "Icon": "EOS.png"},
                {"Currency":"Dash","value":4059470000,"Number":"4.1 Billion", "Icon": "Dash.png"}]
        };

        dataset2 = {
            "country": "usa",
            "children": [{"Currency":"Bitcoin","value":16824100000,"Number":"16.82 Billion", "Icon": "Bitcoin.png"},
                {"Currency":"Ethereum","value":7378840000,"Number":"7.4 Billion", "Icon": "Ethereum.png"},
                {"Currency":"Ripple","value":3410800000,"Number":"3.4 Billion", "Icon": "Ripple.png"},
                {"Currency":"Monero","value":336726734,"Number":"0.33 Billion", "Icon": "Monero.svg"},
                {"Currency":"Litecoin","value":1031160000,"Number":"1.1 Billion", "Icon": "Litecoin.svg"},
                {"Currency":"TRON","value":194673165,"Number":"0.15 Billion", "Icon": "TRON.SVG"},
                {"Currency":"NEM","value":315068400,"Number":"0.3 Billion", "Icon": "NEM.png"},
                {"Currency":"NEO","value":653477000,"Number":"0.65 Billion", "Icon": "NEO.svg"},
                {"Currency":"Stellar","value":609174000,"Number":"0.61 Billion", "Icon": "Stellar.svg"},
                {"Currency":"Monero","value":534231000,"Number":"0.53 Billion", "Icon": "Monero.svg"},
                {"Currency":"EOS","value":465141000,"Number":"0.46 Billion", "Icon": "EOS.png"},
                {"Currency":"Dash","value":405947000,"Number":"0.41 Billion", "Icon": "Dash.png"}]
        };

        dataset3 = {
            "country": "china",
            "children": [{"Currency":"Bitcoin","value":16424100000,"Number":"16.4 Billion", "Icon": "Bitcoin.png"},
                {"Currency":"Ethereum","value":7678840000,"Number":"7.67 Billion", "Icon": "Ethereum.png"},
                {"Currency":"Cardano","value":469990378,"Number":"0.48 Billion", "Icon": "Cardano.png"},
                {"Currency":"BitcoinCash","value":1569877306,"Number":"1.57 Billion", "Icon": "BitcoinCash.svg"},
                {"Currency":"Ripple","value":3110800000,"Number":"3.11 Billion", "Icon": "Ripple.png"},
                {"Currency":"Litecoin","value":1931160000,"Number":"1.93 Billion", "Icon": "Litecoin.svg"},
                {"Currency":"NEO","value":613477000,"Number":"0.61 Billion", "Icon": "NEO.svg"},
                {"Currency":"Stellar","value":709174000,"Number":"0.71 Billion", "Icon": "Stellar.svg"},
                {"Currency":"Monero","value":934231000,"Number":"0.93 Billion", "Icon": "Monero.svg"},
                {"Currency":"EOS","value":565141000,"Number":"0.56 Billion", "Icon": "EOS.png"},
                {"Currency":"Dash","value":485947000,"Number":"0.486 Billion", "Icon": "Dash.png"}]
        };


        // set color scheme and bubble chart size
        var diameter = 500;
        var width = 400;
        var height = 480;
        var color = d3.scaleOrdinal(d3.schemeCategory20);

        // set bubble parameters
        var bubble = d3.pack(dataset1)
            .size([width, height]) // should be equal to svg w and h
            .padding(3);

        var tooltip = d3.select("body")
                        .append("div")
                        .style("position", "absolute")
                        .style("z-index", "10")
                        .style("visibility", "hidden")
                        .style("color", "white")
                        .style("padding", "8px")
                        .style("background-color", "rgba(0, 0, 0, 0.75)")
                        .style("border-radius", "6px")
                        .style("font", "12px sans-serif")
                        .text("tooltip");

        // set svg parameters
        var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "bubble");

        var defs = svg.append("defs"); 

        // set nodes size correlated with dataset.cap
        var nodes = d3.hierarchy(dataset1)
            .sum(function(d) { return d.value; });

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
        // append fill patterns to each node, assign ID according to the node currency name.
        defs.selectAll(".currency-pattern")
            .data(bubble(nodes).descendants())
            .enter().append("pattern")
            .attr("class", "currency-pattern")
            .attr("id", function(d){
                return d.data.Currency;
            })
            .attr("height","100%")
            .attr("width","100%")
            .attr("patternUnits", "objectBoundingBox")
            .append("image")
              .attr("height", function(d) { return d.r * 2; })
              .attr("width", function(d) { return d.r * 2; })
              .attr("xlink:href", function(d){
                 return d.data.Icon;
              });
        // add the circle to each node.
        node.append("circle")
            .attr("r", function(d) { return d.r; })
            .attr("fill", function(d) { return "url(#" + d.data.Currency + ")"; })
            .on("click", function(d) {
                var name = d.data.Currency;
                return name; }) // pass a variable and its value to line chart.
            .on("mouseover", function(d) {
              tooltip.text(d.data.Currency + ": " + d.data.Number);
              tooltip.style("visibility", "visible");
            })
            .on("mousemove", function() { 
              return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
            })
            .on("mouseout", function(){return tooltip.style("visibility", "hidden");
            });
        // add text to each node, optional, conflict with image.
        //node.append("text")
            //.attr("dy", ".2em")
            //.style("text-anchor", "middle")
            //.text(function(d) {
                //return d.data.Currency.substring(0, d.r / 3);
            //})
            //.attr("font-family", "sans-serif")
            //.attr("font-size", function(d){
                //return d.r/5;
            //})
            //.attr("fill", "white");

        d3.select(self.frameElement)
            .style("height", diameter + "px");

        // When the user click map, the bubble updates according to the country clicked.

        // TBD