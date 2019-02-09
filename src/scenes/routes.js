import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import moment from 'moment';
import 'moment/locale/es';

import { getPermissionsAction } from '../services/auth/actions';
import { RouteAuth } from '../components/router';
//import HeaderPrivate from '../components/layout/header-private';
//import HeaderPublic from '../components/layout/header-public';
import Footer from '../components/layout/footer';

import Dashboard from './Dashboard'
import Login from './Login'
import Event from './Event'
import Mapa from './Mapa'
import Catalog from './Catalog'
import Player from './Player'
import WelcomeSignup from './WelcomeSignup';
import Onboarding from './Onboarding';
import PayModule from '../components/pay-module';
import Landingpage from './Landingpage';

class Routes extends React.Component {

	constructor(props){
		super(props);
		moment.locale('es');
		this.props.getPermissionsAction();
	}
	
	render() {
		const { auth } = this.props;
			
	  	return <Router>
			<div>
				{ auth.rols?
					<Switch className="h-100">
						<Route exact path="/" component={ Landingpage } />
						<RouteAuth path="/login"      redirect="/dashboard" component={Login} 		  auth={true}/>
						<RouteAuth path="/signup"     redirect="/dashboard" component={WelcomeSignup} auth={true}/>
						<RouteAuth path="/dashboard"  redirect="/login" 	component={Dashboard} 	  auth={true}/>
						<RouteAuth path="/event"      redirect="/login" 	component={Event} 		  auth={true}/>
						<RouteAuth path="/catalog"    redirect="/login" 	component={Catalog} 	  auth={true}/>
						<RouteAuth path="/player"     redirect="/login" 	component={Player} 		  auth={true}/>
						<RouteAuth path="/map"        redirect="/login" 	component={Mapa}          auth={true}/>
						<RouteAuth path="/" redirect="/login" 	component={Onboarding} 	  auth={true}/>
					</Switch>
					:
					<h1>Cargando...</h1>
				}
			</div>
	  	</Router>
	}

	requirePermission = (Component, permission) => {
		if(!this.props.auth.rols.includes('user')){ //No ha registrado kit
			if(this.props.auth.permissions && this.props.auth.permissions.includes(permission))
				return Component;
			return Login;
		}
		return Dashboard;
	}

	requireRol = (rolsRequirement) => {
		return rolsRequirement.some(element => this.props.auth.rols.includes(element))
	}
}

const mapDispatchToProps = {
	getPermissionsAction
};

function mapStateToProps(state){
  return {
    auth: state.auth
  }
};

Routes = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Routes);

export default Routes;