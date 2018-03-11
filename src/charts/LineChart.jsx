/* Chart consists of the following components: 
1. a grid, 2. two axis, 3. one path, 4. dot components, 5. ToolTips*/


/*Axis components*/
var Axis=React.createClass({
    propTypes: {
        h:React.PropTypes.number,
        axis:React.PropTypes.func,
        axisType:React.PropTypes.oneOf(['x','y'])

    },

    componentDidUpdate: function () { this.renderAxis(); },
    componentDidMount: function () { this.renderAxis(); },
    renderAxis: function () {
        var node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.axis);

    },
    render: function () {

        var translate = "translate(0,"+(this.props.h)+")";

        return (
            <g className="axis" transform={this.props.axisType=='x'?translate:""} >
            </g>
        );
    }

});


/*Grid components*/
var Grid=React.createClass({
    propTypes: {
        h:React.PropTypes.number,
        grid:React.PropTypes.func,
        gridType:React.PropTypes.oneOf(['x','y'])
    },

    componentDidUpdate: function () { this.renderGrid(); },
    componentDidMount: function () { this.renderGrid(); },
    renderGrid: function () {
        var node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.grid);

    },
    render: function () {
        var translate = "translate(0,"+(this.props.h)+")";
        return (
            <g className="y-grid" transform={this.props.gridType=='x'?translate:""}>
            </g>
        );
    }

});


/*ToolTip components*/
var ToolTip=React.createClass({
    propTypes: {
        tooltip:React.PropTypes.object
    },
    render:function(){

        var visibility="hidden";
        var transform="";
        var x=0;
        var y=0;
        var width=150,height=70;
        var transformText='translate('+width/2+','+(height/2-5)+')';
        var transformArrow="";

        if(this.props.tooltip.display==true){
            var position = this.props.tooltip.pos;

            x= position.x;
            y= position.y;
            visibility="visible";

            if(y>height){
                transform='translate(' + (x-width/2) + ',' + (y-height-20) + ')';
                transformArrow='translate('+(width/2-20)+','+(height-2)+')';
            }else if(y<height){

                transform='translate(' + (x-width/2) + ',' + (Math.round(y)+20) + ')';
                transformArrow='translate('+(width/2-20)+','+0+') rotate(180,20,0)';
            }

        }else{
            visibility="hidden"
        }

        return (
            <g transform={transform}>
                <rect class="shadow" is width={width} height={height} rx="5" ry="5" visibility={visibility} fill="#6391da" opacity=".9"/>
                <polygon class="shadow" is points="10,0  30,0  20,10" transform={transformArrow}
                         fill="#6391da" opacity=".9" visibility={visibility}/>
                <text is visibility={visibility} transform={transformText}>
                    <tspan is x="0" text-anchor="middle" font-size="15px" fill="#ffffff">{this.props.tooltip.data.key}</tspan>
                    <tspan is x="0" text-anchor="middle" dy="25" font-size="12px" fill="#a9f3ff">{"1 Bitcoin = " +this.props.tooltip.data.value + " USD"}</tspan>
                </text>
            </g>
        );
    }
});


/*Dot components*/
var Dots=React.createClass({
    /*Define proerties of this react component*/
    propTypes: {
        /*data default as array (will be inputted in LineChart component*/
        data:React.PropTypes.array,
        /*x,y are defined as functions. Functions are defined in LineChart component
        and are used to obtain appropiate scaling and domain-range mappings*/
        x:React.PropTypes.func,
        y:React.PropTypes.func

    },
    
    /*Return the circles for each data point specified*/ 
    render:function(){

        var _self=this;

        //remove last & first point
        var data = this.props.data.splice(1);
        data.pop();
        
        //Use .map to create a circle element for the desired data points
        var circles=data.map(function(d,i){
            return (<circle className="dot" r="7" 
                        cx={_self.props.x(d.date)} cy={_self.props.y(d.price)} fill="#7dc7f4"
                        stroke="#3f5175" strokeWidth="5px" key={i}
                        onMouseOver={_self.props.showToolTip} onMouseOut={_self.props.hideToolTip}
                        data-key={d3.time.format("%m-%d-%Y")(d.date)} data-value={d.price}/>)
        });

        return(
            <g>
                {circles}
            </g>
        );
    }
});


