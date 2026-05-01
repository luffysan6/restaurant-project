import { response } from "express";
import FoodModel from "../model/Food.model.js";
import uploader from "../utils/uploader.js";
export const Index = async (req, res) => {
  try {
    res.status(200).json({
      message: "Welcome From Food Api",
      success: true,
    });
  } catch (error) {
    console.log("Error At Food / \t", error.message);
    return res.status(500).json({
      message: "Error at Server",
      success: false,
    });
  }
};

export const SaveFood = async (req, res) => {
  try {
    const { title, price, description, category, status } = req.body || {};
    let FileData = req.files;

    const PhotoPathArray = FileData.map((file) => file.path);

    // return;
    if (!title || !price || !description || !category) {
      return res.status(403).json({
        message: "Please Provide All The Require Info",
      });
    }

    let imageResult = await uploader(PhotoPathArray);

    const foodData = new FoodModel();
    foodData.title = title;
    foodData.description = description;
    foodData.price = price;
    foodData.category = category;
    if (status) {
      foodData.status = status;
    }
    foodData.images = imageResult;

    const result = await foodData.save();

    res.json(result);
  } catch (error) {
    console.log("Error At Food / \t", error.message);
    return res.status(500).json({
      message: "Error at Server",
      success: false,
    });
  }
};
