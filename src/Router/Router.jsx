import { createBrowserRouter  } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Layout/Home";
import ProjectDetail from "../Layout/ProjectDetail";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/project-detail/:id',
          element: <ProjectDetail></ProjectDetail>,
          loader: async ({params}) => {
            const res = await fetch("/project.json")
            const data = await res.json()
            // console.log(data);
            const sData = data.find(d => d.id == params.id)
            // console.log(sData);
            return sData
          }
        },
      ]
    },
]);


export default router;