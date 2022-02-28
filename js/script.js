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
            showResult(data.data.slice(0,20)); //Show maximum of 20 data
        }
        else {
          alert('No result found');
        }
    })
}

// create card for each phone with results from API
const showResult = phones => {
    const searchResult = document.getElementById('search-mobile');
    searchResult.innerHTML='';
        phones.forEach(phone =>{
            const div = document.createElement('div');
            div.classList.add('col');

            div.innerHTML=`
            <div class="container card h-100 w-50 mt-3 mb-3 rounded-3">
                <p class="card-title font-small text-center">${phone.phone_name}</p>
                <img src="${phone.image}" class="card-img-top mw-100" alt="..." title="${phone.phone_name}">
                <button onclick="showDetails('${phone.slug}')" class="btn btn-outline-primary mt-3" type="submit">Details</button>   
            </div>`;
            searchResult.appendChild(div);
        })
}


// Show details while clicked
const showDetails = phoneId =>{
    const url=`https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDetail(data.data))
}

const displayDetail = slug =>{
    const phoneInfo = document.getElementById('phone-info');
    phoneInfo.innerHTML='';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML=`
        <h3 class="card-title font-small text-center ms-3 me-3">Brand Name: ${slug.brand}</h3>
        <h5 class="card-title font-small text-center ms-3 me-3">Phone Name: ${slug.name}</h5>
        <small class="ms-3 me-3">Release Date: "${slug.releaseDate}"</small>
        <img src="${slug.image}" class="card-img-top img-fluid mx-auto w-50 m-3" alt="...">
        <h4 class="ms-3 me-3 text-center">Main Features</h4>
        <p class="card-title font-small text-center ms-3 me-3">Storage: ${slug.mainFeatures.storage}</p>
        <p class="card-title font-small text-center ms-3 me-3">Display Size: ${slug.mainFeatures.displaySize}</p>
        <p class="card-title font-small text-center ms-3 me-3">Chipset: ${slug.mainFeatures.chipSet}</p>
        <p class="card-title font-small text-center ms-3 me-3">Memory: ${slug.mainFeatures.memory}</p>
        <p class="card-title font-small text-center ms-3 me-3">Sensors: ${slug.mainFeatures.sensors}</p>

        <h4 class="ms-3 me-3 text-center">Others</h4>

        <p class="card-title font-small text-center ms-3 me-3">WLAN: ${slug.others.WLAN}</p>
        <p class="card-title font-small text-center ms-3 me-3">Bluetooth: ${slug.others.Bluetooth}</p>
        <p class="card-title font-small text-center ms-3 me-3">GPS: ${slug.others.GPS}</p>
        <p class="card-title font-small text-center ms-3 me-3">NFC: ${slug.others.NFC}</p>
        <p class="card-title font-small text-center ms-3 me-3">Radio: ${slug.others.Radio}</p>
        <p class="card-title font-small text-center ms-3 me-3">USB: ${slug.others.USB}</p>
        `
    phoneInfo.appendChild(div);
}