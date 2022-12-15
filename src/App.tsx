import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Post } from "./interfaces";
import Layout from "./components/Layout";
import PostList from "./pages/PostList";
import PostView from "./pages/PostView";
import PostWrite from "./pages/PostWrite";

function App() {
  return (
    <Routes>
      <Route path="/react-editor-sample-improved" element={<Layout />}>
        <Route index element={<PostList />} />
        <Route
          path="/react-editor-sample-improved/PostWrite"
          element={<PostWrite />}
        />
        <Route
          path="/react-editor-sample-improved/PostView/:id"
          element={<PostView />}
        />
      </Route>
    </Routes>
  );
}

export default App;
