// what to render, where to render
// global variable react-dom with a render method

// ReactDOM.render(<h1>html code from js file</h1>,document.getElementById('root'));

// writing above statement in vanilla js
const h = document.createElement("h1")
h.textContent="this is a heading"
h.className="header"
document.getElementById('root').append(h)


// feature of react (breaking into small reusable components)  (it's composable)

// function Heading(){
//     return(
//         <h1>this is the heading</h1>
//     )
// }

// function MainContent(){
//     return (
//         <p>this is the main content</p>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Heading/>
//         <MainContent/>
//     </div>,
//     document.getElementById('root')
// )





//jsx(javascipt xml)


// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// <h1 class="header">

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 */

// JSX
ReactDOM.render(element, document.getElementById("root"))
