import { PrismaClient } from "@prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'

const connection = process.env.DATABASE_URL;
if (!connection) {
    throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg(connection);
const prisma = new PrismaClient({ adapter });

export default prisma;