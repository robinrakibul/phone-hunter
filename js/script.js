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
    .then((data) => {
        if (data.status == true) {
            showResult(data.data.slice(0,20));
        }
        else {
          alert('No result found');
        }
    })
}

const showResult = phones => {
    const searchResult = document.getElementById('search-mobile');
    searchResult.innerHTML='';
        phones.forEach(phone =>{
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML=`
            <div class="container card h-100 w-50 mt-3 mb-3 rounded-3">
                <p class="card-title font-small">${phone.phone_name}</p>
                <img src="${phone.image}" class="card-img-top mw-100" alt="..." title="${phone.phone_name}">
            </div>`;
            searchResult.appendChild(div);
        })
}