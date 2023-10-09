import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGO_URL}`
    );
    console.log("Conexão com o banco bem sucedida!");
  } catch (error) {
    console.error("Erro ao se conectar com o banco", error);
  }
};
