const UserModel = require("../models/userModel");

// Get All Users
const user_all = async (req, res) => {
  try {
    const response = await UserModel.find();
    res.render('index', { data: response });
  } catch (err) {
    res.status(500).send({ message: err.message || 'Error occurred while retriving user information' });
  }
};

// Add User 
const user_add = async (req, res) => {
  res.render('add-user');
};

// Save User on Submit click
const user_save = async (req, res) => {
  const user = new UserModel(req.body);
  try {
    await user.save();
    res.redirect('/');
  } catch (error) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating a create operation'
    });
  }
};

// Edit User
const user_edit = async (req, res) => {
  try {
    const response = await UserModel.findById(req.params.id);
    res.render('edit-user', { data: response });
  } catch (err) {
    res.status(500).send({ message: err.message || 'Error retriving with user id' + req.params.id });
  }
};

// Update User on Update icon click
const user_update = async (req, res) => {
  try {
    await UserModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/');
  } catch (err) {
    res.status(500).send({ message: err.message || 'Error update user information' });
  }
};

// Delete User
const user_delete = async (req, res) => {
  try {
    const response = await UserModel.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send({ message: err.message || 'Could not delete user information with id' + req.params.id });
  }
};

module.exports = {
  user_all,
  user_add,
  user_save,
  user_edit,
  user_update,
  user_delete
}