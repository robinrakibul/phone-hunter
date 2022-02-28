const searchPhoneModel=()=>{
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    // empty input field
    searchInput.value='';
    // save url data
    const url= `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    //fetching data
    fetch(url)
    .then(res=> res.json())
    .then(data => checkCondition(data))
}

