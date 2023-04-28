import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Songs from "./pages/Library/Songs";
import NowPlaying from "./pages/Library/NowPlaying";
import Playlist from "./pages/Playlist";
import Categories from "./pages/Categories";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import AppProvider from "./state/provider";
import Library from "./pages/Library/Index";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Landing />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="root" element={<RootLayout />}>
          <Route path="home" element={<Home />} />
          {/* <Route path="library" element={<LibraryLayout />} /> */}
          <Route path="library" element={<Library />}>
            <Route path="songs" element={<Songs />} />
            <Route path="playing" element={<NowPlaying />} />
          </Route>
          <Route path="playlist" element={<Playlist />} />
          <Route path="categories" element={<Categories />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    )
  );

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
