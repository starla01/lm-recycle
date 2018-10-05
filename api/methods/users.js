import express from 'express';
import UserSchema from '../../schemas/usersSchema';
import sha from 'sha1';

const router = express.Router();

/************************************************
 * @name: getusers
 * @description: return all the users into database users
 * @response: [{
 *	email => user email,
 *	password => the sha1 cypher password
 *	name => the user name,
 *	lastname => the user lastname
 *	points => the user points
 * }]
 ************************************************/
router.get('/api/getusers', (req, res) => {
    UserSchema.find((e, data) => {
        if (e) res.status(500).json(e).end();
        res.status(200).json(data).end();
    });
});

/************************************************
 * @name: createuser
 * @description: create an user into db
 * @params: {
 *	email
 *	password
 *	name
 *	lastname
 *	points
 * }
 ************************************************/
router.post('/api/createuser', (req, res) => {
    let { email, password, name, lastname, points } = req.body;

    let user = new UserSchema({
        email: email,
        password: password,
        name: name,
        lastname: lastname,
        points: points
    }).save((e) => {
        if (e) res.status(409).json(e).end();

        res.status(201).end();
    });
});

/************************************************
 * @name: createuser
 * @description: find an user inti db by email and password
 * @params: {
 *	email
 *	password
 * }
 * @response: {
 *	email
 *	name
 *	lastname
 *	points
 *	token
 * }
 ************************************************/
router.post('/api/loginuser', (req, res) => {
    UserSchema.findOne({
        email: req.body.email,
        password: sha(req.body.password)
    }, (e, data) => {
        if (e) res.status(500).json(e).end();

        if (data) {
            let { email, name, lastname, points } = data;
            res.status(200).json({
                email: email,
                name: name,
                lastname: lastname,
                points: points,
                token: sha(email)
            }).end();
        } else {
            res.status(404).end();
        }
    });
});

/************************************************
 * @name: createuser
 * @description: create an user into db
 * @params: {
 *	email
 * }
 ************************************************/
router.delete('/api/deleteuser', (req, res) => {
    UserSchema.remove({
        email: req.body.email
    }, (e) => {
        if (e) res.status(500).json(e).end();
        res.status(410).end();
    })
});

/************************************************
 * @name: createuser
 * @description: create an user into db
 * @params: {
 *	email
 *	password
 *	name
 *	lastname
 * }
 ************************************************/
router.put('/api/updateuser', (req, res) => {
    let { email, password, name, lastname } = req.body;
    UserSchema.update({
        email: req.body.email
    }, {
        $set: {
            password: sha(password),
            name: name.toLowerCase(),
            lastname: lastname.toLowerCase()
        }
    }, {
        new: true
    }, (e, data) => {
        if (e) res.status(500).json(e).end();
        res.status(200).json(data).end();
    });
});

module.exports = router;