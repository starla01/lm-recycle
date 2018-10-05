/******************************************************************
* @imports all packages
******************************************************************/
import express from 'express';
import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import _ from 'underscore';
/******************************************************************
** @import router, mongosetup and index page
******************************************************************/
import router from './api/router';
import IndexFile from './public/index.jsx';
//import mongodb from './schemas/mongosetup.js';
/******************************************************************
** @create all const that need for application
******************************************************************/
const app = express();
const port =  process.env.PORT || 5000;
const IndexPage = renderToString(<IndexFile />);
/******************************************************************
** @setup for response and use the api methods
******************************************************************/
app.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json({ type: 'application/vnd.api+json' }))
	.use(bodyParser.json())
	.use(methodOverride('X-HTTP-Method-Override'))
	.use(express.static(`${__dirname}/public/`))
	.use(router)
	.get('*', (req, res) => { res.status(200).send(IndexPage) })
	.listen(port, () => {
		console.log(`Magic happens on port ${port}`)
	});
