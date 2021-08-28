function LoadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => DisplayComment(data))
};
LoadComment();

function DisplayComment(comments) {
    // console.log(comments);
    const commentDiv = document.getElementById('comment');
    for (const comment of comments) {
        const div = document.createElement('div');
        div.classList.add('col-4');
        div.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title"> ${comment.name} </h5>
                <p class="card-text">${comment.body.slice(0, 150)}
                </p>
                <div class="d-flex justify-content-between">                
                <a style="text-decoration:none; color: grey;" href="#">${comment.email}</a>
                <button onclick="loadCommentDetails('${comment.id}')" class="btn bg-primary text-white">Comment Details</button>
                </div>
            </div>
        </div>
        `;
        commentDiv.appendChild(div);
    }
};

function loadCommentDetails(id) {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        .then(data => DisplayCommentDetails(data))
}

function DisplayCommentDetails(comments) {
    // console.log(comments);
    const updateDetails = document.getElementById('update-comment-details');
    updateDetails.style.display = 'block';
    updateDetails.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `
        <h1>Id: ${comments.id} </h1>
        <h2> ${comments.name} </h2>
        <p> ${comments.email} <p>
        <p> ${comments.body} </p>
        `;
    updateDetails.appendChild(div);
}