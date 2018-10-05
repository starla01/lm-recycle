// import libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, NotFoundRoute, useRouterHistory } from 'react-router';
import { createHashHistory, createHistory, browserHistory } from 'history';
import $ from 'jquery';

import tags from './components/tags.js';

let tag = tags;


// import styles
import styles from './sass/init.scss';

// import views
import Home from './views/home.jsx';
import DefaultView from './views/defaultview.jsx';
import RegisterView from './views/register.jsx';

import Quienes from './views/quienessomos.jsx';
import Objetivo from './views/objetivo.jsx';
import Servicios from './views/servicios.jsx';
import Programa from './views/programa.jsx';
import Metales from './views/metales.jsx';

import Contaminacion from './views/contaminacion.jsx';
import SaludPublica from './views/saludpublica.jsx';
import Certificaciones from './views/certificaciones.jsx';
import Riesgos from './views/riesgos.jsx';
import Ubicacion from './views/ubicacion.jsx';
import Gracias from './views/thankyou.jsx';

// import the general components
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

// delete hash element into url
const appHistory = useRouterHistory(createHistory)({
	queryKey: false,
	basename: '/'
});

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			deviceType: this.params(),
			agent: this.agent()
		}
	}

	params() {
		let w = $(window).width();
		switch(true) {
			case (w > 0 && w < 480):
				return 'phonev';
			case (w > 479 && w < 768):
				return 'phoneh';
			case (w > 467 && w < 1024):
				return 'tabletv';
			case (w > 1023 && w < 1200):
				return 'tableth';
			default:
				return 'desktop';
		}
	}

	agent() {
		if (
			navigator.userAgent.match(/Android/i) ||
			navigator.userAgent.match(/webOS/i) ||
			navigator.userAgent.match(/iPhone/i) ||
			navigator.userAgent.match(/iPad/i) ||
			navigator.userAgent.match(/iPod/i) ||
			navigator.userAgent.match(/BlackBerry/i) ||
			navigator.userAgent.match(/Windows Phone/i)
		) {
			return true;
		} else {
			return false;
		}
	}

	componentDidMount() {
		$(window).on('resize', () => {
			this.setState({
				deviceType: this.params()
			});
		});
	}

	render() {
		let view = React.cloneElement(this.props.children, this.state);
		const props = {
			size : this.state.deviceType
		}
		return (
			<div>
				<Header props={props}/>
				<div id="AppMain" className={this.state.deviceType}>
					<div className="containerPage">{ view }</div>
				</div>
				<Footer props={props}/>
			</div>
		);
	}
}

ReactDOM.render(
	<Router history={appHistory}>
		<Route component={App}>
			<Route path="/" component={Home} />
			<Route path="/registro" component={RegisterView} />
			<Route path="/quienes-somos" component={Quienes} />
			<Route path="/objetivo" component={Objetivo} />
			<Route path="/servicios" component={Servicios} />
			<Route path="/programa" component={Programa} />
			<Route path="/metales" component={Metales} />
			<Route path="/ubicacion" component={Ubicacion} />

			<Route path="/contaminacion" component={Contaminacion} />
			<Route path="/salud-publica" component={SaludPublica} />
			<Route path="/permisos" component={Certificaciones} />
			<Route path="/riesgos" component={Riesgos} />
			<Route path="/gracias" component={Gracias} />
			
			<Route path="*" component={DefaultView} />
		</Route>
	</Router>,
	document.getElementById('page')
)
