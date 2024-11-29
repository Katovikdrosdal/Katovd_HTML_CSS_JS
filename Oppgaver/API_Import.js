fetch("https://jsonplaceholder.typicode.com/comments/")
.then(response => response.json()) // Convert response to JSON
.then(data => {
  const container = document.getElementById('comments-container');

  // Iterate through the comments and display them
  data.forEach(comment => {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';

    commentDiv.innerHTML = `
      <div class="comment-header">Post ID: ${comment.postId} | Comment ID: ${comment.id}</div>
      <div><strong>${comment.name}</strong></div>
      <div class="comment-email">(${comment.email})</div>
      <div>${comment.body}</div>
    `;

    container.appendChild(commentDiv);
  });
})
.catch(error => console.error('Error fetching data:', error));