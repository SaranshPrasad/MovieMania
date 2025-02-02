import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"


const Body = () => {
    
   
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse />
        },
    ])

    
    return (
       <div>
        <RouterProvider router={appRouter} />
       </div>
    )
}
<<<<<<< HEAD
export default Body
=======
export default Body;
>>>>>>> 2ee4fc4 (Final Added Movie Recommendation Model)
