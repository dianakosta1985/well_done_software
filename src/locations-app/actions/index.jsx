export const add = (item) => {
    return {
        type: 'ADD',
        payload: item
    }
}

export const edit = (item) => {
    return {
        type: 'EDIT',
        payload: item
    }
}

export const addAll = (array) => {
    return {
        type: 'ADD_ALL',
        payload: array
    }
}

export const remove = (item) => {
    return {
        type: 'REMOVE',
        payload: item
    }
}

export const select = (item) => {
    return {
        type: 'SELECT',
        payload: item
    }
}

export const unselect = () => {
    return {
        type: 'UNSELECT'
    }
}

export default {
    add,
    edit,
    addAll,
    remove,
    select,
    unselect
}