import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import state from '../state';
import Header from '../components/Header';


class MainContainer extends React.Component {

    componentWillMount() {
        this.props.baseActions.someAction();
    }

    render() {
        return (
            <div className="sa-main-container">
                <Header />
            </div>
        );
    }
}

const mapStateToProps = mappedState => ({
    base: mappedState.base,
});

const mapDispatchToProps = dispatch => ({
    baseActions: bindActionCreators(state.actions.base, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);