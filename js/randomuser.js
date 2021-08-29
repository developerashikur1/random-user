const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(data => displayUsers(data.results))

};
loadUsers();

const displayUsers = results => {
    // just for images change
    const userImageDiv = document.getElementById('user-image');
    userImageDiv.textContent = '';
    const div = document.createElement('div');
    results.forEach(result => {
        console.log(result);
        // name and title change
        document.getElementById('name-title').innerText = `Hey! My name is`;
        document.getElementById('name').innerText = `${result.name.title} ${result.name.first} ${result.name.last}`;

        div.innerHTML = `
        <img id="user-picture" class="w-100 rounded-circle img-fluid shadow" src="${result.picture.large}" alt="">
        `;

        userImageDiv.appendChild(div);
        // this part for change by button
        // street
        document.getElementById('street').addEventListener('mouseover', function () {
            document.getElementById('name-title').innerText = `My address is`;
            document.getElementById('name').innerText = `${result.location.street.name}, ${result.location.street.number}`;
        })
        // city
        document.getElementById('city').addEventListener('mouseover', function () {
            document.getElementById('name-title').innerText = `My City is`;
            document.getElementById('name').innerText = `${result.location.city}`;
        })
        // coordinates
        document.getElementById('coordinates').addEventListener('mouseover', function () {
            document.getElementById('name-title').innerText = `My coordinates is`;
            document.getElementById('name').innerText = `(${result.location.coordinates.latitude}), (${result.location.coordinates.longitude})`;
        })
        // timezone
        document.getElementById('timezone').addEventListener('mouseover', function () {
            document.getElementById('name-title').innerText = `My timezone is`;
            document.getElementById('name').innerText = `(${result.location.timezone.offset}), ${result.location.timezone.description}`;
        })
    })
};