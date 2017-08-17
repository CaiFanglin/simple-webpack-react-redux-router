import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input.jsx';
import Btn from './Btn.jsx';
import { chanInput, chanBtn } from '../Actions/actions.js'

// const propTypes = {
//     state : PropTypes.object.isRequired,
//     actions : PropTypes.object.isRequired
// };

class Form extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const { change, win, chanInput, chanBtn } = this.props;

        return (
            <section>
                <div>
                    <Input item={change} onchange={chanInput}/>
                </div>
                <Btn item={win} onclick={chanBtn}/>
            </section>
        )
    }
}

// 获取state中的change和win值
const getList = state => {
    return {
        change: state.change,
        win: state.win
    }
}

// 利用connect将组件与Redux绑定起来
export default connect(getList, { chanInput, chanBtn })(Form)

//Form.propTypes = propTypes;