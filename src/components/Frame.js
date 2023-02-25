import Card from 'react-bootstrap/Card';
import App from '../App';
import Pictures from './Pictures';
import statePic1 from './pictures/hangmans-knot-smile-sticker.webp'

// Frame Card
function Frame() {
  let getPictures = <Pictures/>
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src = {statePic1} />
      <Card.Body>
        <Card.Text>
          <App/>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Frame;