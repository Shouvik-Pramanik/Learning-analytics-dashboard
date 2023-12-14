const Teacher = require("./teacher.model");
var jwt = require("jsonwebtoken");

const teacherController = {
  login: async (req, res) => {
    const user = await Teacher.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(req.body);
    if (user) {
      const token = jwt.sign(
        {
          email: user.email,
          password: user.password,
        },
        JWT_SECRET
      );
      return res.json({ status: "ok", user: token });
    } else {
      return res.json({ status: "error", user: false });
    }
  },
};

module.exports = teacherController;
