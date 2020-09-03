---
title: 'JS: confirmation email'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- email
- Javascript
tags: comfirmation-email

---

When user create a new account, the system will send a email with a comfirmation link. I add token in comfirmation link as params, when user click this link, backend can verify token data, and find who want to active their account;

**Register Js:**

```js
router.post('/register', async (req, res)=>{
    //let's validate the data before become a user
    const {error} = registerValidation(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    //check if the user is already in the  database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists!');

    //Hash passwords
    const salt = await bcrypt.genSalt(10);   
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword
    });
    try{
        const savedUser = await user.save();
        //callback the whole user info
        res.send(savedUser);
        //res.sned(user: user._id);
    }catch{
        res.status(400).send(error);
    }

    //create token in cofirmation email
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, {expiresIn: '1d'});

    //url
    var url = `http://localhost:8888/api/confrimation/${token}`;
  
    //sender information
    var smtpTransport = nodemailer.createTransport({
      service: 'gmail',
      port: 465,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  
    //receiver information
    var mailOptions = {
      from: 'freestylehandicraft@gmail.com',
      to: `${ req.body.email }`,
      subject: 'Freestyle Craft Verification',
      html: `<p>Verification Link: ${url}</p>`
    };

    //send cofirmation email
    smtpTransport.sendMail(mailOptions,
      (error, response) => {
        if (error) {
          res.send(error)
        } else {
          res.send('Success')
        }
        smtpTransport.close();
      });
}) 
```

**comfirmation js:**

```js
//Confirmation
router.get('/confrimation/:token', async (req, res) =>{
    
    //verify token
    try{
        const user =jwt.verify(req.params.token, process.env.TOKEN_SECRET);
        console.log(user._id);
        
        await User.update({_id: user._id}, {isVerified: true});

    }catch(e){
        res.send('error');
    }
    return res.redirect('http://localhost:3000/login');

});
```