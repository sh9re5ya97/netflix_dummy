import '../App.css';
import ListItem from './list-item'
const dummyMoviePoster='../../public/assets/MoviePoster.png';

const dummyList=[
{name:'Movie 1',image:{dummyMoviePoster},video:'',info:'Movie Summary, generic movie summary, suspense drama'},
{name:'Movie 1 Return',image:{dummyMoviePoster},video:'',info:'Movie Summary, generic movie summary, suspense drama'},
{name:'Movie 2',image:{dummyMoviePoster},video:'',info:'Movie Summary, generic movie summary, suspense drama'},
{name:'Movie 3',image:{dummyMoviePoster},video:'',info:'Movie Summary, generic movie summary, suspense drama'},
{name:'Movie 4',image:{dummyMoviePoster},video:'',info:'Movie Summary, generic movie summary, suspense drama'},
{name:'Movie 5',image:{dummyMoviePoster},video:'',info:'Movie Summary, generic movie summary, suspense drama'},

]
function CategoryList() {
  return (
    <div className="category-list-container">
      {dummyList.map((item,index)=>(<ListItem key={"name"+index} itemData={item} />))}
    </div>
  );
}

export default CategoryList;
