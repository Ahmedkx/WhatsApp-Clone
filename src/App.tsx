import Navigation from './Routes/Navigation';
import AppThemeProvider from './Theme/AppThemeProvider';
import { SelectedUserProvider } from './Context/SelectedUserContext';
import { SelectedSidebarProvider } from './Context/SelectedSidebarContext';
import "./app.css"


function App() {
  return (
    <div className="App">
        <SelectedUserProvider>
          <SelectedSidebarProvider>
              <AppThemeProvider>
                  <Navigation />
              </AppThemeProvider>
          </SelectedSidebarProvider>
        </SelectedUserProvider>
    </div>
  );
}

export default App;