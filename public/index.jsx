import React, { Component } from 'react'

export default class Index extends Component {
	render() {
		return (
			<html>
				<head>
					<meta charset="utf-8"/>
					<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
					<title>LM Recycle</title>
					 <link rel="icon" href="./images/favicon.ico" type="image/x-icon" />
    				<link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon" />
					<link rel="stylesheet" href="main.css"/>
				</head>
				<body>
					<div id="page" class="page"></div>
					<script src="./vendor.js"></script>
					<script src="./build.js"></script>
				</body>
			</html>
		)
	}
}