/* Path component*/
var LineChart=React.createClass({
    /*Define proerties of this react component*/
    propTypes: {
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        crypto: React.PropTypes.string,
        chartId: React.PropTypes.string
    },

    /*Assign default values for properties*/
    getDefaultProps: function() {
        return {
            crypto: "BTC",
            width: 800,
            height: 300,
            chartId: 'v1_chart'
        };
    },

    /*Create function that will allow to change the chart's width*/
    getInitialState:function(){
        return {
            tooltip:{ display:false,data:{key:'',value:''}},
            width: this.props.width,
        };
    },
    
    /*Initialize "render" and define specific characteristics of the SVG previous to rendering*/
    render:function(){
        let {crypto} = this.props
        console.log(crypto)

        /*Dummy Data -> Must be improved to use data depending on crypto selection*/
        if (crypto == 'BTC') {   
        var data=[
            {day:'08-12-2012',price:11},
            {day:'01-19-2013',price:45},
            {day:'02-17-2016',price:400},
            {day:'09-04-2016',price:614},
            {day:'02-03-2017',price:1200},
            {day:'07-10-2017',price:2720},
            {day:'09-15-2017',price:3500},
            {day:'11-02-2017',price:6880},
            {day:'12-21-2017',price:17100},
            {day:'02-07-2018',price:7900},
            {day:'04-04-2018',price:11500}
        ]; }

        /*Define borders of SVG*/
        var margin = {top: 5, right: 50, bottom: 20, left: 50},
            w = this.state.width - (margin.left + margin.right),
            h = this.props.height - (margin.top + margin.bottom);
        
        /*Transform Epoch date to specific time format*/

        var parseDate = d3.time.format("%m-%d-%Y").parse;

        data.forEach(function (d) {
            d.date = parseDate(d.day);
        });
        
        /*Define D3 functions to set up line plot from a specific domain into a specific range*/ 
        var x = d3.time.scale()
            .domain(d3.extent(data, function (d) {
                return d.date;
            }))
            .rangeRound([0, w]);
 
        var y = d3.scale.linear()
            .domain([0,d3.max(data,function(d){
                return d.price+100;
            })])
            .range([h, 0]);

        /*Define D3 functions to set up x- and y-axis*/ 
        console.log(data[1].date.getMonth())
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient('left')
            .ticks(5);
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient('bottom')
            .tickValues(data.map(function(d,i){
                if(i>0)
                    return d.date;
            }).splice(1))
            .ticks(4);
        
        /*Define D3 functionts set up a grid (for better visualization)*/     
        var xGrid = d3.svg.axis()
            .scale(x)
            .orient('bottom')
            .ticks(5)
            .tickSize(-h, 0, 0)
            .tickFormat("");
        var yGrid = d3.svg.axis()
            .scale(y)
            .orient('left')
            .ticks(5)
            .tickSize(-w, 0, 0)
            .tickFormat("");

        /*Define line plot with (x,y) properties*/ 
        var line = d3.svg.line()
            .x(function (d) {
                return x(d.date);
            })
            .y(function (d) {
                return y(d.price);
            }).interpolate('cardinal');
            
        /*Position line SVG away from margins (useful for adding axes)*/ 
        var transform='translate(' + margin.left + ',' + margin.top + ')';
 
        /*Return the complete graph*/ 
        return (
            <div>
                {/*Create SVG where path is presented*/} 
                <svg id={this.props.chartId} width={this.state.width} height={this.props.height}>

                    {/*Set path within group element, which respects margins*/} 
                    <g transform={transform}>
                        {/*Define grid with properties as specified above*/} 
                        <Grid h={h} grid={yGrid} gridType="y"/>

                        {/*Define axis with properties as specified above*/} 
                        <Axis h={h} axis={yAxis} axisType="y" />
                        {/*<Axis h={h} axis={xAxis} axisType="x"/>*/}

                        {/*Define path with properties as specified above*/} 
                        <path className="line shadow" d={line(data)} strokeLinecap="round"/>

                        {/*Add dots for specific data line chart, using Dots class with specific inputs*/} 
                        <Dots data={data} x={x} y={y} showToolTip={this.showToolTip} hideToolTip={this.hideToolTip}/>

                        {/*Add ToolTips for each dot*/}
                        <ToolTip tooltip={this.state.tooltip}/>
                    </g>
                </svg>
            </div>
        );
    },
    showToolTip:function(e){
        e.target.setAttribute('fill', '#FFFFFF');

        this.setState({tooltip:{
            display:true,
            data: {
                key:e.target.getAttribute('data-key'),
                value:e.target.getAttribute('data-value')
                },
            pos:{
                x:e.target.getAttribute('cx'),
                y:e.target.getAttribute('cy')
            }

            }
        });
    },
    hideToolTip:function(e){
        e.target.setAttribute('fill', '#7dc7f4');
        this.setState({tooltip:{ display:false,data:{key:'',value:''}}});
    }

});

window.LineChart = LineChart;