import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import HomePage from "@/routes/home"
import PublicLayout from "@/layouts/public-layout"
import AuthenticationLayout from "@/layouts/auth-layouts";
import SignInPage from "@/routes/sign-in";
import SignUpPage from "@/routes/sign-up";
import ProtectRoutes from "@/layouts/protected-routes";
 import { MainLayout } from "@/layouts/main-layout";
 import { Dashboard } from "@/routes/dashboard";
import { Generate } from "@/components/generate";
import { CreateEditPage } from "@/routes/create-edit-page";
import  {MockLoadPage}  from "@/routes/mock-load-page";
import { MockInterviewPage } from "@/routes/mock-interview-page";
 
import Feedback from "@/routes/feedback";

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
         >
           <Route element={<Generate />} path="/generate">
           
           <Route index element={<Dashboard />} />
           <Route path=":interviewId" element={<CreateEditPage />} />
           <Route path="interview/:interviewId" element={<MockLoadPage />} />
           <Route
               path="interview/:interviewId/start"
               element={<MockInterviewPage />}
             />
             <Route path="feedback/:interviewId" element={<Feedback />} />
           </Route>



         </Route>
      </Routes>
    </Router>
  )
}

export default App
