import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import path from 'path';


const dataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}')
    const migrationsPath: string = path.join(__dirname, './migrations/**.{ts,js}')
    const dbUrl: string | undefined = process.env.DATABASE_URL

    if(!dbUrl){
        throw new Error("missing env var  'DATABASE_URL'")
    }

    return {
        type: 'postgres',
        url: dbUrl,
        entities: [entitiesPath],
        migrations: [migrationsPath],
        logging: true
    }
}

export const AppDataSource: DataSource =  new DataSource(dataSourceConfig())