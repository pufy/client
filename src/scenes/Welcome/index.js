import React, { Component } from "react";
import { connect } from "react-redux";
import cafe from "../../assets/images/cafe.png";
import cafebar from "../../assets/images/cafe-bar.png";
import bar_pub from "../../assets/images/bar-pub.png";
import bar from "../../assets/images/barimage.png";
import Header from '../../components/header';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import "./styles.scss";

class Welcome extends Component {
  state = {};

  welcomePufy = e => {
    e.preventDefault();
  };

  render() {
    const { history } = this.props;
    return (
      <div className="bck-poligon">
        <Header />
        <div className="container welcome vert-align py-5">
          <div className="welcome-card">
            <div className="welcome-header mb-5">Bienvenido a <strong>Pufy</strong></div>
            <div className="row">
              <div className="col-7 welcome-data">
                <div className="welcome-data-item">
                  <h3>Registra tu establecimiento</h3>
                  <div>
                    <Label for="nameSite">Nombre de establecimiento</Label>
                    <Input type="text" name="email" id="nameSite" />
                  </div>
                </div>
                <div className="welcome-data-item">
                  <h3>Días de atención</h3>
                  <div className="list-days">
                    <span className={``}>L</span>
                    <span className={``}>M</span>
                    <span className={``}>X</span>
                    <span className={``}>J</span>
                    <span className={``}>V</span>
                    <span className={``}>S</span>
                    <span className="day-active">D</span>
                  </div>
                </div>
                <div className="welcome-data-item">
                  <h3>Horario de atención</h3>
                  <div className="atention-hour">
                    <input type="time" id="appt" required />
                    <span> ─ </span>
                    <input type="time" id="appt" required />
                  </div>
                </div>
                <div className="welcome-data-item">
                  <Label for="addressSite">Dirección</Label>
                  <Input type="text" name="" id="adressSite" />
                </div>
              </div>
              <div className="col-5 welcome-data">
                <div className="welcome-data-item">
                  <h3>Categoria</h3>
                  <div className="row">
                    <div className="col-4 category-item vert-align">
                      <img src={cafe} />
                      <label htmlFor="">Cafe</label>
                    </div>
                    <div className="col-4 category-item vert-align category-selected">
                      <img src={cafebar} />
                      <label htmlFor="">Cafe/bar</label>
                    </div>
                    <div className="col-4 category-item vert-align">
                      <img src={bar_pub} />
                      <label htmlFor="">Bar Pub</label>
                    </div>
                  </div>
                </div>
                <div className="welcome-data-item">
                  <h3>Imágenes</h3>
                  <div className="load-images">
                    <input type="file" name="myImage" accept="image/*" />
                    <div className="list-images">
                      <img src={cafe} />
                    </div>
                  </div>
                </div>
                <div className="welcome-data-item">
                  <h3>Color característico</h3>
                  <div className="list-color">
                    <span className="list-color-white"></span>
                    <span className="list-color-red selected-color"></span>
                    <span className="list-color-yellow"></span>
                    <span className="list-color-brown"></span>
                    <span className="list-color-purple"></span>
                    <span className="list-color-gray"></span>
                    <span className="list-color-green"></span>
                  </div>
                </div>
                <div className="welcome-data-item">
                  <h3>Logo</h3>
                  <input type="file" name="myImage" accept="image/*" />
                </div>
                <div>
                  <button className="btn-next" onClick={() => history.push("/onboarding")}>Siguiente</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Welcome;
