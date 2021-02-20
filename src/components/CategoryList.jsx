import React from 'react';
import {CategoryItem} from "./CategoryItem";

function CategoryList(props) {
    const {catalog = []} = props

    return (
        <div>
            <div className="catalog-list">
                {catalog.map((item) => (<CategoryItem key={item.idCategory} {...item}/>))}
            </div>
        </div>
    )
}

export {CategoryList}