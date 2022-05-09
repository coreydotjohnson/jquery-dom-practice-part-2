function makeNewMovieObj() {
    const title = $('#movie-title').val();
    const rating = $('#movie-rating').val();
    const  newMovieObj = {title, rating}
    return newMovieObj;
}

function makeNewMovieRow(newMovieObj) {
    return `
        <tr>
            <td>${newMovieObj.title}</td>
            <td>${newMovieObj.rating}</td>
            <td><button>Delete</button></td>
        </tr>
    `
}

function addMovie() {
    $('#movie-ratings').append(makeNewMovieRow(makeNewMovieObj()));
}

$('#new-movie-form').on('submit', function(e) {
    e.preventDefault();
    addMovie();
    $('form')[0].reset();
    console.log('submitting')
})

$('#movie-ratings').on('click', 'button', function(e) {
    e.preventDefault();
    e.target.closest('tr').remove();
})