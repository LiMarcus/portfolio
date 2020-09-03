---
title: 'JS: Password recover'
layout: single
author_profile: true
read_time: true
comments: true
share: true
related: true
categories:
- email
- Javascript
tags: recover-email
---

When user choose password recovery, back end server will send a email to customer email box. This email contain a password recovery form, customer can input new password and click submit;

**Send Recovery email**

```js
//Recovery
router.post('/recovery', async (req, res) => {

  //check if the user is already in the  database
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email is wrong!');

  //create token in cofirmation email
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1d' });

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
    to: `${req.body.email}`,
    subject: 'Freestyle Craft Password Recovery',
    html:
      ` 
    <h2>Passwrod Recovery</h2>
    <form action="http://localhost:8888/api/change_password"  method="get">
      <input type="hidden" name="token" value="${token}">
      New password:<br/>
      <input type="text" name="password" value="">
      <br/>
      <input type="submit" value="Submit">
    </form>
    `
  };
```

**Update new password**

```js
router.get('/change_password', async (req, res) => {
  //verify token
  try {
    const user = jwt.verify(req.query.token, process.env.TOKEN_SECRET);

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.query.password, salt);
    await User.update({ _id: user._id }, { password: hashPassword });
  } catch (e) {
    res.send('error');
  }
  return res.redirect('http://localhost:3000/login');
});

```