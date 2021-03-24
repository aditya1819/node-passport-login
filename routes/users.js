const express = require('express');
const router = express.Router();

// Login Page
router.get('/login', (req, res) => {
    res.render('login')
})

// Registration page
router.get('/register', (req, res) => {
    res.render('register')
})

// Register Handle
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    // validation part
    let errors = [];

    // check required fields
    if (!name || !email || !password || !password2) {
        errors.push({ msg : 'Please fill all fields' });
    }

    // check password match
    if (password != password2) {
        errors.push({ msg : 'Passwords do not match' });
    }

    // check pass length
    if (password.length < 4) {
        errors.push({ msg : 'Password Should be atleast 4 char'});
    }

    if (errors.length > 0) {
         res.render('register', {
            errors,
            name,
            email,
            password
         });
    } else {
        res.send('PAss')
    }
})


module.exports = router;