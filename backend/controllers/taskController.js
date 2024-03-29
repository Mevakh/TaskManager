const Task = require('../models/task')

exports.addTask = async (req, res) => {
    try {
      const{description, status} = req.body
  
      const newTask = new Task({description, status})
      await newTask.save();
  
      res.status(201).json({message: 'Task kaydedildi'})
    } catch (error) {
      // Hata durumunda istemciye uygun bir hata mesajı gönder
      res.status(500).send(error.message);
    }
};

exports.getTask = async (req,res) =>{
  try{
      const tasks = await Task.find()
      return res.json(tasks)
  }catch(error){
      console.error(error)
      res.status(500).json({message:'bir'})
   }
}

exports.getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Bir hata oluştu' });
  }
};

exports.updateTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { description, status } = req.body;

    const taskUser = await Task.findByIdAndUpdate(taskId, { description, status }, { new: true });

    if (!taskUser) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    res.json(taskUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Bir hata oluştu' });
  }
};

exports.deleteTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;

    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    res.json({ message: 'Kullanıcı başarıyla silindi' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Bir hata oluştu' });
  }
};