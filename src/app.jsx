<script type="text/babel" src="src/charts/LineChart.jsx"></script>

var PriceHistory = React.createClass({
    propTypes: {
        data: React.PropTypes.array,
        crypto: React.PropTypes.string
    },
    render:function(){
        let {data, crypto} = this.props;
        console.log(crypto)
        return (
            <div>
                <h3>Price History of {crypto}</h3>
                <div className="bottom-right-svg">
                    <LineChart data={data} crypto={crypto}/>
                </div>
            </div>
        )   
    }
}); 

//Assumes Bitcoin has been selected 
//(json object with bubble chart selection should be loaded)
//Load crypto price file according to selection
<script type="text/babel" src="src/charts/BubbleChart.js"></script>

node.on("click", function (d) {
        var crypto = d.data.Currency;
 
        //if (crypto == 'Bitcoin') {
            /*$.getJSON("data/bitcoin_price.json", function (data) {
                var arrItems = [];      // THE ARRAY TO STORE JSON ITEMS.
        
                $.each(data, function (index, value) {
                    arrItems.push(value);       // PUSH THE VALUES INSIDE THE ARRAY.
                });
                ReactDOM.render(<PriceHistory data = {arrItems}/>,document.getElementById("line-chart"));
            });   */ 
        //    ReactDOM.render(<PriceHistory crypto = {crypto}/>,document.getElementById("line-chart"));       
        //} else if (crypto == 'Ethereum'){
            ReactDOM.render(<PriceHistory crypto = {crypto}/>,document.getElementById("line-chart"));
        //}
    })