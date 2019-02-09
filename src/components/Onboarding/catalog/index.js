import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

class Catalog extends React.Component {


  constructor(props) {
    super(props);   
    this.state = {    };
  }
  

  render() {    
    return (
      <div className="component-map">
        <h1>Catalogo</h1>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps = {};

Catalog = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Catalog);

export default Catalog;