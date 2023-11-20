import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from '../hooks';



export const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos();
    
  return (
    <>
        <h1>TodoApp {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
        <hr />

        <div className='row'>
            <div className='col-7'>
                {/* TodoList */}
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={ id => handleDeleteTodo(id)}
                    onToggleTodo = {handleToggleTodo}
                />
                {/* Fin de TodoList */}
            </div>
            <div className='col-5'>
                {/* TodoAdd onNewTodo( todo ) */}
                {/* { id: new Date()..., description: '', done: false } */}
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={handleNewTodo}/>
                {/* Fin TodoAdd */}
            </div>
        </div>
        
    </>
  )
}
