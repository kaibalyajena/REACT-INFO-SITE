// what to render, where to render
// global variable react-dom with a render method
// ReactDOM.render(<h1>html code from js file</h1>,document.getElementById('root'));


// feature of react (breaking into small reusable components)

function Heading(){
    return(
        <h1>this is the heading</h1>
    )
}

function MainContent(){
    return (
        <p>this is the main content</p>
    )
}

ReactDOM.render(
    <div>
        <Heading/>
        <MainContent/>
    </div>,
    document.getElementById('root')
)
