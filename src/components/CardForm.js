import Form from '../components/tags/Form';
import Field from '../components/tags/Field';
import Button from '../components/tags/Button';

const CardForm = () => {

  return (
    <Form method="POST">
      <Field type="text" name="name" placeholder="Agregar nombre" />
      <Field type="text" name="description" placeholder="Agregar descripcion" />
      <Button type="type" > Agregar </Button>
    </Form>
  );

}

export default CardForm;