// @ts-ignore
import React from "react";

interface CategoriesProps {
    value: string;
    onSetCategory: (i: number) => void;
}

const Categories: React.FC<CategoriesProps> = ({value, onSetCategory}) => {
    const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
    return(
        <div className="categories">
            <ul>
                {
                    categories.map(((categoryName, index) =>
                            <li onClick={() => onSetCategory(index)} key={index} className={value === index ? 'active' : ''}>{categoryName}</li>
                    ))
                }

            </ul>
        </div>
    )
}
export default Categories;