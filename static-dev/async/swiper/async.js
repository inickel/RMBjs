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

const description = (
    <div>
        <p>这里是组件描述信息这里是组件描述信息这里是组件描述信息</p>
        <p className="emphasize">这是强调的内容强调的内容</p>
        <p>这里是组件描述信息这里是组件描述信息这里是组件描述信息</p>
    </div>
);

const configurationColumns = [{
    title: '参数',
    dataIndex: 'name',
    key: 'name',
    width: '25%'
}, {
    title: '说明',
    dataIndex: 'desc',
    key: 'desc',
}, {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    width: '25%'
}];

const configurationData = [
    {
        key: '1',
        name: 'sourceCode',
        desc: '组件源代码组件源代码组件源代码组件源代码组件源代码组件源代码组件源代码组件源代码组件源代码组件源代码组件源代码组件源代码组件源代码组件源代码组件源代码组件源代码组件源代码组件源代码组件源代码组件源代码',
        type: 'String',
        default: ''
    },
    {
        key: '2',
        name: 'configurationColumns',
        desc: '配置项表头',
        type: 'Array[Object]',
        default: ''
    },
    {
        key: '3',
        name: 'configurationData',
        desc: '配置项数据',
        type: 'Array[Object]',
        default: ''
    },
    {
        key: '4',
        name: 'description',
        desc: '组件描述',
        type: 'String',
        default: ''
    }
];

window.AsyncSwiper = React.createClass({

    render: function () {
        return (
            <DemoShow name="swiper"
                      description={description}
                      sourceCode={sourceCode}
                      configurationColumns={configurationColumns}
                      configurationData={configurationData}>
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
