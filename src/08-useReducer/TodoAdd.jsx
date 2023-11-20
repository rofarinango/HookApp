import { useForm } from "../hooks"

export const TodoAdd = ({onNewTodo}) => {

    const { description, onInputChange, onFormReset } = useForm({
        description: ''
    });

    const onFormSubmit = ( event) => {
        event.preventDefault();
        if(description.length <= 1 ) return;
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }

        onNewTodo && onNewTodo(newTodo);
        onFormReset();
    }
  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" 
        placeholder='Que hay que hacer?'
        className='form-control'
        name="description"
        value={description}
        onChange={ onInputChange}
        />
        <button 
            type='submit'
            className='btn btn-outline-primary mt-1'
        >
            Agregar
        </button>
    </form>
  )
}
