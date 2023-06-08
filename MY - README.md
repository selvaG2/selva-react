Packages

i)  npm install react-icons --save (to install react-icons)
ii) npm install react-scripts --save ('react-scripts' is not recognized as an internal or external command, operable program or batch file.)
iii) npx json-server --watch data/db.json --port 3100 (fake rest api)

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

14. API fetch
    Read:-

    Create a seperate variable to store the api url ( Why seperate variable is if the link has to be updated we dont need to 
    do the updation all over the code just do it in the variable to avoid errors).

    using useEffect hook we are going to retrive the datas from the server only once to increase the app speed.

    inside the use effect hook we are creatinga fetch async arrow function.

    using try catch block we are fetching the data, create a seperate variable for storing the response with fetch method of await to wait for the response

    create a listitems to store the response this also in await manner wait untill the response in converted into json

    in the set item add that list items to display the fetched details

    Here some error handlings:

    if the api fails :-

            create a seperate condition if the response is not ok (!response.ok) then throw an error message
    
    if the error is in fetching process :-

            create a seperate state to main taoin the error and initially it will be null, if there is no fetch error set it to null ,if there is any fetch error catch in the catch block catch it and send it to the fetch error fun (setfetchError).

    if all is working perfectly it doesm`t mean all tym the data will fetch faster to make the user interactive :-

            set a loader time for the fetchItems function and call the fetchItems function in async method last() is used to imediately invoke the function with 2 sec delay 

            to maintain this loading state create a seperatye state initially is loading willbe true after the fetching of data make the loading state to false
    
    The error messages should not get messed up to avoid that :-

    all the messages will be printed in the content component make that component to be in main tag inside that 

        1. isLoading is processed displauy a message wit the help of && symbol 

        2. if any error message id catched the display it using &&

        3. if that both process are not happening then only u should do the logic (!isLoading && !fetchError &&)

        4. there is a main already in content component remove that and add <> </> this is called as React.fragment

    ApiRequest File:-

        Create a async function with the parameter of url as default parameter of '' empty string, option obj for POST,GET,PATCH,DELETE, err message for if there is any error this will carry out.

        within try catch block create a variable to store the response which is fetching the details from the url and with the req option, if there is some error in the response error will be thrown

        if try block throw any error catch block will catch that and it will store into it

        finally will execute all tym with the error msg


    Create:-

        make the add item function as async function 

        create a option object inside that

            1. method it is post
            2. headers is an another obj which holds type of the content
            3. body will have the datas thats sent by stringfying
            4. create a result that will have the result objects/strings
            5. with await call the apiRequest function with url andf option para meter
            6. if the response came maintain the fetcherror state to be in null 

    Update :-

        make the handle check function as async function 

        create an another variable to take the particular set of values to be updated using in the listitem apply filter property of item.id == id which the functuion params

        create a option object inside that

            1. method it is patch
            2. headers is an another obj which holds type of the content
            3. body will have the datas thats sent by stringfying
            NOTE: Here we just need to update only the particular   objects particular value for that checked property of  myitems[0] why 0 is there will be only one arr element that sin index 0 with checked property
            4. create a req url to req tthe server for particular id 
            5. create a result that will have the result objects/strings
            6. with await call the apiRequest function with url andf option para meter
            7. if the response came maintain the fetcherror state to be in null 

    Delete:-

        some changes method to delete

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

    if there is no dependencies it will render continously to avoide it use the dependency which is second para meter and its an array.

    it will be rendered only when the state of the component change

    mainly used for api calls

    syntax: useEffect(setup, dependencies?)

==============================================================================================================================


need to start from 6:01:31

note:- 

need to concentrate on all topics and work more on each topic seperately.



                                CONSISTENCY IS A KEY FOR SUCESS 🔑 ...!
                                        WORK HARDER THEN THE HARDEST BROTHER ..!


    



