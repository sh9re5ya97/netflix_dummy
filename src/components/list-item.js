import '../App.css';

function ListItem({itemData}) {
  return (
    <div>
      <img className="category-item" src={itemData.img}></img>

    </div>
  );
}

export default ListItem;
