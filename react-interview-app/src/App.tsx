import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import HomePage from "@/routes/home"
import PublicLayout from "@/layouts/public-layout"
import AuthenticationLayout from "@/layouts/auth-layouts";
import SignInPage from "@/routes/sign-in";
import SignUpPage from "@/routes/sign-up";
import ProtectRoutes from "@/layouts/protected-routes";
 import { MainLayout } from "@/layouts/main-layout";
 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />} >
        <Route index element={<HomePage/>}/>
        </Route>
        {/*authentication layout*/}
        <Route element={<AuthenticationLayout />}>
           <Route path="/signin/*" element={<SignInPage />} />
           <Route path="/signup/*" element={<SignUpPage />} />
         </Route>

         <Route
           element={
             <ProtectRoutes>
               <MainLayout />
             </ProtectRoutes>
           }
         ></Route>
      </Routes>
    </Router>
  )
}

export default App
