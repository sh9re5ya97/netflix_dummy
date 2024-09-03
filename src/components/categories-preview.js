import '../App.css';
import CategoryList from './category-list';
const dummyMoviePoster='../../public/assets/MoviePoster.png';

const dummyCategoryList=[
{name:'Category 1'},
{name:'Category 2'},
{name:'Category 3'},
{name:'Category 4'},
{name:'Category 5'},
]
function CategoriesPreview() {
  return (
    <div className="category-list-container">
      {dummyCategoryList.map((item,index)=>(<CategoryList key={"name"+index} name={item.name} />))}
    </div>
  );
}

export default CategoriesPreview;
