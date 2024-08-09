import { DataSource, DataSourceOptions } from "typeorm";
import { DATABASE } from "./constant/constants";
import { ContactUs } from "./entities/ContactUs";
import { Gallery } from "./entities/Gallery";
import { Members } from "./entities/Member";
import { Reviews } from "./entities/Reviews";
import { Users } from "./entities/Users";
let dataSource: DataSource;

const connectDB = async (): Promise<void> => {
  try {
    dataSource = new DataSource({
      type: "mysql",
      host: DATABASE.host,
      port: DATABASE.port,
      username: DATABASE.username,
      password: DATABASE.pass,
      database: DATABASE.name,
      entities: [ContactUs, Members, Users, Gallery, Reviews],
      synchronize: true,
    } as DataSourceOptions);

    console.log("Database connected successfully");
    await dataSource.initialize();
  } catch (err) {
    console.log(`Error while connecting to database: ${err}`);
    process.exit(1);
  }
};

export { connectDB, dataSource };
