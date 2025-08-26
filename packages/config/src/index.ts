import * as path from 'path';
import * as fs from 'fs';
import dotenv from 'dotenv';

// 找到根目录的.env
const rootEnvPath = path.resolve(__dirname, "../../../../.env");

if (fs.existsSync(rootEnvPath)) {
    dotenv.config({ path: rootEnvPath });
} else {
    console.warn(`警告: 根目录没有找到${rootEnvPath}文件。`);
}

export const config = {
    app_name: process.env.app_name ?? "laboratory",
    frontend_port: process.env.frontend_port ?? 3000,
    backend_port: process.env.backend_port ?? 8080,
    backend_url: process.env.backend_url ?? "localhost",
    jwt_secret: process.env.jwt_secret ?? "123123",
    jwt_expires_in: process.env.jwt_expires_in ?? "7d",
}