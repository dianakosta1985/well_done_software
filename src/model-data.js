
export const getDataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('myData'));
}

export const setDataToLocalStorage = (data) => {
    if (data && data.length > 0) {
        localStorage.setItem('myData', JSON.stringify(data));
    }
}

