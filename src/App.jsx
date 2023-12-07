import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyRoutes from "./routers/MyRouters";

function App() {

    return (
        <section className="h-screen">
            <BrowserRouter>
                <Navbar />
                <MyRoutes />
            </BrowserRouter>
        </section>
    );
}

export default App;
