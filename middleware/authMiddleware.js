const secure = (req, res, next) => {
  let { user } = req.session;

  if (!user) {
    return res.status(401).json({ msg: "unauthorized" });
  }

  next();
};

module.exports = secure;
