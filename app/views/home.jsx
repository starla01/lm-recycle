import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jQuery';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}
	register(){
		var nombre = $("#nombre").val();
		var telefono = $("#telefono").val();
		var email = $("#email").val();
		var comentarios = $("#comentarios").val();

			$.ajax({
				url: 'https://us-central1-locompro-1337.cloudfunctions.net/mail',
					method: 'POST',
					data: {
					"to": "carlos.vazquez@lmrecycle.com.mx",
					"to_name": nombre,
					"subject": "Resgistro LM Recycle",
					"from": email,
					"from_name": nombre,
					"html": comentarios + " Cel. " + telefono
				},
					success: () => {
						console.log("Mensaje enviado");
					},
					error: (e) => {
					console.log("Error: ", e)
					}
				})

	}
	render() {
		return (
			<div id="homeView" className="homeView">
				{/* <form id="createUser">
					<div id="user"><input type="text" placeholder="user" id="user"/></div>
					<div id="lastname"><input type="text" placeholder="lastname" id="lastname"/></div>
					<div id="email"><input type="text" placeholder="email" id="email"/></div>
					<div id="password"><input type="text" placeholder="password" id="password"/></div>
					<div id="points"><input type="text" placeholder="points" id="points" /></div>
					<div className="button" onClick={this.register}>Registrar</div>
				</form> */}
				<div className="bgimg-1">
				<div className="overlaySup"></div>
					<div className="caption">
						<div className="logo">
							<img src="/images/logotipo.png" />
						</div>
						<div className="titleH blanco">Reciclaje integral de equipos Electrónicos y eléctricos.</div>
					</div>
				</div>

				<div className="firstP">
					<div className="patternTop"></div>
						<div className="newUser">
							<div className="willCard">
								<div className="card">
									<div className="backCard1" ></div>
									<div className="backCard2"></div>
									<div className="backCard3"></div>
									<div className="mainCard" >
										<div className="image">
											<Link to="/servicios">
												<img src="/images/contenedores.jpg" />
											</Link>
										</div>
										<span className="icon lm-bookmark"></span>
										<span className="icon lm-star-full" ></span>
										<div className="nameCard">Servicios</div>
									</div>
								</div>
							</div>
							<div className="willCard">
								<div className="card">
									<div className="backCard1" ></div>
									<div className="backCard2"></div>
									<div className="backCard3"></div>
									<div className="mainCard" >
										<div className="image">
											<Link to="/programa">
												<img src="/images/programa.png" />
											</Link>
										</div>
										<span className="icon lm-bookmark"></span>
										<span className="icon lm-star-full" ></span>
										<div className="nameCard">Proceso de reciclaje</div>
									</div>
								</div>
							</div>
							<div className="willCard">
								<div className="card">
									<div className="backCard1" ></div>
									<div className="backCard2"></div>
									<div className="backCard3"></div>
									<div className="mainCard" >
										<div className="image">
											<Link to="/riesgos">
												<img src="/images/LGPGIR.jpg" />
											</Link>
										</div>
										<span className="icon lm-bookmark"></span>
										<span className="icon lm-star-full" ></span>
										<div className="nameCard">LGPGIR</div>
									</div>
								</div>
							</div>
						</div>
					<div className="patternDown"></div>
				</div>

				<div className="bgimg-2">
				<div className="overlaySup"></div>
					<div className="caption">
						<div className="titleH blanco">
							Permisos
						</div>
						<div className="generalText blanco">
							Contamos con los permisos otorgados por la Secretaria del medio ambiente.
						</div>
						<Link to="/permisos">
							<div className="button center">
								<span>Permisos</span>
							</div>
						</Link>
					</div>
				</div>

				<div className="secondP">
					<div className="patternTop"></div>
					<p className="generalText">En México se desechan entre 150,000 y 180,000 toneladas de basura electrónica al Año, que incluye televisores, computadoras, teléfonos, celulares, cables, entre otros.</p>
						<div className="newUser">
							<div className="pet sky">
								<img src="/images/city.png" />
							</div>
						</div>

						<ul>
							<li className="smallText">Cada 5 años la tasa de desechos electrónicos aumenta en un 30%, con un crecimiento de tres veces con respecto a la basura normal</li>
							<li className="smallText">Según el estudio, elaborado por el Instituto Nacional de Ecología, el 85% de estos productos termina en basureros o acumulados en hogares y empresas.</li>
							<li className="smallText">Pronósticos de la Asociación Internacional de Reciclaje Electrónico indicaba que en el 2010 en México se descartarán 400 millones de aparatos electrónicos, hoy en día cuanto no habrá regado.</li>
							<li className="smallText">El 10% de recuperación y reutilización de componentes, mientras que tan solo el 5% es sometido a un reciclado primario (plásticos y metales ferrosos</li>
						</ul>
					<div className="patternDown"></div>
				</div>

				<div className="bgimg-3">
				<div className="overlaySup"></div>
					<div className="caption">
					<div className="titleH blanco">
							Contactanos
						</div>
						<div className="generalText blanco">
							Envianos tus comentarios y a la brevedad nos comunicaremos contigo.
						</div>
						<div id="formContact">
							<form name="contacto" id="contacto">
								<div className="textSignup" >
									<div className="borderStatus" >
										<input type="text" className="box" id="nombre"  placeholder="Nombre"/>
									</div>
								</div>
								<div className="textSignup" >
									<div className="borderStatus" >
										<input type="text" className="box" id="telefono" placeholder="Teléfono"/>
									</div>
								</div>
								<div className="textSignup" >
									<div className="borderStatus" >
										<input type="text" className="box" id="email" placeholder="e-Mail"/>
									</div>
								</div>
								<div className="textSignupComent" >
									<div className="borderStatus" >
										<textarea className="box" id="comentarios" placeholder="Comentarios"></textarea>
									</div>
								</div>
								<Link to="/gracias">
									<div className="button center" onClick={this.register}>
										<span>Enviar comentarios</span> <span className="icon lm-play3" ></span>
									</div>
								</Link>
							</form>
						</div>
					</div>
				</div>

			</div>
		)
	}
}
