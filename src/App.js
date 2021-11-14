import Home from "./views/Home";
import GlobalStyles from "./styles/globalStyles";
import CustomThemeProvider from "./components/CustomThemeProvider";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

	 return (
		  <>
				<CustomThemeProvider >
					 <GlobalStyles />
					 <Navbar/>
					 <Routes>
						  <Route path="/" element={<Home />} />
					 </Routes>
				</CustomThemeProvider>
		  </>
	 );
}

export default App;
