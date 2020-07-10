import React, { Component } from 'react';
import './ace.less';
import './index.less';
import AceEditor from 'react-ace-editor';

export default class CodeEditor extends Component {
    constructor (props) {
        super(props);
        this.ace = null; // 编辑器实例 
    }

    render () {
        let { value, readOnly, theme, onValueChange } = this.props;
        return (
            <div className="container_editor_area">
                <AceEditor
                    ref={ (ref) => { this.ace = ref } }
                    name="blah2"
                    mode="python"
                    theme={ theme || "monokai" }
                    placeholder="请输入脚本语句..."
                    value={ value }
                    defaultValue={ value }
                    fontSize={ 16 }
                    showGutter={ true }
                    showPrintMargin={ false }
                    readOnly={ readOnly }
                    highlightActiveLine={ true }
                    onChange={ onValueChange }
                    setOptions={ {
                        tabSize: 2,
                        enableSnippets: true,
                        showLineNumbers: true,
                        enableLiveAutocompletion: false,
                        enableBasicAutocompletion: false,
                    } } />
            </div>
        )
    }
}


