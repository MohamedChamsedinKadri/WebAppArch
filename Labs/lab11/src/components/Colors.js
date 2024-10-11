import React, {Component} from 'react';


class Colors extends Component {
    constructor(props) {
        const colors = ['red', 'green', 'blue', 'yellow'];
        super(props);

        this.state = {
            colors: colors,
            currentColorIndex: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.updateColor, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateColor = () => {
        this.setState((prevState) => {
            const nextColorIndex =
                (prevState.currentColorIndex + 1) % this.state.colors.length;
            return {
                currentColorIndex: nextColorIndex,
            };
        });
    };

    render() {
        const {colors, currentColorIndex} = this.state;
        return (
            <div>
                <div
                    style={{
                        backgroundColor: colors[currentColorIndex],
                        width: '150px',
                        height: '150px',
                    }}
                ></div>
                <button onClick={this.updateColor}>Next</button>
                <button onClick={() => clearInterval(this.interval)}>Unmount</button>

            </div>
        );
    }
}

export default Colors;
