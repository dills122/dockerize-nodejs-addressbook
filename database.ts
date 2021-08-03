import Seq, { Sequelize } from "sequelize";
const sequelize = new Sequelize(
  process.env.DB_SCHEMA || "postgres",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: process.env.DB_SSL == "true",
    },
  }
);
const Person = sequelize.define("Person", {
  firstName: {
    type: Seq.STRING,
    allowNull: false,
  },
  lastName: {
    type: Seq.STRING,
    allowNull: true,
  },
});
export default {
  sequelize: sequelize,
  Person: Person,
};
