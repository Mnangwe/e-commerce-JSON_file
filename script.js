

const getBooks = async () => {
    const response = await fetch("./Assets/json/book.json");
    if(response.status !== 200) {
        throw new Error('Cannot fetch the data');
    }
    const data = await response.json();
    return data;
};

getBooks().then(data => {
    console.log(data)
    let cardHTML = ''
    data.map((book) => {
        cardHTML += `
        <div class="card">
        <img src="${book.image}" alt="Picture of${book.title}">
        <p>${book.title} by <em>${book.author} -</em><strong>${book.year_written}</strong></p>
        <h2 class="price">$${book.price}</h2>
        <p>Edition: ${book.edition}</p>
        <p><button onclick="">Add to Cart</button></p>
      </div>
        
        `
    })
    document.getElementsByClassName('books')[0].innerHTML = cardHTML;

}).catch(err => {
    console.log('Oops, something went wrong', err.message)
    // alert(err.message)
})

