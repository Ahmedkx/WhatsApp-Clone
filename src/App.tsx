import Navigation from './Routes/Navigation';
import AppThemeProvider from './Theme/AppThemeProvider';
import { SelectedUserProvider } from './Context/SelectedUserContext';


function App() {
  return (
    <div className="App">
        <SelectedUserProvider>
            <AppThemeProvider>
                <Navigation />
            </AppThemeProvider>
        </SelectedUserProvider>
    </div>
  );
}

export default App;
