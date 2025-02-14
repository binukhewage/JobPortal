import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
 } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobPage from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage";
import JoPage from "./pages/JoPage";
import AddJobPage from "./pages/AddJobPage";



function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobPage/>}/>
      <Route path='/add-job' element={<AddJobPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
      <Route path='/jobs/:id' element={<JoPage/>}/>
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App;
