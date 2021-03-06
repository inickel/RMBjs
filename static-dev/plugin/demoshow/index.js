import './demoshow.scss'
var Table = ANT.Table;
var Icon = ANT.Icon;
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

    highlightCode: function () {
        $('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    },

    componentDidMount: function () {
        this.highlightCode();
    },

    componentDidUpdate: function () {
        this.highlightCode();
    },

    render: function () {
        var {
            name,
            description,
            sourceCode,
            configurationColumns,
            configurationData
        }=this.props;

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
                              {sourceCode}
                          </code>
                        </pre>
                    </div>

                    {
                        (configurationColumns && configurationColumns.length) && (configurationData && configurationData.length)
                            ?
                            <Table columns={configurationColumns}
                                   dataSource={configurationData}
                                   pagination={false}
                            />
                            : <div></div>
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
