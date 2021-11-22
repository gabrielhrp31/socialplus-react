import Home from "./views/Home";
import GlobalStyles from "./styles/globalStyles";
import CustomThemeProvider from "./components/CustomThemeProvider";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <CustomThemeProvider>
                <GlobalStyles/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/friends" element={<Home/>}/>
                    <Route path="/user/:id" element={<Home/>}/>
                    <Route path="/profile" element={<Home/>}/>
                </Routes>
            </CustomThemeProvider>
        </>
    );
}

export default App;
