import React from 'react'
import { render } from 'react-dom'
import MyComponent from '../../src/index';
const { ReactDemo, CodeEditor } = MyComponent;
const App = () => {
    return (
        <React.Fragment>
            <ReactDemo />
            <CodeEditor />
        </React.Fragment>
    )
}
render(<App />, document.getElementById('root'))