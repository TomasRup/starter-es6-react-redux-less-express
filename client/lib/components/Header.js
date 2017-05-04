import React from 'react';


class Header extends React.Component {

    constructor() {
        super();
        this.state = {
        };
    }

    propTypes: {
        onSubmitFn: React.PropTypes.func.isRequired,
    }

    render() {
        return (
            <div className="sa-header">
                Header
            </div>
        );
    }
}

export default Header;