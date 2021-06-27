import React, { useRef, useEffect } from 'react'
import { faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {
    Row,
    Container,
    Image,
    Col,
    ListGroup,
    Badge,
    InputGroup,
    FormControl,
    Card
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import male from '../Assets/male.jpg'
import female from '../Assets/female.jpg'
export default function ChatMessages({ selectedChat,
    selectedChatMessages,
    deletMessageBtn,
    selectedChatId,
    inputChange,
    messageText,
    submitClickedBtn,
    enterPress,
    handleCloseBtn
}) {
    // Refs
    const input = useRef(null)
    const lastMessageItem = useRef(null)
    // Deleting Message
    function deleteBtnClicked(id) {
        deletMessageBtn(id)
    }
    // Message input change 
    function messageInputChange(e) {
        const messageinput = e.target.value
        inputChange(messageinput)
    }
    // submit with press Enter
    function handleKeyUp(e) {
        if (e.keyCode === 13 && messageText !== "") {
            enterPress()
            input.current.focus();
            lastMessageItem.current.focus();
        }
    }
    // search input be Active onClick
    useEffect(
        () => {
            (selectedChatId && input.current.focus())
        },
        [selectedChatId]
    )
    // Input be Active when item select
    useEffect(
        () => {
            if (selectedChatMessages.length !== 0) {
                (selectedChatId && lastMessageItem.current.scrollIntoView({ behavior: 'smooth' }))
            }
        },
        [selectedChatId, submitClickedBtn, selectedChatMessages]
    )
    return (
        <Container>
            {/* Header  */}
            <Row md="12">
                <Col md="12" >
                    {selectedChat ?
                        <ListGroup style={{
                            margin: "6px 0 6px 0 ",
                        }}
                        >
                            <ListGroup.Item action variant="secondary"
                            >
                                <Row>
                                    <Col md='5'>
                                        <Image src={selectedChat.sex === "male" ? male : female} style={{
                                            Width: "100%",
                                            height: "50px"
                                        }} roundedCircle />
                                    </Col>
                                    <Col md='6' >
                                        <Badge style={{ color: "slategray" }} >{selectedChat.name}</Badge>
                                    </Col>
                                    <Col md="1" >
                                        <FontAwesomeIcon
                                            // style={{ display: "contents" }}
                                            color="red"
                                            icon={faTimes}
                                            onClick={handleCloseBtn}
                                        />
                                    </Col>
                                </Row>
                            </ListGroup.Item >
                        </ListGroup >
                        : <ListGroup style={{
                            margin: "6px 0 6px 0 ",
                        }}
                        >
                            <ListGroup.Item variant="secondary"
                            >
                                <Row>
                                    <Col md='5' >
                                        <Badge style={{ color: "slategray" }} >Please Select Chat</Badge>
                                    </Col>
                                </Row>
                            </ListGroup.Item >
                        </ListGroup >
                    }
                </Col>
            </Row>
            {/* Input  */}
            <Row md="12" >
                <Card
                    style={{
                        overflowY: 'scroll',
                        maxHeight: '200px',
                        minHeight: '200px',
                        border: '2px solid black',
                        backgroundColor: 'slategray'
                    }}
                >
                    {
                        selectedChatMessages.map((message, index) => message.me === true ?
                            <Col md="6" className='offset-md-6' key={message.id}
                            >
                                <ListGroup
                                    ref={selectedChatMessages.length === index + 1 ? lastMessageItem : null}
                                    style={{
                                        margin: "6px 0 6px 0 ",
                                    }}
                                >
                                    <ListGroup.Item action variant="success "
                                    >
                                        <Row>
                                            <Col md='10' >
                                                <Badge style={{ color: "slategray" }} >{message.text}</Badge>
                                            </Col>
                                            <Col md="1">
                                                <FontAwesomeIcon
                                                    color="red"
                                                    icon={faTimes}
                                                    onClick={() => deleteBtnClicked(message.id)}
                                                />
                                            </Col>
                                        </Row>
                                    </ListGroup.Item >
                                </ListGroup >
                            </Col>
                            :
                            <Col md="6"
                                key={message.id}

                            >
                                <ListGroup
                                    ref={selectedChatMessages.length === index + 1 ? lastMessageItem : null}
                                    style={{
                                        margin: "6px 0 6px 0 ",
                                    }}
                                >
                                    <ListGroup.Item action variant="danger "
                                    >
                                        <Row>
                                            <Col md='10' >
                                                <Badge style={{ color: "slategray" }} >{message.text}</Badge>
                                            </Col>
                                            <Col md="1" >
                                                <FontAwesomeIcon
                                                    color="red"
                                                    icon={faTimes}
                                                    onClick={() => deleteBtnClicked(message.id)}
                                                />
                                            </Col>
                                        </Row>
                                    </ListGroup.Item >
                                </ListGroup >
                            </Col>
                        )
                    }
                </Card>
            </Row>
            {/*submit*/}
            <Row md="12" style={{
                marginTop: "20px"
            }}>
                {selectedChatId &&
                    <InputGroup className=" mb-3">
                        <Col md="9" xs="8">
                            <FormControl
                                onKeyUp={handleKeyUp}
                                value={messageText}
                                onChange={(e) => messageInputChange(e)}
                                ref={input}
                            />
                        </Col>
                        <Col md={1} xs={3} style={{ margin: "2% 0px 0px 8%" }} >
                            <FontAwesomeIcon
                                style={{ margin: "auto" }}
                                icon={faPaperPlane}
                                onClick={() => submitClickedBtn()
                                }
                            />
                        </Col>
                    </InputGroup>
                }
            </Row>
        </Container >
    )
}