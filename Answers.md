1. What problem does the context API help solve?
   A parent component can pass data down to their child components no matter how deep the tree is.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   Actions is where you assign the name and action type so that it can be later used by the reducer. The reducer is where all the state update/mutation methods to the state happen. The store hold the whole applications state.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other? The more complex and large the application the more that redux will come in handy, but if you're working on a somewhat small application using redux would be overkill so it would be better to stick to other state management methods.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`? redux thunk allows you to dispatch actions through throughout the application.
1. What is your favorite state management system you've learned and this sprint? Please explain why! useReducer was the most fun for me so far. It's like a redux lite, but that's why I like it. Not as complex, but not as simple either.
