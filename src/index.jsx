import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Playground</h1>
                <hr />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
