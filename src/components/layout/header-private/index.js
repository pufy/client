import React from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavLink,
  NavItem,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavbarBrand
} from 'reactstrap';
import { FaRegBell, FaRegAddressCard, FaAngleRight } from 'react-icons/fa';
import { NavLink as RRNavLink, withRouter } from 'react-router-dom';

import { logout } from '../../../services/auth/actions'

class HeaderPrivate extends React.Component {

  constructor(props) {
    super(props);
    this.logout = this.props.logout.bind(this);
    
    this.state = {
      isOpen: false,
      user_name: this.props.auth.token_decode.nombres + ' ' + this.props.auth.token_decode.apellidos
    };
  }

  componentDidMount(){
  }
  
  toggle = () => this.setState({ isOpen: !this.state.isOpen })

  renderComponentNotification(){
    return (
      <UncontrolledDropdown nav inNavbar className="mr-3">
        <DropdownToggle nav className="btn-notification">
          <Badge className="btn-badge">4</Badge>
          <FaRegBell color="#CACACA" size="1.5em"/> 
        </DropdownToggle>
        <DropdownMenu right className="hello">
          <div className="d-flex flex-row">
            <div className="p-2 d-flex justify-content-center alert-icon">
              <FaRegAddressCard size="1.4em"></FaRegAddressCard>
            </div>
            <div className="p-2 mess-na">Tu informe de Ancestría <span>NATIVO</span> esta listo.</div>
            <div className="p-2 rigth-arrow">
              <FaAngleRight size="1.4em"></FaAngleRight>
            </div>
          </div>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    const { user_name, isOpen } = this.state;
    return (
      <div className="component-header-private">
      <div className="header-p">
        <div className="top-b"></div>
          <Navbar className="nav" color="#ffff" light expand="md">

            <NavbarBrand tag={RRNavLink} to="/">
              <img src={require('../../../assets/images/logo.png')} alt="logo" className="logo"/> 
            </NavbarBrand>

            { /* Boton notificacion MOBILE */ }
            <div className="d-block d-md-none ml-auto">{ this.renderComponentNotification() }</div>

            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={isOpen} navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/dashboard">Nativo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/ancestria">Ancestría</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="/nutrition">Salud</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Estilo de vida</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Tienda</NavLink>
              </NavItem>

              <Nav className="ml-auto" navbar>
                { /* Boton notificacion WEB */ }
                <div className="d-none d-md-block">{ this.renderComponentNotification() }</div>
                <UncontrolledDropdown nav inNavbar>
                <div className="icon-name ">
                      <span className="icon-name__acron">{ user_name.substring(0, 1) }</span>
                      <span className="icon-name__acron icon-name__acron--color-darkred">{ user_name.split(' ')[1].substring(0, 1) }</span>
                  </div>
            { /*  <DropdownToggle nav caret>{ user_name }</DropdownToggle> */ }
                  <DropdownToggle nav caret> 
                  <div className="profilet">
                      <span className="profilet__name">{ user_name.split(' ')[0] } <strong className="profile__name--color-darkred">{ user_name.split(' ')[1] }</strong></span>
                  </div>
                  </DropdownToggle>
                  <DropdownMenu right className="menu-profile">
                    <DropdownItem className="btn-item" tag={RRNavLink} to="/profile">Editar perfil</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className="btn-logout" onClick={ this.logout }>
                      Cerrar sesión
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = {
  logout: logout
};

HeaderPrivate = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderPrivate));

export default HeaderPrivate;