import React, { Component } from 'react';
import $ from 'jQuery';

export default class Register extends Component {
	constructor(props) {
		super(props);
	}
	//register(){
		// var user = $("#user").val();
		// var lastname = $("#lastnameuser").val();
		// var email = $("#email").val();
		// var password = $("#password").val();
		// var points = $("#points").val();

		// let data = {
		// 	user: 'luis',
		// 	lastname: 'botello',
		// 	email: 'luis.robles@gmail.com',
		// 	password: 'kike',
		// 	points: '5'
		// }

			// $.ajax({
			// 	url: '/api/createuser',
			// 	method: 'POST',
			// 	data: data,
			// 	success: (data) => {
			// 		console.log(data)
			// 	},
			// 	error: (e) => {
			// 		console.log(e, "Error")
			// 	}
			// })

	//}
	render() {
		return (
			<div id="registerView" className="registerView">
                    registro
				{/* <form id="createUser">
					<div id="user"><input type="text" placeholder="user" id="user"/></div>
					<div id="lastname"><input type="text" placeholder="lastname" id="lastname"/></div>
					<div id="email"><input type="text" placeholder="email" id="email"/></div>
					<div id="password"><input type="text" placeholder="password" id="password"/></div>
					<div id="points"><input type="text" placeholder="points" id="points" /></div>
					<div className="button" onClick={this.register}>Registrar</div>
				</form> */}
			</div>
		)
	}
}
