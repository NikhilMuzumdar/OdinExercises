const buttons = document.querySelectorAll('button')

// //  Short Way
// buttons.forEach(
//     (button) => button.addEventListener('click',
//         () => {
//             console.log(button.id);
//         }
//     )
// )


function somefunction(e) {
    console.log(e.id)
}
// Traditional way
buttons.forEach (
    function addEvent (button) {
        button.addEventListener('click', () => somefunction(button))
    }
)