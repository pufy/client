import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import moment from 'moment';
import Header from '../../components/header';
import genreRock from '../../assets/images/genre-rock.svg'
import { FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() { }

  render() {
    //const { user, languages } = this.props.user;

    return (
      <div className="component-profile">
        <div className="bck-poligon">
          <Header />
          <div className="container profile vert-align py-5">
            <div className="profile-card">
              <h1>Hola</h1>
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

Profile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default Profile;