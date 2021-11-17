import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Index({ data }) {
  //console.log(data)
  return (
    <div>
      <p style={{textAlign: "center", fontWeight: "bold"}}>HARDI - REACTJS EXERCISE - OPCBIZ</p>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
        { data.map(obj => {
            return (
              <tr key={ obj.id }>
                <td>{ obj.id }</td>
                <td>{ obj.title }</td>
                {obj.completed == true ? (<td style={{ backgroundColor: "green"}}> TRUE </td>) : <td style={{ backgroundColor: "red" }}> FALSE </td>}
              </tr>
            );
          }) 
        }
        </tbody>
      </Table>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()

  return {
    props: {
      data: data,
    },
  }
}

export default Index
