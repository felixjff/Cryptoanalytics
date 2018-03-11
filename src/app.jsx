<script type="text/babel" src="src/charts/LineChart.jsx"></script>

var PriceHistory = React.createClass({
    propTypes: {
        data: React.PropTypes.array
    },
    render:function(){
        let {data} = this.props;
        
        return (
            <div>
                <h3>A Price History</h3>
                <div className="bottom-right-svg">
                    <LineChart data={data}/>
                </div>
            </div>
        )   
    }
}); 

//Assumes Bitcoin has been selected 
//(json object with bubble chart selection should be loaded)
//Load crypto price file according to selection
var crypto = "BTC";
if (crypto == 'BTC') {
    /*$.getJSON("data/bitcoin_price.json", function (data) {
        var arrItems = [];      // THE ARRAY TO STORE JSON ITEMS.
        
        $.each(data, function (index, value) {
            arrItems.push(value);       // PUSH THE VALUES INSIDE THE ARRAY.
        });
        ReactDOM.render(<PriceHistory data = {arrItems}/>,document.getElementById("line-chart"));
    });   */ 
    var data=[
        {day:'02-17-2016',price:400},
        {day:'09-04-2016',price:614},
        {day:'02-03-2017',price:1200},
        {day:'07-10-2017',price:2720},
        {day:'09-15-2017',price:3500},
        {day:'11-02-2017',price:6880},
        {day:'12-21-2017',price:17100},
        {day:'02-07-2018',price:7900},
        {day:'04-04-2018',price:11500}
    ];
    ReactDOM.render(<PriceHistory crypto = {crypto}/>,document.getElementById("line-chart"));       
}
