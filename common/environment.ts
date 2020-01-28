export const environment = {
    server: { port: process.env.SERVER_PORT || 3000 }, // installar o process env
    db: { url: process.env.DB_URL || "mongodb://localhost/driveapi" },
    security: { saltRounds: process.env.SALT_ROUNDS || 10 }
}