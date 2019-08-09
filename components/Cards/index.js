// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
{/* <div class="card">
  <div class="headline">{Headline of article}</div>
  <div class="author">
    <div class="img-container">
      <img src={url of authors image} />
    </div>
    <span>By {authors name}</span>
  </div>
</div> */}

// Create a card for each of the articles and add the card to the DOM.




const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(object => {
  const items = object.data.articles.bootstrap

  items.forEach(article => {
cardContainer.append(createCard(article))

    })

  const js = object.data.articles.javascript
   js.forEach(article => {
   cardContainer.append(createCard(article))

    })

    const jq = object.data.articles.jquery
    jq.forEach(article => {
    cardContainer.append(createCard(article))

    })

    const tech = object.data.articles.technology
     tech.forEach(article => {
     cardContainer.append(createCard(article))

    })

    const node = object.data.articles.node
    node.forEach(article => {
    cardContainer.append(createCard(article))

    })

})
.catch(error => {
console.log('error', error)
})

  function createCard(object){
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const photoCon = document.createElement('div');
  const photo = document.createElement('img');
  const credit = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    photoCon.classList.add('img-container');

    headline.textContent = object.headline;
    photo.src = object.authorPhoto;
    photo.alt = 'Photo of author';
    credit.textContent = `By ${object.authorName}`;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(photoCon);
  photoCon.appendChild(photo);
  author.appendChild(credit);

  return card;
}