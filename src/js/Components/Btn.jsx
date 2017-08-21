import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';

const propTypes = {
    item: PropTypes.object.isRequired,
    text: PropTypes.string,
    onclick: PropTypes.func.isRequired,
};

export default class Btn extends React.Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        let Topic = 'justMessage';
        PubSub.subscribe(Topic, (msg, data) => {
            this.props.onclick({
                "text": data
            })
        });
    }

    componentWillUnMount () {
        PubSub.clearAllSubscriptions();
    }

    render () {
        const { item, onclick } = this.props;
        const clk = () => {
            onclick({
                "text": "123"
            })
        }
        return (
            <button onClick={clk}>
                {item.text}
            </button>
        )
    }
}

Btn.propTypes = propTypes;