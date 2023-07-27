import { DataSource } from "typeorm";
import { DB_URL } from './config.json';

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: DB_URL,
    useNewUrlParser: true,
    synchronize: true,
    useUnifiedTopology: true,
    logging: true,
    ssl: true,
    entities: ["src/entity/**/*.ts"],
});