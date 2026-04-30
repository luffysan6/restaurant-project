import FoodModel from "../model/Food.model.js";
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

    const PhotoArray = FileData.map((file) => file.path);

    if (!title || !price || !description || !category) {
      return res.status(403).json({
        message: "Please Provide All The Require Info",
      });
    }

    const foodData = new FoodModel();
    foodData.title = title;
    foodData.description = description;
    foodData.price = price;
    foodData.category = category;
    foodData.status = status;
    foodData.images = PhotoArray;

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
