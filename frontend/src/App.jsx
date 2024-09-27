import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Loader from "./common/Loader";
import PageTitle from "./components/PageTitle";
import SignUp from "./pages/Authentication/SignUp";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import User from "./pages/user/User";
import DefaultLayout from "./layout/DefaultLayout";
import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Toaster } from "react-hot-toast";
import SignIn from "./pages/Authentication/Signin";
import Auth from "./pages/Authentication/Auth";

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Signin" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup" />
              <SignUp />
            </>
          }
        />
        <Route
          path="*"
          element={
            <DefaultLayout>
              <Routes>
                <Route
                  path="/dashboard"
                  index
                  element={
                    <Auth>
                      <>
                        <PageTitle title="Dashboard" />
                        <Dashboard />
                      </>
                    </Auth>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <Auth>
                      <>
                        <PageTitle title="Profile" />
                        <Profile />
                      </>
                    </Auth>
                  }
                />
                <Route
                  path="/user"
                  element={
                    <Auth>
                      <>
                        <PageTitle title="Users" />
                        <User />
                      </>
                    </Auth>
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <Auth>
                      <>
                        <PageTitle title="Admin" />
                        <Admin />
                      </>
                    </Auth>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <Auth>
                      <>
                        <PageTitle title="Settings" />
                        <Settings />
                      </>
                    </Auth>
                  }
                />
              </Routes>
            </DefaultLayout>
          }
        />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#cee5f2",
            color: "#000",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "purple",
              secondary: "black",
            },
          },
        }}
      />
    </>
  );
}

export default App;
