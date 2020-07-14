const ajaxCall = () => {
	// GET to retrieve all posts
	fetch("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts")
	.then(response => response.json())
	.then(json = console.log(json))
}
const ajaxCallSpecific = () => {
	// GET all comments
	fetch("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments")
	.then(response => response.json())
	.then(json = console.log(json))
}
// POST adds a random id to te object sent
const ajaxPostRequest = () => {
	fetch("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts", {
		method: 'POST',
		body: JSON.stringify({
			title: "sint ullamco est",
			completed: true,
			userId: 14
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
	.then(response => response.json())
	.then(json => console.log(json))
}
const ajaxPutRequest = () => {
	fetch("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14", {
		method: 'PUT',
		body: JSON.stringify({
			id: 14,
			title: "sint ullamco est",
			completed: true,
			userId: 4
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
	.then(response => response.json())
	.then(json => console.log(json))
}
const ajaxDeleteRequest = () => {
	fetch("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14", {
		method: 'PUT'
	})
// empty response
}
const render = () => {
	fetch("https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts")
    .then(res => res.json())
    .then(data => {
      // Traditional for loop
      var all = "";
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        all += "<p>" + "Name: " + data[i].name + "</p>";
        console.log(all);
      }
    });
}
let getPosts = document.getElementById("getPosts");
let getComments = document.getElementById("getComments");
let createPosts = document.getElementById("createPosts");
let updatePosts = document.getElementById("updatePosts");
let deletePosts = document.getElementById("deletePosts");
let showPosts = document.getElementById("showPosts");
getPosts.addEventListener("click", ajaxPostRequest);
getComments.addEventListener("click", ajaxCallSpecific);
createPosts.addEventListener("click", ajaxPostRequest);
updatePosts.addEventListener("click", ajaxPutRequest);
deletePosts.addEventListener("click", ajaxDeleteRequest);
showPosts.addEventListener("click", render);