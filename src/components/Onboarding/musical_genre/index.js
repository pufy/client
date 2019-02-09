import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

class GenreMusical extends React.Component {


  constructor(props) {
    super(props);   
    this.state = {    };
  }
  

  render() {    
    return (
      <div className="component-map">
        <h1>Genero Musical</h1>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps = {};

GenreMusical = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenreMusical);

export default GenreMusical;