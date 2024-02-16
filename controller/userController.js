import Users from '../models/userModel.js';

//GET ALL USERS
export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

//GET A SINGLE USER BY ID
export const getUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

//LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (user) {
      if (user.password == password) {
        res.status(200).json(user);
      } else {
        res.status(400).json({ massage: "wrong password!" });
      }
    } else {
      res.status(400).json({ massage: "user not found!" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

//CREATE USER
export const createUser = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    const isUserExists = await Users.findOne({ email });
    if (isUserExists) {
      res.status(400).json({ message: "user already exists" });
    } else {
      const user = await Users.create({
        name,
        email,
        password,
        phone,
        address,
      });
      res.status(201).json(user);
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

//UPDATE USER
export const updateUser = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    const user = await Users.findById(req.params.id);
    if (user) {
      user.name = name;
      user.email = email;
      user.password = password;
      user.phone = phone;
      user.address = address;

      const updatedUser = await user.save();
      res.status(200).json(updatedUser);
    }
  } catch (error) {}
};

//DELETE USER
export const deleteUser = async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);
    if (user) {
      res.status(200).json({ message: "User is deleted!" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
