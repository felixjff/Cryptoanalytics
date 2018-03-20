<script type="text/babel" src="src/charts/LineChart.jsx"></script>

var PriceHistory = React.createClass({
    propTypes: {
        data: React.PropTypes.array,
        crypto: React.PropTypes.string
    },
    render:function(){
        let {data, crypto} = this.props;
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
            ReactDOM.render(<PriceHistory crypto = {crypto}/>,document.getElementById("line-chart"));
    })