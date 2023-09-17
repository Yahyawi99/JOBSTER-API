const BadRequestError = require("../errors/bad-request");

const testUser = (req, res, next) => {
  const { isDemoUser } = req.user;

  if (isDemoUser) {
    throw new BadRequestError("Demo user can read only");
  }

  next();
};

module.exports = testUser;
