import UserModel from "../model/User.model.js";
import { comparePassword, genHashPassword } from "../utils/bcrypt.js";
import { checktoken, gentoken } from "../utils/genToken.js";

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
    let { name, email, password } = req.body || {};

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please Provide All Required Info",
        success: false,
      });
    }

    const existingUser = await UserModel.findOne({
      email: email,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User with this Email Already Exist",
        success: false,
      });
    }

    const hashpassword = await genHashPassword(password);

    let newUser = new UserModel();
    newUser.name = name;
    newUser.email = email;
    newUser.password = hashpassword;

    const result = await newUser.save();

    return res.status(201).json({
      message: "User Created Successfully",
      user: result,
    });
  } catch (error) {
    console.log("Error At Home Route auth/ \t", error.message);
    return res.status(500).json({
      message: "Error at Server",
      success: false,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({
        message: "Please Provide All Required Info",
        success: false,
      });
    }

    const existingUser = await UserModel.findOne({
      email: email,
    });
    const token = await gentoken({
      id: existingUser._id,
      name: existingUser.name,
    });
    if (await comparePassword(password, existingUser.password)) {
      res.cookie("jwt", token, { maxAge: 7 * 24 * 24 * 60, httpOnly: true });
      return res.status(200).json({
        message: "Login Successful",
        success: true,
      });
    } else {
      return res.status(400).json({
        message: "Login Failed",
        success: false,
      });
    }
  } catch (error) {
    console.log("Error At Home Route auth/ \t", error.message);
    return res.status(500).json({
      message: "Error at Server",
      success: false,
    });
  }
};

export const checkAuth = async (req, res) => {
  try {
    // console.log(req);
    let token = req.headers.authorization;
    token = token.split(" ")[1];

    console.log(token);

    // return res;

    console.log(await checktoken(token));
  } catch (error) {
    console.log("Error At Token Check/ \t", error.message);
    return res.status(500).json({
      message: "Error at Server",
      success: false,
    });
  }
};
