const express = require("express");
const Connect = require("./src/configs/Db");
const app = express();
const passport = require("./src/configs/passport")
const {register, login} = require("./src/controllers/auth.controller")


const OTP = require("./src/controllers/OTP.Controller");
const usercontroller = require("./src/controllers/User.controller");
const HistoryController = require("./src/controllers/History.Controller");
const suggestionsConbtroller = require("./src/controllers/Suggestion.controller");
app.use(express.json());
app.use(passport.initialize());
app.use(express.urlencoded({ extended: true }));
app.use("/profile", express.static("upload/images"));
app.use("/historyimg", express.static("./upload"));

app.use("/otp", OTP);
app.use("/user", usercontroller);
app.use("/history", HistoryController);
app.use("/suggestions", suggestionsConbtroller);

passport.serializeUser(function({user, token}, done) {
  done(null, {user, token});
});

passport.deserializeUser(function({user, token}, done) {
  done(err, {user, token});
});

app.get("/auth/google/failure", function(req, res) {
  return res.send("Something Went Wrong!");
})

app.get('/auth/google',
passport.authenticate('google', { scope:
    [ 'email', 'profile' ] }
));

app.get( '/auth/google/callback',
  passport.authenticate( 'google', {
      failureRedirect: '/auth/google/failure'
}), function(req, res) {
  const {user, token} = req.user
  return res.status(200).json({user, token });
});

app.post("/register", register);
app.post("/login", login);

app.listen(5000, async (req, res) => {
  Connect();
  console.log("Listening on 5000");
});
