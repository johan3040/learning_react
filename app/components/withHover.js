import React from 'react';

function withHover(Component) {
    return class WithHover extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                hovering: false
            };
        }

        mouseEnter() {
            this.setState({ hovering: true });
        }

        mouseLeave() {
            this.setState({ hovering: false });
        }

        render() {
            return (
                <div
                    onMouseEnter={() => this.mouseEnter()}
                    onMouseLeave={() => this.mouseLeave()}
                >
                    <Component {...this.props} hovering={this.state.hovering} />
                </div>
            );
        }
    };
}

export default withHover;
