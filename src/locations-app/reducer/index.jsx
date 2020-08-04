const initialState = {
    categoryList: [],
    selectedCategory: null
}

const categoryListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                categoryList: [...state.categoryList, action.payload],
                selectedCategory: null
            };
        case 'EDIT':
            const findedItemIndex = state.categoryList.findIndex(item => item.id === action.payload.id);
            state.categoryList.splice(findedItemIndex, 1);
            return {
                ...state,
                categoryList: [...state.categoryList, action.payload],
                selectedCategory: state.selectedCategory
            }
        case 'ADD_ALL':
            return {
                ...state,
                categoryList: [...state.categoryList, ...action.payload],
                selectedCategory: null
            };
        case 'REMOVE':
            const newCategoryList = state.categoryList.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                categoryList: [...newCategoryList],
                selectedCategory: null
            };

        case 'SELECT':
            const selectedCat = state.categoryList.filter(item => item.id === action.payload)[0]
            return {
                ...state,
                categoryList: [...state.categoryList],
                selectedCategory: selectedCat
            };

        case 'UNSELECT':
            return {
                ...state,
                selectedCategory: null
            };
        default: return state;
    }
}
export default categoryListReducer;