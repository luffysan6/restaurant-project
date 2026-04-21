import dotenv from "dotenv";

dotenv.config();

const ENV = {
  PORT: process.env.PORT,
  DB_URI: process.env.DBURI,
};

export default ENV;
