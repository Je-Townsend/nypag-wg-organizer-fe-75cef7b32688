import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthPage } from "./components/pages/AuthPage";
import { ProtectedPage } from "./components/pages/ProtectedPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const [isLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedPage isLoggedIn={isLoggedIn} />}>
          <Route path="dashboard" element={<></>} />
          <Route path="groups" element={<></>} />
          <Route path="groups/:id" element={<></>} />
          <Route path="groups/modify/:id" element={<></>} />
          <Route path="groups/create" element={<></>} />
          <Route path="profile/:id" element={<></>} />
          <Route path="tasks/:id" element={<></>} />
          <Route path="groups/create" element={<></>} />
          <Route path="groups/modify/:id" element={<></>} />
          <Route path="leaderboard" element={<></>} />
          <Route path="friends" element={<></>} />
          <Route path="friends/connect/:id" element={<></>} />
        </Route>

        <Route path="/auth" element={<AuthPage />}>
          <Route path="login" element={<></>} />
          <Route path="reset-password" element={<></>} />
          <Route path="registration" element={<></>} />
        </Route>

        <Route path="*" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
