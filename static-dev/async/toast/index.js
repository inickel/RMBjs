'use strict';
var Spin=ANT.Spin;
const Toast =  React.createClass({
	getInitialState: function() {
		return {
			children: <Spin size="large"/>,
			cl : "loader"
		};
	},
	componentDidMount:function(){
		console.log(1);
		let me = this;
		E.use("toast",function(){
			me.setState({children:React.createElement(AsyncToast,me.props?me.props:{}),cl:""})
		});
	},
	render : function(){
		return <div className={this.state.cl}>{this.state.children}</div>
	}
});

module.exports = Toast;
