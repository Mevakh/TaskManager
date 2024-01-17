const Users = require('../models/users')

exports.getUsers = async (req,res) =>{
  try{
    const users = await Users.find()
    res.json(users)
  }catch(error){
    console.error(error)
    res.status(500).json({message:'bir'})
  }
}

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await Users.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Bir hata oluştu' });
  }
};

exports.updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const { email, password } = req.body;

    const updatedUser = await Users.findByIdAndUpdate(userId, { email, password }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Bir hata oluştu' });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await Users.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    res.json({ message: 'Kullanıcı başarıyla silindi' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Bir hata oluştu' });
  }
};