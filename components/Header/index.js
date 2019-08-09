// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(Head, Dates, Temp) {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    temp.textContent = Temp;
    h1.textContent = Head;
    date.textContent = Dates;

    header.appendChild(date)
    header.appendChild(h1)
    header.appendChild(temp)

    console.log(header)

    const headerContainer = document.querySelector('.header-container');
    console.log(headerContainer);
    headerContainer.appendChild(header);
}
Header('Lambda Time', 'August 9, 2019', '98');