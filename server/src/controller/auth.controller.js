import UserModel from "../model/User.model.js";

export const AuthHome = async (req, res) => {
  try {
    res.status(200).json({
      message: "Hello From AuthHome",
      success: true,
    });
  } catch (error) {
    console.log("Error At Home Route auth/ \t", error.message);
    res.status(500).json({
      message: "Error at Server",
      success: false,
    });
  }
};

export const SaveUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400).json({
        message: "Please Provide All Required Info",
        success: false,
      });
    }

    let newUser = new UserModel();
    newUser.name = name;
    newUser.email = email;
    newUser.password = password;

    const result = await newUser.save();

    res.status(201).json({
      message: "User Created Successfully",
      user: result,
    });
  } catch (error) {
    console.log("Error At Home Route auth/ \t", error.message);
    res.status(500).json({
      message: "Error at Server",
      success: false,
    });
  }
};
