import React from 'react';
import { Container, ListGroup, Image, Col, Badge, Row } from 'react-bootstrap';
import male from '../Assets/male.jpg'
import female from '../Assets/female.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ListItems({ name,
    sex,
    time,
    unreadMessagesCount,
    handleListItemClick
}) {
    return (
        <Container>
            <ListGroup style={{
                margin: "6px 0 6px 0 ",
            }}
            >
                <ListGroup.Item action variant="secondary"
                    onClick={handleListItemClick}
                >
                    {/* Image */}
                    <Row>
                        <Col md='8'>
                            <Image src={sex === "male" ? male : female} style={{
                                maxWidth: "100%",
                                height: "25px"
                            }} roundedCircle />
                        </Col>
                    </Row>
                    {/* Main Content */}
                    <Row  >
                        <Col md='8' >
                            <Badge style={{ color: "slategray" }} >{name}</Badge>
                        </Col>
                        <Col md="2">
                            <Badge style={{ color: "slategray" }}>{time}</Badge>
                        </Col>
                    </Row>
                    {/* unread message count */}
                    <Row>
                        <Col md="2" className="offset-md-9" >
                            <Badge pill style={{ backgroundColor: "skyblue" }}>{unreadMessagesCount}</Badge>
                        </Col>
                    </Row>
                </ListGroup.Item >
            </ListGroup >
        </Container >
    )
}