import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./home"
import LogIn from "./login"

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/login",
      element:<LogIn/>
    }
  ]
);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )

}  


export default App
