import '../App.css';

function Preview() {
  return (
    <div className="App">
      <img className="preview-image" src='../../public/assets/MoviePoster.png'></img>
      <div className="preview-controls">
            <button> Watch </button>
            <button> More Info </button>
            <button> Save to List </button>
      </div>
    </div>
  );
}

export default Preview;
