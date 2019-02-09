import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="component-footer">
                <div className="d-flex flex-column flex-sm-row justify-content-sm-around pt-sm-5 mb-sm-5">
                    <div className="align-self-center mt-sm-0 m-5">
                        <img src={require('../../../assets/images/logo2.png')} alt="nativo"/>
                    </div>
                    <div className="d-flex flex-sm-column flex-row mb-sm-0 mb-3">
                        <div className="w-50 pl-sm-0 pl-5">
                            <h2>Legal</h2>
                        </div>
                        <div className="">
                            <a href="/">Términos de servicios</a>
                            <a href="/">Políticas de privacidad</a>
                            <a href="/">Protección de datos</a>
                        </div>
                    </div>
                    <div className="d-flex flex-sm-column flex-row mb-sm-0 mb-3">
                        <div className="w-50 pl-sm-0 pl-5">
                            <h2>Nativo</h2>
                        </div>
                        <div className="">
                            <a href="/">Acerca de NATIVO</a>
                            <a href="/">¿Cómo funciona?</a>
                            <a href="/">Atención al cliente</a>
                            <a href="/">Contenido del kit</a>
                        </div>
                    </div>
                    <div className="d-flex flex-sm-column flex-row mb-sm-0 mb-3">
                        <div className="w-50 pl-sm-0 pl-5">
                            <h2>Contáctenos</h2>
                        </div>
                    </div>
                </div>
                <span className="pb-3">© 2018 Nativo. Bogotá - Colombia / Todos los derechos reservados.</span>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = {
};

Footer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Footer);

export default Footer;