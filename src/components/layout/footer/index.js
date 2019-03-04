import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="component-footer">
               {/** */}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = {
};

Footer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Footer);

export default Footer;