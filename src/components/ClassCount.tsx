import * as React from "react";

interface Props {
}

interface State {
    count: number
}

export default class ClassCount extends React.Component<Props, State> {
    state: State = {
        count: 0
    };

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    };

    render(): React.ReactNode {
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <h3>{this.state.count}</h3>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
