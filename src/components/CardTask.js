import { database } from '../config/firebase';
import Button from './tags/Button';
import Field from './tags/Field';
import Form from './tags/Form';
import Input from './tags/Input';

const CardTask = ({ name, description, finished, id }) => {

  const style = {
    display: "flex"
  };

  const updateTask  = (self) => {
    const task = {
      name: self.target.name === 'name' ? self.target.value : name,
      description: self.target.name === "description" ? self.target.value : description,
      finished: self.target.name !== "finished" ?  finished : finished == false ? true : false
    }

    let updates = {};
    updates[`/tasks/${id}`] = task;

    return database.ref().update(updates);
  }

  const deleteTask = async () => {
    return await database.ref(`/tasks/${id}`).remove();
  }

  return (
    <Form method="POST" style={style} onClick={ (e) => e.preventDefault() }>
      <Input 
        type="text" 
        name="name" 
        placeholder="Agregar nombre" 
        value={name}
        onChange = { updateTask } 
      />

      <Input 
        type="text" 
        name="description" 
        placeholder="Agregar descripcion" 
        value={description}
        onChange = { updateTask } 
      />

      <Field
        type="checkbox" 
        name="finished" 
        label="is finished?"
        value={finished ? "true" : "false"}
        onChange = { updateTask }
      />


      <Button type="button" onClick={ deleteTask }>
        Eliminar
      </Button>
    </Form>
  );

}

export default CardTask;