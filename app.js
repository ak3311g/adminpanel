import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express from "express";
import connectDB from "./db/db.js";
import Admin from "./model/adminModel.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

const adminJs = new AdminJS({
    resources: [
        {
            resource: Admin,
            options: {
                properties: {
                    password: {
                        isVisible: false
                    }
                }
            }
        }
    ],
    rootPath: "/admin"
});

// Authentication routes 

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
    authenticate: async (email, password) => {
        const admin = await Admin
            .findOne({ email });
        if (admin) {
            if (admin.password === password) {
                return admin;
            }
        }
        return null;
    }
});

app.use(adminJs.options.rootPath, router);

app.listen(port, () => console.log("Server started on port 3000"));