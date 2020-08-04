import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Category from './category/index'
import CategoryList from './category-list/index'
import { remove, select, unselect } from './actions/index';
import { useSelector, useDispatch } from 'react-redux'
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { StyledTypography } from './styles';
import { setDataToLocalStorage } from '../model-data'

export default function LocationsApp() {
  const tabs = ['List', 'New', 'View', 'Edit', 'Delete'];
  const { categoryList, selectedCategory } = useSelector(state => state);

  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);
  const [title, setTitle] = useState(tabs[0]);

  useEffect(() => {
    setDataToLocalStorage(categoryList);
    setTab(0);
  }, [categoryList])

  const handleChange = (event, newValue) => {
    if (newValue === 1 || newValue === 0) {
      dispatch(unselect())
    }
    setTab(newValue);
    setTitle(tabs[newValue]);
  };

  const onSelectItem = (itemId) => {
    dispatch(select(itemId));
  }

  const onRemove = () => {
    dispatch(remove(selectedCategory));
  }

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <StyledTypography >
            {title}
          </StyledTypography>
          <Tabs value={tab} onChange={handleChange} TabIndicatorProps={{ style: { background: "#FFFFFF" } }}>
            <Tab label={tabs[0]} icon={<ListIcon />} component={Link} to="/" />
            <Tab label={tabs[1]} icon={<AddIcon />} component={Link} to="/new" />
            <Tab label={tabs[2]} disabled={!selectedCategory} icon={<VisibilityIcon />} component={Link} to={`/view/${selectedCategory?.id}`} />
            <Tab label={tabs[3]} disabled={!selectedCategory} icon={<EditIcon />} component={Link} to={`/edit/${selectedCategory?.id}`} />
            <Tab label={tabs[4]} onClick={onRemove} disabled={!selectedCategory} icon={<DeleteIcon />}
              component={Link} to="/" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box p={3}>
        <Switch>
          <Route exact path="/" render={(props) => <CategoryList onSelectItem={onSelectItem} {...props} />} />
          <Route path="/new" render={(props) => <Category editMode={true} {...props} />} />
          <Route path="/view/:categoryId" render={(props) => <Category editMode={false} {...props} />} />
          <Route path="/edit/:categoryId" render={(props) => <Category editMode={true} {...props} />} />
        </Switch>
      </Box>
    </Router>
  );
}
