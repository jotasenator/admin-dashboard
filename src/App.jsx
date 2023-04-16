import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Topbar } from "./scenes/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
      <div className="app">
        <main className="content">
          <Topbar />
        </main>
      </div>
    </ColorModeContext.Provider>
  );
}

export default App;
