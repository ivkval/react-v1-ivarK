Tasks

// Basic Component
Create a component called <MyComponent> in the components folder and render a <h1>My First Component</h1>
Use MyComponent in App.js

// Basic Prop
Add a "title" prop on MyComponent and make it render "It Works"

// Passing props to a child component
Refactor the <h1> in MyComponent to be a <Title> component. It should render "It Works". Refactor means that the <h1> should live inside the newly created <Title> component

// Lists
Create an array const food = ['Pizza', 'Hamburger', 'Coke'];
Render this list in App.js with array.map(). Remember to add a key.

// Lists Component
Create a <Food> component
Use this i App.js
Add "food" prop
Render the food list in the <Food> component by using the prop

// Children prop
Create a <Wrapper> component
Make it possible to render children (props.children) in <Wrapper>

// Styling
Add necessary styling (className='flex') to flex the items on <Wrapper>

// Event
Add a <button> to App.js
Listen to click-event on this button

// Input
Add an input field to App.js
Listen to change-event on this field

// Make the input field controlled (state)
Use useState to store the input value. And add the value to the input field (controlled)
When clicking the button above alert the content of the inputfield

// Refactor button and input
Add a <Alert> component
Add the <input> and logic from above to this component

// Callback (lift state) (sending a functions as a prop)
Make it possible to read the content from the input from App.js by clicking the button (which is inside App.js)
(See last video if unclear)
