const User = require('../../models/user');
const Usersession = require('../../models/Usersession');

module.exports = (app) => {
app.post('api/routes/signup', (req, res, next) => {
    const {body} = req;
    const {
        firstname,
        lastname,
        password
    } = body;
    let {
        email
    } = body;

    if (!firstname)
    {
        return res.end({
            success: false,
            message: 'Error: First name cannot be blank.'
        });
    }
    if (!lastname)
    {
        return res.end({
            success: false,
            message: 'Error: Lastname cannot be blank.'
        });
    }
    if (!email)
    {
        return res.send({
            success: false,
            message: 'Error: Email cannot be blank.'
        });
    }
    if (!password)
    {
        return res.end({
            success: false,
            message: 'Erroe: password cannot be blank.'
        });
    }
    email = email.toLowerCase();
    User.find({
        email: email
    }, (err, previousUsers) =>{
        if (err){
            return res.end({
                success: false,
                message: 'Error: password cannot be blank.'
            });
        }
        else if (previousUsers.length > 0){
            return res.end({
                success: false,
                message: 'Error: password cannot be blank.'
            });
        }
    
        const newUser = new User();

        newUser.email = email;
        newUser.firstname = firstname;
        newUser.lastname = lastname;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user)=>{
            if (err)
            {
                return res.end({
                    success: false,
                    message: 'Error: password cannot be blank.'
                });
            }
            return res.end({
                success: true,
                message: 'Signed up'
            });
        });
    });
});


app.post('api/routes/login', (req, res, next) => {
    const {body} = req;
    const {
        password
    } = body;
    let {
        email
    } = body;

    if (!email)
    {
        return res.send({
            success: false,
            message: 'Error: Email cannot be blank.'
        });
    }
    if (!password)
    {
        return res.end({
            success: false,
            message: 'Erroe: password cannot be blank.'
        });
    }
    email = email.toLowerCase();

    User.find({
        email: email
    }, (err, users) => {
        if (err)
        {
            return res.send({
                success: false,
                message: 'Error: server error'
            });
        }
        if (users.length != 1)
        {
            return res.send({
                success: false,
                message: 'Error: Invalid'
            });
        }
        const user = user[0];
        if (!user.validpassword(password))
        {
            return res.send({
                success: false,
                message: 'Error: Invalid'
            });
        }

        const usersession = new Usersession();
        usersession.userId = user._id;
        usersession.save((err, doc) =>{
            if (err)
            {
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }
            return res.send({
                success: true,
                message: 'successfully signed in',
                token: doc._id
            })
        })

    
    })
});

};