import React, { useEffect } from 'react';
import './App.css';
import LocationsApp from './locations-app/index'
import { useSelector, useDispatch } from 'react-redux'
import { addAll } from './locations-app/actions/index';
import {getDataFromLocalStorage} from './model-data'

function App() {
  const { categoryList } = useSelector(state => state);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const categoryDataFromDB = getDataFromLocalStorage();
    if (categoryDataFromDB && categoryDataFromDB.length > 0 && categoryList.length === 0) {
      dispatch(addAll(categoryDataFromDB));
    }
  }, [])

  return (
    <div className="App">
        <LocationsApp/>
    </div>
  );
}

export default App;
