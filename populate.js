require("dotenv").config();

const connectDB = require("./db/connect");

const Job = require("./models/Job");
const mockData = require("./mock-data.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Job.deleteMany();
    await Job.create(mockData);

    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
