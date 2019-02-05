import React, { Component } from 'react';
import { Card, Button, CardColumns } from 'react-bootstrap';

class CustomCard extends Component {
     render() {
          return (
               <CardColumns>
                    <Card>
                         <Card.Img variant="top" src="holder.js/100px180" />
                         <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Text>
                                   Some quick example text to build on the card title and make up the bulk of
                                   the card's content.
                          </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                         </Card.Body>
                    </Card>
                    <Card>
                         <Card.Img variant="top" src="holder.js/100px180" />
                         <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Text>
                                   Some quick example text to build on the card title and make up the bulk of
                                   the card's content.
                          </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                         </Card.Body>
                    </Card>
                    <Card>
                         <Card.Img variant="top" src="holder.js/100px180" />
                         <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Text>
                                   Some quick example text to build on the card title and make up the bulk of
                                   the card's content.
                          </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                         </Card.Body>
                    </Card>
               </CardColumns>
          )
     }
}

export default CustomCard;