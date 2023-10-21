import PostPage from "../../../pages/PostPage";
import MainPage from "../../../pages/MainPage";

export const routeConfig = {
  main: {
    path: "/",
    element: <MainPage />,
  },
  post: {
    path: "/post/:postId",
    element: <PostPage />,
  },
};
