module.exports.loginUser = async (req, res) => {
  const { user, pass } = req.body;

  console.log(user, pass);

  return res.status(200).json({ status: "Success" });
};
