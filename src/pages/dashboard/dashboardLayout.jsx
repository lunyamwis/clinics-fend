import { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../global/Topbar";
import Sidebar from "../global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";

const DashboardLayout = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
               <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );

}
export default DashboardLayout;