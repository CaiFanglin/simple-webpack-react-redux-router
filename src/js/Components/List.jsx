import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as act from '../Actions/actions.js'

const propTypes = {
    list: PropTypes.array.isRequired
}


class List extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        const { list } = this.props;

        return (
            <ul>
                {
                    list.map( (index, name) => {
                        return (<li key={index}>{name}</li>)
                    })
                }
            </ul>
        )
    }
}

List.propTypes = propTypes;

const getList = state => {
    return ({
        list: state.list.list
    })
}

export default connect(getList)(List)