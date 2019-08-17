import React, { Component } from 'react';
import { Remarkable } from 'remarkable'; 
import './editor.css';
var md = new Remarkable();

class MarkdownEditor extends Component {
    constructor (props) {
        super(props);
        this.state = {
            parser: ''
        }
    };

    changeHandle = (e) => {
        const { value } = this.refs.editor;
        const parser = md.render(value)
        this.setState({ parser });
        console.log(parser)
    }

    render() {
        const { parser } = this.state;
        return (
            <div>
                <h1 className="header-wrapper">在线 Markdown 编辑器</h1>
                <div className="markdown">
                    <div className="editor"><textarea onChange={this.changeHandle} ref="editor"/></div>
                    <div className="parser" dangerouslySetInnerHTML={{ __html: parser }}></div>
                </div>
            </div>
        );
    }
}

export default MarkdownEditor;