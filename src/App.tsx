import Navigation from './Routes/Navigation';
import AppThemeProvider from './Theme/AppThemeProvider';


function App() {
  return (
    <div className="App">
            <AppThemeProvider>
                <Navigation />
            </AppThemeProvider>
    </div>
  );
}

export default App;
