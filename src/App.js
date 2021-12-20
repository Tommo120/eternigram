import './App.css';
import NavigationBottom from './components/NavigationBottom';
import NavigationTop from './components/NavigationTop';
import UserPost from './components/UserPost';

function App() {
  return (
    <div className="App">
      <NavigationTop/>
      <div className="contentArea">
        <UserPost/>
        <UserPost/>
        <UserPost/>
        <UserPost/>
      </div>
      <NavigationBottom/>
    </div>
  );
}

export default App;
