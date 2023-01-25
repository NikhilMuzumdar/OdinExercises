function manipulate() {
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';
    container.appendChild(content);

    const red = document.createElement('p');
    red.textContent = "Hey I'm red!";
    red.style.color = 'red'
    container.appendChild(red)

    const heading = document.createElement('h3')
    heading.textContent = "I’m a blue h3!"
    heading.style.color = 'blue'
    container.appendChild(heading)

    const divbar = document.createElement('div')
    divbar.style.backgroundColor = 'pink'
    divbar.style.border = '2px'
    divbar.style.maxWidth = '300px'
    divbar.style.border = 'thick solid black'
    divbar.style.textAlign = 'center'

    const subHeading = document.createElement('h1');
    subHeading.textContent = "I'm in a div";
    divbar.appendChild(subHeading)
    
    const para = document.createElement('p');
    para.textContent = "ME TOO!";
    divbar.appendChild(para)
    
    container.appendChild(divbar)
}


// Method 1


// Method 2
const btn = document.querySelector('#bt2');
btn2.onmouseover = () => { alert('Hello World')}

// Method 3
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('mouseover', () => {
  console.log("Hello World");
});

// Another button
const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', function (e) {
  console.log(e.target);
  console.log("Worked")
});