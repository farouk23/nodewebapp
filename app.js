var express = require('express');
var stormpath = require('express-stormpath');

var app = express();




app.set('views', './views');
app.set('view engine', 'jade');

var stormpathMiddleware = stormpath.init(app, {
  apiKeyFile: '',
  application: '',
  secretKey: '',
  expandCustomData: true,
  enableForgotPassword: true, 



enableFacebook: true,
  enableGoogle: true,
  social: {
    facebook: {
      appId: '',
      appSecret: ''
    },
    google: {
      clientId: '',
      clientSecret: ''
    },

    linkedin: {
      clientId: '',
      clientSecret: ''
    },
  },


});

app.use(stormpathMiddleware);




app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});



app.use('/profile',stormpath.loginRequired,require('./profile')());
app.listen(3000);