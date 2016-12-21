const todo= (state, action)=> {
    switch(action.type){
        case “ADD_TODO”:
            return {
                text: action.text,
                id: action.id,
                completed: false
            };
        case “TOGGLE_TODO”:
            return {
                if(state.id !== action.id) {
                    return state;
                }

                return {
                        …state,
                        completed: ! state.completed
                };
            }
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch(action.type){
        case “ADD_TODO”:
            return [
				…state,
            todo(undefined, action)
        ];
        case  “TOGGLE_TODO”:
            return state.map(t => todo(t,action) ); // map edince her bir state elemanı t de
        default:
            return state;
    }
};

const visibilityFilter = (state = "SHOW_ALL", action) => {
    switch(action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state;
    }
};

// amam daha fazla bilgi tutmak istiyoruz state de o halde şu şekilde geliştirelim.
// To store this new information, I don't need to change the existing reducers.
// I will use the reducer composition pattern and create a new reducer that calls
// the existing reducers to manage parts of its state and combines the results in a single state object.

const { combineReducers } = Redux;
// combineReducers in tek argumanı bir objedir. bu obje sayesinde state field nameleri arasında mapping yapar. ve reducerlar bunu yonetir.
// bu fonksiyonun return degeri Reducer function dur.
// yazılan objenin keyleri, manage edilecek state objesindeki fieldlara karsılık gelir.
const todoApp = combineReducers({
    todos,
    visibilityFilter
});

// bu yukarda yazdıgımız aşagıdaki commented edilmiş kısımın gorevini yapar.
// const todoApp = (state = {}, action) => {
//   return {
//     todo: todos(state.todos, action),
//     visibilityFilter(state.visibilityFilter, action)
//   };
// };

const { createStore }= Redux;
const store = createStore(todoApp);

//filter : is which filter is been selected

const Todo = ({
    onClick,
    completed,
    text
}) => (
    <li
        onClick={onClick}
        style = {{
            textDecoration: completed ?
                "line-through": "none"
        }}>

        {text}

    </li>
);

const TodoList = ({
    todos,
    onTodoClick
}) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key = {todo.id}
                {...todo}
                onClick = {() => onTodoClick(todo.id)}
            />
        )}
    </ul>
);

const AddTodo = ({
    onAddClick
}) => {
    let input;

    return (
        <div>
            <input ref={node => {
                input = node;
            }}/>

            <button onClick={ () =>{
                onAddClick(input.value);

                input.value = "";

            }}>
            Add Todo
            </button>
        </div>
    );
};

const Link = ({
    active,
    children,
    onClick
}) => {

    if(active) {
        return <span>{children}</span>
    }

    return (
        <a href='#'
           onClick={e => {
               e.preventDefault();
               onClick();
           }}
        >
            {children}
        </a>
    );
};

class FilterLink extends Components {

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const state = store.getState();

        return(
            <Link
                active = {
                    props.filter ==
                    state.visibilityFilter
                }
                onClick = {() =>
                    store.dispatch({
                        type: "SET_VISIBILITY_FILTER",
                        filter: props.filter
                    })
                }
            >
                {props.children}
            </Link>
}>
        );
    }
}

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink
            filter="SHOW_ALL"

        >
            ALL
        </FilterLink>

        {' '}
        <FilterLink
            filter="SHOW_ACTIVE"

        >
            ACTİVE
        </FilterLink>

        {' '}
        <FilterLink
            filter="SHOW_COMPLETED"

        >
            COMPLETED
        </FilterLink>
    </p>
);

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
      case "SHOW_ALL":
          return todos;
      case "SHOW_COMPLETED":
          return todos.filter(
              t => t.completed
          );
      case "SHOW_ACTIVE":
          return todos.filter(
              t => !t.completed
          );
  }
};

let nextTodoId = 0;
const { Component } = React;
class TodoApp = ({
    todos,
    visibilityFilter
}) =>(
        <div>
            <AddTodo
                onAddClick = {text =>
                    store.dispatch({
                        type: "ADD_TODO",
                        id: nextTodoId++,
                        text
                    })
                }
            />

            <TodoList
                todos = {
                    getVisibleTodos(
                        todos,
                        visibilityFilter
                    )
                }
                onTodoClick =  { id =>
                    store.dispatch({
                        type: "TOGGLE_TODO",
                        id
                    })
                }/>

            <Footer />

        </div>
    );

const render = () => {
    ReactDom.render(
        <TodoApp
            {...store.getState()}
        />,
        document.getElementById("root")
    );
};

store.subscribe(render);
render();