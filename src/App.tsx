import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Header from './components/header';
import WeatherLayout from "./components/weatherlayout";


 // Create a client
 const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App bg-dark">
        <Header title={'Simple Weather App'}/>
        <WeatherLayout />
      </div>
    </QueryClientProvider>
  );
}

export default App
