Packages

i)  npm install react-icons --save (to install react-icons)
ii) npm install react-scripts --save ('react-scripts' is not recognized as an internal or external command, operable program or batch file.)
iii) npx json-server --watch data/db.json --port 3000 (fake rest api)

==============================================================================================================================

Concepts covered:

1. Why react?
    to reduce the javascript complexcity.

2. setup for react
    i)   node.js.
    ii)  npm.
    iii) npx create-react-app app-name.
    iv)  in the emmet add a language (javascript : javascriptreact) => file => preference => search emmet.
    v)   es7 extension for code snippet [ctrl+alt+r (rafce - create a react arrow function component with ES7)].

3. JSX (javascript and html)
    It is the mix of javascript and html code the html code will be in the return of the functional component.

4. Functional components
    A React functional component is a simple JavaScript function that accepts props and returns a React element. After the introduction of React Hooks, writing functional components has become the ​standard way of writing React components in modern applications.

5. react styling
    Two option :-
    1)Inline css
        i) {} using the currly brackets inside that we can add a name for the style and we can write the css in 
        seperate variable to multiple use.
        ii) using stylee={} this format.
    2)External css
        we can create a seperate name and id for the element and we can write css in seperate file.

6. click events
    There are may events that we can handle using this like:-
    1. click
    2. Dblclick
    3. onchange etc....

    in the click events if we are passing a function with parameters it will be ececuted wew page is loaded
    to avoid that in an ananymous funtion call that function.

    ex: 
        onClick={() => fun(par1,par2)}

7. useState hook
    This is a hook which is used to handle the state which is introduced in functional component.

    syntax: Const [value,setValue] = useState(initial value when page is loaded);

8. keys
9. icons    
    i)  npm install react-icons --save (to install react-icons)

10. Props and prop drilling
    passing some value to its child components like a parameter.
    
11. controlled inputs

12. useRef

13. useEffect

==============================================================================================================================

HOOKS COVERED:

1.useState :-

    This is a hook which is used to handle the state which is introduced in functional component.

    syntax: Const [value,setValue] = useState(initial value when page is loaded);

2. useRef:-

    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.

3. useEffect:-

    By using this Hook, you tell React that your component needs to do something after rendering. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.

    it will be rendered only very first time.

    syntax: useEffect(setup, dependencies?)

    if there is no dependencies it will render continously to avoide it use the dependency which is second para meter and its an array.

    it will be rendered only when the state of the component change

    



