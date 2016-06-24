'use strict';
require('./swiper.scss');

var DemoShow = require('../../plugin/demoshow');

const sourceCode = `
'use strict';
import { Spin } from 'antd';
const Swiper =  React.createClass({
	getInitialState: function() {
		return {
			children: <Spin size="large"/>,
			cl : "loader"
		};
	},
	componentDidMount:function(){
		let me = this;
		E.use("swiper",function(){
			me.setState({children:React.createElement(AsyncSwiper,me.props),cl:""})
		});
	},
	render : function(){
		return <div className={this.state.cl}>{this.state.children}</div>
	}
});

module.exports = Swiper;
`;

window.AsyncSwiper = React.createClass({

    render: function () {
        return (
            <DemoShow name="swiper"
                      description={<div>这里是组件描述信息</div>}
                      sourceCode={sourceCode}>
                <p>这里是内容</p>
                <p>这里是内容</p>
                <p>这里是内容</p>
                <p>这里是内容</p>
                <p>这里是内容</p>
                <p>这里是内容</p>
                <p>这里是内容</p>
                <p>这里是内容</p>
                <p>这里是内容</p>
                <p>这里是内容</p>
                <p>这里是内容</p>
                <p>这里是内容</p>
                <p>这里是内容</p>
                <p>这里是内容</p>
                <p>这里是内容</p>
                <p>这里是内容</p>
                <p>这里是内容</p>
            </DemoShow>
        );
    }
});
