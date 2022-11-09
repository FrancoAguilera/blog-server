const User = require("../models/login.model.ts");

module.exports.loginUser = async (req, res) => {
  const { user, pass } = req.body;

  try {
    const adminUser = await User.find({ user, pass });
    const isAdmin = adminUser.length > 0;

    if (isAdmin) {
      return res.status(200).json({ status: "Success" });
    } else {
      return res.status(404).json({ status: "Fail" });
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
