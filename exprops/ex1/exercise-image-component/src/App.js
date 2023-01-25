// import logo from './logo.svg';
import './App.css';
import 'https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg';

function App() {
  const URL = 'https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg'
  return (
    <main className="App">
      <image source={ URL } alternativeText='cachorro dormindo na cama' />      
    </main>
  );
}

export default App;
