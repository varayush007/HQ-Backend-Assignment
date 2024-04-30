
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path = "/" exact/>
      <Route path = "/chats" />
    </div>
  );
}

export default App;
