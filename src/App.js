import logo from './logo.svg';
import './App.css';
import Header from './components/header.js'
import Preview from './components/preview.js';
import CategoriesPreview from './components/categories-preview.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <Preview/>
        <CategoriesPreview/>
      </div>
    </div>
  );
}

export default App;
