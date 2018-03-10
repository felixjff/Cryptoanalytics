<script type="text/babel" src="src/charts/LineChart.jsx"></script>

var PriceHistory = React.createClass({
    render:function(){
        return (
            <div>
                <h3>A Price History</h3>
                <div className="bottom-right-svg">
                    <LineChart/>
                </div>
            </div>
        )   
    }
}); 

ReactDOM.render(<PriceHistory/>,document.getElementById("line-chart"));