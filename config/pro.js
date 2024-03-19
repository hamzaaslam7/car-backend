module.exports = {
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_COOKIE_EXPIRES_IN:process.env.JWT_COOKIE_EXPIRES_IN,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
};
