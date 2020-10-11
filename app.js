const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const uri = MONGO_DB_URI;
const auth = require('./routes/auth');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const index = require('./routes/index');
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const stories = require('./routes/stories');
const methodOverride = require('method-override');

const { truncate, stripTags, formatDate, select,editIcon } = require('./helper/hbs');

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to DB");
});


const app = express();
app.engine('handlebars', exphbs({
    helpers: {
        truncate: truncate,
        stripTags: stripTags,
        formatDate: formatDate,
        select: select,
        editIcon: editIcon
    },
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();

});
require('./config/passport')(passport);
app.use('/auth', auth);
app.use('/', index);
app.use('/stories', stories);

app.use(express.static(path.join(__dirname, './public')));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
