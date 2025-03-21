import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={< Signup />} />
          <Route path="/signup" element={< Signin />} />
          <Route path="/signup" element={< Dashboard />} />
          <Route path="/signup" element={< SendMoney />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App