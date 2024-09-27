import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/mongoose";
import express from "express";
import connectDB from "./db/db.js";
import Admin from "./model/adminModel.js";
import dotenv from "dotenv";
import logFile from "./error/logFile.js";
import session from "express-session";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

AdminJS.registerAdapter(AdminJSMongoose);


    const adminJs = new AdminJS({
        resources: [
            {
                resource: Admin,
                options: {
                    properties: {
                        password: {
                            isVisible: true
                        },
                        email: {
                            isId: true,
                            isVisible: { list: true, show: true, edit: true }
                        }
                    },
                    actions: {
                        new: {
                            isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.role === "admin"
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

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(adminJs.options.rootPath, router);

app.listen(port, () => console.log("Server started on port 3000"));