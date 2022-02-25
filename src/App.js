import { BrowserRouter  } from 'react-router-dom';
import './App.css' 
import AppRouter from './components/appRouter'; 
import Navbar from './components/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Loader from './components/Loader';

function App() { 
  const [user, loading, error] = useAuthState(auth)
  
  if(loading) return <Loader/>

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
