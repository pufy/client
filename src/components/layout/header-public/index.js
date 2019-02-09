import React from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from 'reactstrap';
import { FaRegBell } from 'react-icons/fa';

class HeaderPublic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount(){
  }
  
  productsToggle = () => this.setState({ isOpen: !this.state.isOpen })

  renderComponentNotification(){
    return (
      <UncontrolledDropdown nav inNavbar className="mr-3">
        <DropdownToggle nav className="btn-notification">
          <Badge className="btn-badge">4</Badge>
          <FaRegBell color="#CACACA" size="1.5em"/> 
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Perfil (No hay vista)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={ this.logout }>
            Cerrar sesión
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="component-header-public">
        <Navbar className="nav" color="#ffff" light expand="md">
          <NavbarToggler onClick={this.productsToggle}/>

          <Collapse className="d-md-flex justify-content-md-center" isOpen={isOpen} navbar>
            <NavItem>
              <NavLink href="/">Nativo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>¿Cómo funciona?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Productos</NavLink>
            </NavItem>
            <NavItem className="d-none d-md-block">
              <img src={require('../../../assets/images/logo.png')} alt="logo" className="logo"/> 
            </NavItem>
            <NavItem>
              <NavLink>Historias</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Tienda</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Contáctenos</NavLink>
            </NavItem>
          </Collapse>
        </Navbar>
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
};

HeaderPublic = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderPublic);

export default HeaderPublic;