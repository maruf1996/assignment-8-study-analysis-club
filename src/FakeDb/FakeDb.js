const setFakeData=(name,time)=>{
    localStorage.setItem(name,time);
}

const getFakeData=(name)=>{
    // console.log(localStorage.getItem(name))
    return localStorage.getItem(name);
}

export { setFakeData, getFakeData };

