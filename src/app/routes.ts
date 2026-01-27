import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import FuturesMaries from "./pages/FuturesMaries";
import Paroisses from "./pages/Paroisses";
import Musiciens from "./pages/Musiciens";
import APropos from "./pages/APropos";
import RootLayout from "./components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: "futurs-maries",
        Component: FuturesMaries,
      },
      {
        path: "paroisses",
        Component: Paroisses,
      },
      {
        path: "musiciens",
        Component: Musiciens,
      },
      {
        path: "a-propos",
        Component: APropos,
      },
    ],
  },
]);