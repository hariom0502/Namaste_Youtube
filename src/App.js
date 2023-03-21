import Head from "./components/Head";
import Body from "./components/Body";
import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import Watchpage from "./components/Watchpage";
import MainContainer from "./components/MainContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Demo from "./components/Demo.js"
import Demo2 from "./components/Demo2.js"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "/watch", element: <Watchpage /> },
      { path: "/demo", element: <><Demo /> <Demo2/></>},
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
