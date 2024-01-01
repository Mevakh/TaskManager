const Users = require('../models/users')

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  
  const user = await Users.findOne({ email, password });

  if (user) {
    res.json({ message: 'Giriş başarılı' });
  } else {
    res.status(401).json({ message: 'Giriş başarısız' });
  }
};

