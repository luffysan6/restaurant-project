import dotenv from "dotenv";
import process from "process";

dotenv.config();

const ENV = {
  PORT: process.env.PORT,
  DB_URI: process.env.DBURI,
};

export default ENV;
