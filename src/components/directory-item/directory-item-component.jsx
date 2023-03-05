import { useNavigate } from 'react-router-dom';
import './directory-item-styles.scss';

const DirectoryItem = ({category}) =>{

  const navigate = useNavigate();

  const onNavigateHandler =()=> navigate(category.route);

    return (

      
        <div key={category.id} className="directory-container"  onClick={onNavigateHandler}>
          <div className="background-image" style={ {backgroundImage: `url(${category.imageUrl})`} }/>
          <div className="directory-body">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div> 
      </div>
    );
}

export default DirectoryItem;