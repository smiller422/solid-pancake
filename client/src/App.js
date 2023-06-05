import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useMutation,
} from "@apollo/client";
import Navbar from "./components/Navbar";
import About from "./components/pages/About.js";
import Projects from "./components/pages/Projects.js";
// import Home from "./components/pages/Home.js";
import Footer from "./components/Footer/index.js";
import Login from "./components/LoginUp/Login.js";
import Contact from "./components/pages/Contact.js";
import { LOGIN, SIGNUP } from "../../server/schemas/resolvers.js";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [currentPage, setCurrentPage] = useState("Login");
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");

  const handlePageChange = () => {
    setCurrentPage(Login);
  };

  const [login] = useMutation(LOGIN);
  const [signup] = useMutation(SIGNUP);

  const handleLoginSubmit = async (event, formState) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: {
          email: formState.loginEmail,
          password: formState.loginPassword,
        },
      });
      const token = data?.login?.token;
      if (token) {
        // Handle successful login
      } else {
        setLoginError("Invalid credentials");
      }
    } catch (err) {
      setLoginError(err.message);
    }
  };

  const handleSignupSubmit = async (event, formState) => {
    event.preventDefault();
    try {
      const { data } = await signup({
        variables: {
          email: formState.signupEmail,
          password: formState.signupPassword,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      const token = data?.signup?.token;
      if (token) {
        // Handle successful signup
      } else {
        setSignupError("Error signing up");
      }
    } catch (err) {
      setSignupError(err.message);
    }
  };

  return (
    <ApolloProvider client={client}>
      {/* <div> */}
      <Router>
        <div className="bg-gray-200 min-h-screen">
          <Navbar
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
          <header className="bg-white p-4">
            {/* <h1 className="text-2xl font-bold text-center">app.js h1</h1> */}
          </header>
          <main className="container mx-auto p-4">
            {/* <p className="text-lg">app.js p tag</p> */}
            <Routes>
              <Route
                path="/"
                element={
                  <Login
                    handleLoginSubmit={handleLoginSubmit}
                    handleSignupSubmit={handleSignupSubmit}
                    loginError={loginError}
                    signupError={signupError}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route
                path="/login"
                element={
                  <Login
                    handleLoginSubmit={handleLoginSubmit}
                    loginError={loginError}
                  />
                }
              />
              <Route
                path="/signup"
                element={
                  <Login
                    handleSignupSubmit={handleSignupSubmit}
                    signupError={signupError}
                  />
                }
              />
              {/* <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Login />} /> */}
              <Route path="/contact" component={Contact} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      {/* </div> */}
    </ApolloProvider>
  );
}

export default App;
