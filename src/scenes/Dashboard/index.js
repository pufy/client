import React from 'react';
import { connect } from 'react-redux';

import { FaChevronRight } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentDidMount() {
  }

  render() {
    
  //  const { kit, history } = this.props;
    return (
      <div className="component-dashboard pb-5">        
              <h1> Dashboard </h1>  
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    kit: state.kit,
    auth: state.auth
  }
}

const mapDispatchToProps = {
};

Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

export default Dashboard;