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
var color = d3version4.scaleOrdinal(d3version4.schemeCategory20);

// set bubble parameters
var bubble = d3version4.pack(dataset)
    .size([diameter - 100, diameter]) // should be equal to svg w and h
    .padding(3);

// set svg parameters
var svg = d3version4.select('#bubblechart')
    .append("svg")
    .attr("width", diameter - 100)
    .attr("height", diameter)
    .attr("class", "bubble");

// set nodes size correlated with dataset.cap
var nodes = d3version4.hierarchy(dataset)
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

 d3version4.select(self.frameElement)
    .style("height", diameter + "px");

// add slider
var margin = {top:50, right:50, bottom:0, left:50},
    width = 500 - margin.left - margin.right;
    height = diameter;

var formatDate = d3version4.timeFormat("%d");

var startDate = new Date("2017-03-09"),
    endDate = new Date("2017-03-27");

var x = d3version4.scaleTime()
            .domain([startDate, endDate])
            .range([0, width])
            .clamp(true);

var slider = svg.append("g")
                .attr("class", "slider")
                .attr("transform", "translate(" + margin.left + "," + height/5 + ")");

slider.append("line")
        .attr("class", "track")
        .attr("x1", x.range()[0])
        .attr("x2", x.range()[1])
          .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
        .attr("class", "track-inset")
          .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
        .attr("class", "track-overlay")
        .call(d3version4.drag()
        .on("start.interrupt", function() { slider.interrupt(); })
        .on("start drag", function() {currentValue = d3version4.event.x;
                              update(x.invert(currentValue)); 
                    })
                    );

slider.insert("g", ".track-overlay")
        .attr("class", "ticks")
        .attr("transform", "translate(0," + 18 + ")")
          .selectAll("text")
        .data(x.ticks(10))
        .enter()
        .append("text")
        .attr("x", x)
        .attr("y", height-150)
        .attr("text-anchor", "middle")
        .text(function(d) { return formatDate(d); });

var label = slider.append("text")  
                .attr("class", "label")
                .attr("text-anchor", "middle")
                .text(formatDate(startDate))
                .attr("transform", "translate(0," + (-25) + ")")
                
var handle = slider.insert("circle", ".track-overlay")
                    .attr("class", "handle")
                    .attr("r", 9);