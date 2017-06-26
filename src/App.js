import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {salutation: null, loading:true}
    }
    componentDidMount() {
        fetch('/api').then(response => {
            return response.json()
        }).then((data) => {
            this.setState({
                salutation : data.salutation,
                loading: false
            })
        })

    }
    render() {
        if (this.state.loading === false) {
            return (
                <h1>{this.state.salutation}, forcom</h1>
            )
        } else {
            return (
                <h1>loading</h1>
            )
        }
    }
}

export default App
