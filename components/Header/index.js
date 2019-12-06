// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('header');
    const date = document.createElement('span');
    const h1Lambda = document.createElement('h1');
    const temp = document.createElement('span');

    header.className = 'header';

    date.className = 'date';
    date.textContent = 'SMARCH 28, 2019';

    h1Lambda.textContent = 'Lambda Times';

    temp.className = 'temp';
    temp.textContent = '98°';

    header.appendChild(date);
    header.appendChild(h1Lambda);
    header.appendChild(temp);

    header.appendChild(date);
    header.appendChild(h1Lambda);
    header.appendChild(temp);

    headerContainer = document.querySelector('.header-container');
    headerContainer.appendChild(header);

    console.log(header);
}
