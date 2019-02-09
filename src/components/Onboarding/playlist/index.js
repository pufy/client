import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';

class Playlist extends React.Component {


  constructor(props) {
    super(props);   
    this.state = {    };
  }
  

  render() {    
    return (
      <div className="component-map">
        <h1>Playlist</h1>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {  }
}

const mapDispatchToProps = {};

Playlist = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);

export default Playlist;