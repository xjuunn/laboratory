import { PrismaClient } from "../../generated/prisma";
import { config } from '@laboratory/config';
process.env.db_file = config.db_file;
export const prisma = new PrismaClient();