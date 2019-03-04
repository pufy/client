import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import moment from 'moment';
import Header from '../../components/header';
import genreRock from '../../assets/images/genre-rock.svg'
import { FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';

class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() { }

  render() {
    //const { user, languages } = this.props.user;

    return (
      <div className="component-player">
        <div className="bck-poligon">
          <Header />
          <div className="container player vert-align py-5">
            <div className="player-card">
              <div className="player-actual">
                <div className="player-actual-cover">
                  <img src={genreRock} alt="" />
                  <h3>Bohemian Rhapsody</h3>
                  <p>Queen</p>
                </div>
                <div className="player-control">
                  <FaStepBackward />
                  <FaPlay />
                  <FaStepForward />
                </div>
              </div>
              <div className="player-list-song">
                <ListGroup>
                  <ListGroupItem className="player-list-song--track vert-align">
                    <img src={genreRock} alt="" />
                    <div className="player-list-song--track-data">
                      <h3>Bohemian Rhapsody</h3>
                      <p>Queen</p>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  //getProfile,
  //getLanguage
};

Player = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);

export default Player;