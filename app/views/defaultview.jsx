import React, { Component } from 'react';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="homeView" className="homeView">
				<div id="error">
					<img src="./images/404.jpg" />
				</div>
				
			</div>
		)
	}
}
