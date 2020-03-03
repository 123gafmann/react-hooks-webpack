import React, {useReducer, useContext} from 'react';

const appReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                }
            ];
        case 'delete':
            return state.filter(item => item.id !== action.payload);
        case 'completed':
            return state.map(item => {
                if(item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            });
        default:
            return state;
    }
};

const TodoContext = React.createContext();

const TodoApp = () => {
    const [state, dispatch] = useReducer(appReducer,[]);
    return (
        <div>
            <TodoContext.Provider value={dispatch}>
                <h3>Todo App</h3>
                <button onClick={() => dispatch({type: 'add', payload: "Organize desk"})}>New task</button>
                <TodoList items={state}/>
            </TodoContext.Provider>
        </div>
    )
};

const TodoList = ({items}) => (
    items.map(item => {
        return <TodoItem key={item.id} item={item} />
    })
);

const TodoItem = ({item}) => {
    const {text, id, completed} = item;
    const dispatch = useContext(TodoContext);
    return(
        <div>
            <input type="checkbox" checked={completed} onChange={() => dispatch({type: 'completed', payload:id})} />
            {id}
            <button onClick={() => dispatch({type:'delete', payload: id})}>delete</button>
        </div>
    );
}

export default TodoApp;