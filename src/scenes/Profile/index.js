import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, InputGroupText, Input, ListGroup, ListGroupItem } from 'reactstrap';
import moment from 'moment';
import Header from '../../components/header';
import UserImg from '../../assets/images/user.svg'
import { FaPlay, FaStepBackward, FaStepForward, FaStore, FaChartLine, FaEdit, FaSave } from 'react-icons/fa';

import InfoPlace from '../../components/info-place';
import Stats from '../../components/stats';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showInfo: true,
      editUser: false
    };
  }

  componentDidMount() { }

  toggleTabs = (state) => {
    this.setState({ showInfo: state });
  }
  toggleEdit = (state) => {
    this.setState({ editUser: state });
  }

  render() {
    //const { user, languages } = this.props.user;
    const { showInfo, editUser } = this.state;

    return (
      <div className="component-profile">
        <div className="bck-poligon">
          <Header />
          <div className="container profile vert-align py-5">
            <div className="profile-card row">
              <div className="col-4 profile-user">
                <img src={UserImg} alt="country" />
                <InputGroup>
                  <Input disabled={!editUser} placeholder="Sebastian Rojas" />
                </InputGroup>
                <InputGroup>
                  <Input disabled={!editUser} placeholder="seb.rojas@gmail.com" />
                </InputGroup>
                <ListGroup>
                  <ListGroupItem className={`${showInfo && 'active-tab'}`} onClick={() => this.toggleTabs(true)}>
                    <FaStore />Vasito</ListGroupItem>
                  <ListGroupItem className={`${!showInfo && 'active-tab'}`} onClick={() => this.toggleTabs(false)}>
                    <FaChartLine /> Estadísticas</ListGroupItem>
                </ListGroup>
                <div>
                  {editUser ?
                    <button className="btn-edit" onClick={() => this.toggleEdit(false)}>
                      <FaSave />
                      Actualizar datos
                    </button>
                    :
                    <button className="btn-edit" onClick={() => this.toggleEdit(true)}>
                      <FaEdit />
                      Editar datos
                    </button>
                  }
                </div>
              </div>
              <div className="col-8 profile-site-info">
                {showInfo ?
                  <InfoPlace />
                  :
                  <Stats />
                }
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

Profile = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default Profile;