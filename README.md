This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## To run project

- [Available Scripts](#available-scripts)
  - npm install
  - npm start
  - npm test



## TASK 1

File structor is mostly comes with create react app. But to have some more structure i have created some folders inside src. Components is for keeping all the low order components which receives everything through props only. Containers are the high order components which controls whole page and have access to redux store and pass down those states to low order components. For testing i have used Jest and enzyme by airbnb
which are quite famous to test a react app and have many functions which helps in testing your components.

As u can application is e-commerce website where u can see the products, add them to cart, and then go to details page.

So header component is something which is common across all the pages and used on all the containers.
And passed different property value across different pages. It have access to store not directly but through its props which are passed from container components.

## TASK 2

Redux side effects : pure redux app the flow is -> some action is dispatched, and as a consequence, some state is changed. But most apps needs to connect to a server to get the data or do some analytics or talk to local storage. The process of app talking to server is redux side effects.

Talking a example from the application i have created. on the home page the container components calls a function fetchProducts(on componentDidMount handler) it triggers a action and that action has a handler in redux saga which gets called. And that handler gets the mock data and triggers another action which is handled in the reducer and thats how state gets updated.

I have used redux-saga to handle redux effects. It is kind of most advanced middleware available right now which used generator functions. To make redux saga work we have attach a handler function to each action.
and then later when the action is triggered the handler will be called. if we have the same action in reducer also. then handler in reducers will be called first and after that saga handler will be called.

Once handler does its job(like fetching some data from server) it can dispatch a success action which will be responsible for updating the state.Or can trigger a failure action if API fails.
