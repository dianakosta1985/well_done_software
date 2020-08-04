import React, { useState } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import CategoryIcon from '@material-ui/icons/Category';
import { ListItemIcon } from '@material-ui/core';
import { select } from '../actions/index';


const CategoryList = ({ onSelectItem }) => {
    const { categoryList, selectedCategory } = useSelector(state => state);
    const [activeIndex, setActiveIndex] = useState([])
    const dispatch = useDispatch();
    const clickHandler = (itemId) => {
        setActiveIndex([...categoryList.map(item => item.id === itemId)])
        onSelectItem(itemId)
        dispatch(select(itemId)) // add to store
    }
    return (
        <List>
            {categoryList.map((item, index) => (
                <ListItem divider={true}
                    button key={index}
                    onClick={() => clickHandler(item.id)}
                    selected={selectedCategory ? activeIndex[index] : false}>
                    <ListItemIcon>
                        <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.location.category.name} />
                </ListItem>
            ))}
        </List>
    );
}
export default CategoryList
