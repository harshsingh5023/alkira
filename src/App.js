import { SidebarContextProvider } from "./context/SideBarContext";
import "./App.css";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <SidebarContextProvider>
      <div className="App">
        <LandingPage />
      </div>
    </SidebarContextProvider>
  );
}

export default App;
