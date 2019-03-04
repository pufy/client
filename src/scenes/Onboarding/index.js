import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import genreCountry from '../../assets/images/genre-country.svg'
import genreIndie from '../../assets/images/genre-indie.svg'
import genreLatina from '../../assets/images/genre-latina.svg'
import genreLove from '../../assets/images/genre-love.svg'
import genreReggae from '../../assets/images/genre-reggae.svg'
import genreRock from '../../assets/images/genre-rock.svg'
import Header from '../../components/header';

class Onboarding extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() { }

  render() {
    const { history } = this.props;
    return (
      <div className="component-onboarding">
        <div className="bck-poligon">
          <Header />
          <div className="container onboarding vert-align py-5">
            <div className="onboarding-card">
              <div className="onboarding-header">Bienvenido a <strong>Pufy</strong></div>
              <div className="onboarding-subtitle mb-5">
                Escoge uno o más géneros para tu playlist predeterminada.
              </div>
              <div className="onboarding-list-genres">
                <div>
                  <img src={genreCountry} alt="country" />
                  <img src={genreIndie} alt="indie" />
                  <img src={genreLatina} alt="latina" />
                  <img src={genreLove} alt="love" />
                  <img src={genreReggae} alt="reggae" />
                  <img className="genre-selected" src={genreRock} alt="rock" />
                </div>
              </div>
              <div>
                <button className="btn-next" onClick={() => history.push("/player")}>Siguiente</button>
              </div>
            </div>
          </div>
        </div >
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

Onboarding = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Onboarding);

export default Onboarding;