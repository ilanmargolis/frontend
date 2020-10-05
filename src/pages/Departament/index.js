import React from 'react';
import Page from '../../components/Page';

export default function index() {
  const [departament, setDepartament] = useState([]);

  const getDepartament = () => {
    api.get('/Departament').then((response) => {
      const { data } = response;
      setDepartaments(data);
    }).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    getDepartaments();
  }, []);

  const onDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      api.delete(`/departament/${id}`).then(() => {
        const departamentList = departaments.filter((departament) => departament.id !== id);
        setDepartaments(departamentList);
        toast.success('Departament deleted with success');
      }).catch(() => {
        toast.error('Unexpected Error');
      });
    }
  };

  return (
  <Page title="Departament">
    <Link className="btn btn-primary" to="/departament/new">Create Departament</Link>
    <Table className="mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>CPF</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {departaments.map((departament, index) => (
          <tr key={index}>
            <td>{departament.id}</td>
            <td><Link to={`/departament/${departament.id}`}>{departament.name}</Link></td>
            <td>{departament.cpf}</td>
            <td>
              <Button onClick={() => onDelete(departament.id)} color="danger">Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Page>
}
