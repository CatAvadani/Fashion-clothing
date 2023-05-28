import "./categorie-map.styles.scss"
import CategoryItem from "../category-item/category-item.components";

const Categories = ({categories}) => {
   
    return (
        <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category}/>
        ))}
      </div>
    )
}

export default Categories;