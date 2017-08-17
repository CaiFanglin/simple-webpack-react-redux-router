import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

const propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    item: PropTypes.object.isRequired,
    onchange: PropTypes.func.isRequired
};

export default class Input extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        const { type, placeholder, item, onchange } = this.props;
        const change = () => {
            onchange({
                type: "password",
                placeholder: "改变啦！！！"
            })
        }
        return (
            <input type={item.type} placeholder={item.placeholder} onChange={change}/>
        )
    }
}

Input.propTypes = propTypes;