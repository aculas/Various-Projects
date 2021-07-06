const $gifArea = $('#gif-area'); //stores the starting div element in a variable
const $searchInput = $('#search'); //stores the search bar in a variable

//This functon uses AJAX to add a gif

function addGif(res) {
	let numResults = res.data.length;
	if (numResults) {
		let randomIdx = Math.floor(Math.random() * numResults);
		let $newCol = $('<div>', { class: 'col-md-4 col-12 mb-4' });
		let $newGif = $('<img>', {
			src: res.data[randomIdx].images.original.url,
			class: 'w-100'
		});
		$newCol.append($newGif);
		$gifArea.append($newCol);
	}
}

// Handle form submission: clear search box & make ajax call */

$('form').on('submit', async function(evt) {
	evt.preventDefault();

	let searchTerm = $searchInput.val();
	$searchInput.val('');

	const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
		params: {
			//these are found under Request parameters on GIPHY
			q: searchTerm, //this is a string called searchTerm
			api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
		}
	});
	addGif(response.data);
});

/* remove gif */

$('#remove').on('click', function() {
	$gifArea.empty();
});
