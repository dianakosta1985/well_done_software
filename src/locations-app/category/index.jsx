import React, { useEffect } from 'react';
import { useFormFields } from "../custom-hooks/use-form-fields";
import { add, edit, unselect } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux'
import { v1 as uuidv1 } from 'uuid'
import Box from '@material-ui/core/Box';
import { Button, Container, StyledInput, StyledInputCordinate, StyledLabel } from '../styles';
import { useHistory } from "react-router-dom";
import { setDataToLocalStorage } from '../../model-data'

const Category = ({ editMode }) => {
    const { categoryList, selectedCategory } = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        setDataToLocalStorage(categoryList);
    }, [categoryList])

    const initiateState = selectedCategory ?
        {
            locationName: selectedCategory.location.name,
            address: selectedCategory.location.address,
            cordinatesX: selectedCategory.location.coordinates.split(';')[0],
            cordinatesY: selectedCategory.location.coordinates.split(';')[1],
            categoryName: selectedCategory.location.category.name
        }
        : {
            locationName: '',
            address: '',
            cordinatesX: 0,
            cordinatesY: 0,
            categoryName: ''
        }

    const [fields, handleFieldChange] = useFormFields(initiateState);

    const handleSubmit = (event) => {
        let formState = { ...fields };
        let newCategory;
        if (selectedCategory && categoryList.find(item => item.id === selectedCategory.id)) {//edit
            newCategory = {
                name: formState.locationName, address: formState.address,
                coordinates: formState.cordinatesX + ';' + formState.cordinatesY, category: { name: formState.categoryName }
            }
            dispatch(edit({ id: selectedCategory.id + '', location: newCategory }));
        } else { //add new
            newCategory = {
                name: formState.locationName, address: formState.address,
                coordinates: formState.cordinatesX + ';' + formState.cordinatesY, category: { name: formState.categoryName }
            }
            dispatch(add({ id: uuidv1() + '', location: newCategory }));
        }
        dispatch(unselect())
        history.push("/");
    }
    return (
        <>
            <Container onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" minHeight='300px'>
                    <Box display="flex" flexDirection="row">
                        <StyledLabel>
                            Location Name:
                    </StyledLabel>
                        {editMode && <StyledInput type="text" id="locationName" value={fields.locationName} onChange={handleFieldChange} required />}
                        {!editMode && fields.locationName}
                    </Box>
                    <Box display="flex" flexDirection="row">
                        <StyledLabel>
                            Address:
                    </StyledLabel>
                        {editMode && <StyledInput type="text" id="address" value={fields.address} onChange={handleFieldChange} required />}
                        {!editMode && fields.address}
                    </Box>
                    <Box display="flex" flexDirection="row">
                        <StyledLabel>
                            Cordinates:
                    </StyledLabel>
                        {editMode && <StyledInputCordinate type="number" id="cordinatesX" value={fields.cordinatesX} onChange={handleFieldChange} required />}
                        {editMode && <StyledInputCordinate type="number" id="cordinatesY" value={fields.cordinatesY} onChange={handleFieldChange} required />}
                        {!editMode && fields.cordinatesX + ';' + fields.cordinatesY}
                    </Box>
                    <Box display="flex" flexDirection="row">
                        <StyledLabel>
                            Category:
                    </StyledLabel>
                        {editMode && <StyledInput type="text" id="categoryName" value={fields.categoryName} onChange={handleFieldChange} required />}
                        {!editMode && fields.categoryName}
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="flex-end">
                        {editMode && <Button type="submit" value="Submit" />}
                    </Box>
                </Box>
            </Container>
        </>
    );
}
export default Category
