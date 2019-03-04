import React from "react";
import { connect } from "react-redux";
import pufy from "../../assets/images/pufy.png";
import "./styles.scss";

class Signup extends React.Component {
  state = {
    err: false,
    message: "",
    user: {}
  };

  emailRef = React.createRef();
  emialConfirmRef = React.createRef();
  nameRef = React.createRef();
  passwordRef = React.createRef();

  validateFields() {
    if (
      !this.state.user.email ||
      !this.state.user.name ||
      !this.state.user.password ||
      this.state.user.email.trim() === '' ||
      this.state.user.name.trim() === '' ||
      this.state.user.password.trim() === ''
    ) {
      console.log(this.state.user)
      console.log("* Ingrese los campos obligatorios");
      this.setState({
        err: true,
        message: "* Ingrese los campos obligatorios"
      });
    } else {
      //this.setState({ err: false, message: "" });
      this.validateEmail();
    }
  }

  validateEmail() {

    if (this.state.user.email !== this.emialConfirmRef.current.value) {
      this.setState({ err: true, message: "* El email no coincide" });
    } else {
      this.setState({ err: true, message: "" });
    }


  }

  signUp = (e) => {
    e.preventDefault();
    const dataUser = {
      email: this.emailRef.current.value,
      name: this.nameRef.current.value,
      password: this.passwordRef.current.value
    };

    this.setState({
      user: dataUser
    });
    this.validateFields();
  };

  render() {
    const { history } = this.props;
    return (
      <div className="container-signup">
        <div className="text-center mt-5 mb-3">
          <img src={pufy} />
        </div>
        <section>
          <h3>Registra tu dirección de email</h3>
          <form onSubmit={this.signUp}>
            <input
              type="email"
              placeholder="Email"
              name=""
              ref={this.emailRef}
            />

            <input
              type="email"
              placeholder="Confirmar email"
              ref={this.emialConfirmRef}
              name=""
            />
            <input
              type="text"
              placeholder="Nombre"
              ref={this.nameRef}
              name=""
            />
            <input
              type="password"
              placeholder="Contraseña"
              ref={this.passwordRef}
              name=""
            />
            {this.state.err ? <p> {this.state.message} </p> : ""}
            <div className="rd vert-align">
              <input type="radio" value="" id="rd" name="" className="mx-2" />
              <label>
                Compatir mis datos de registro con los proveedores de contenido
                de Pufy para fines de Marketing
              </label>
            </div>
            <br />
            <p className="term">
              Al hacer clic en registrarse acepta los
              <a href=""> Términos y Condiciones </a> de uso de Pufy
            </p>
            <button>REGISTRATE</button>
            <p className="term">
              ¿Ya tienes una cuenta? &nbsp;
              <a href="#" onClick={() => history.push("/login")}>
                Iniciar sesión
              </a>
            </p>
          </form>
        </section>
        <footer />
      </div>
    );
  }

  onSignupPress = data => {
    this.setState({ email: data.correo });
    this.props.signupAction(data);
  };
}

export default Signup;
