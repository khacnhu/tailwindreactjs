import './App.css';
import Content from './components/Content/Content';
import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';

function App() {
  return (
    <div className="font-sora overflow-y-auto text-14 h-screen px-4 py-4 bg-gradient-to-b  dark:from-purple-900 dark:to-purple-700 from-white to-pink-300 text-black dark:text-white">
      <NavBar/>
      <Slogan/>
      <Content/>
    </div>
  );
}

export default App;
