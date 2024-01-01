const Users = require('../models/users')

exports.registerUser = async (req, res) => {
    try {
      const{email, password} = req.body
  
      const newUser = new Users({email, password})
      await newUser.save();
  
      res.status(201).json({message: 'Kullancı kaydedildi'})
    } catch (error) {
      // Hata durumunda istemciye uygun bir hata mesajı gönder
      res.status(500).send(error.message);
    }
  };