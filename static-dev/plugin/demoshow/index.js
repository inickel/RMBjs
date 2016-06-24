import React from 'react'
import './demoshow.scss'
import {Table, Icon} from 'antd';

/**
 * 组件展示页面
 * props:
 * name: 组件名称
 * description: 组件简单描述和其他说明信息
 * sourceCode: 源代码
 * configurationColumns: 组件配置表格表头列信息
 * configurationData: 组件配置表格内容
 */
var DemoShow = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.element,
        sourceCode: React.PropTypes.string.isRequired,
        configurationColumns: React.PropTypes.array,
        configurationData: React.PropTypes.array,
    },

    componentDidMount(){
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    },

    render(){
        var {name, description, sourceCode, configurationColumns, configurationData}=this.props;
        return (
            <div className="h5-component-display">
                <div className="left">
                    <div className="info">
                        <div className="title">{name}</div>
                        <div className="separator"/>
                        <div className="component-display description">
                            {description || ''}
                        </div>
                    </div>

                    <div className="source-code-panel">
                        <pre>
                          <code>
                            <div dangerouslySetInnerHTML={{__html:sourceCode}}/>
                          </code>
                        </pre>
                    </div>

                    {
                        (configurationColumns && configurationColumns.length) && (configurationData && configurationData.length)
                            ?
                            <div className="configuration-table">
                                <Table columns={configurationColumns}
                                       dataSource={configurationData}
                                       pagination={false}
                                />
                            </div>
                            : null
                    }
                </div>

                <div className="right">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

module.exports = DemoShow;
