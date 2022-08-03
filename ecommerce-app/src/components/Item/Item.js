import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'



const Item = (({data}) => {
  
  return (

    <Card  style={{ width: '18rem', marginBottom: 40, marginLeft: 20, border: "solid 3px", display: "inline-block"}} key={data.id}>
      <div key={data.id}>
      <Card.Img variant="top" src={data.image} alt='Imagen' />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          $ {data.precio}
        </Card.Text>
      </Card.Body>

      <Card.Body>
      <Card.Link><Link to={`/detalle/${data.id}`}> <Button className='btnVerMas'>Ver mas</Button></Link></Card.Link>
       </Card.Body>

      </div>

    </Card>

  )
})



 export default Item;