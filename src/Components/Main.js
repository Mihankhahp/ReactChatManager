import React, { useReducer } from 'react'
import { INITIALSTATE, reducer } from '../ActionsCenter/Reducer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import List from './List';
import ChatMessages from './ChatMessages';
import {
    searchAbiliti,
    inputValueChanged,
    changeSelectedChatId,
    handleDeletMessageClicked,
    inputMessageChanged,
    submitButtonClicked,
    chatCloseBtnClicked
} from '../ActionsCenter/Action'

export default function ChatMannager() {
    const [{
        chatList,
        messages,
        selectedChatId,
        searchAble,
        keyWord,
        messageText
    }, dispatch] = useReducer(reducer, INITIALSTATE)
    const selectedChat = chatList.find(x => x.id === selectedChatId)
    const selectedChatMessages = messages.filter(x => x.chatId === selectedChatId)

    // Filter function
    const filteredList = chatList.filter(
        (item) => {
            return item.name.toLowerCase().includes(
                keyWord.toLowerCase())
        }
    )
    // searchAbiliti function
    function changeSearchAbliti() {
        dispatch(searchAbiliti(searchAble))
    }
    // Search input change
    function handleInputChang(inputkey) {
        dispatch(inputValueChanged(inputkey))
    }
    // Selected Chat Id 
    function handleSlectedChat(id) {
        dispatch(changeSelectedChatId(id))
    }
    // message delete  
    function messageDelet(id) {
        dispatch(handleDeletMessageClicked(id))
    }
    // message Input Change
    function messageInputChanged(messageinput) {
        dispatch(inputMessageChanged(messageinput))
    }
    // submit Btn
    function submitClickedBtn() {
        messageText !== "" ? dispatch(submitButtonClicked(messageText)) : alert("type Something")
    }
    // Close btn for Chat Detail
    function handleCloseChatMessage() {
        dispatch(chatCloseBtnClicked())
    }
    return (
        <Container>
            <Row className='mx-auto my-3' style={{ backgroundColor: "slategray" }} >
                <Col lg='4' >
                    <List
                        changeSearchAbliti={() => changeSearchAbliti()}
                        chatList={chatList}
                        searchAble={searchAble}
                        keyWord={keyWord}
                        itemId={handleSlectedChat}
                        itsinputval={handleInputChang}
                        filteredList={filteredList}
                    />
                </Col>
                {selectedChatId !== false &&
                    <Col lg='8' style={{ backgroundColor: "#CCCC" }}>
                        <ChatMessages
                            selectedChat={selectedChat}
                            selectedChatMessages={selectedChatMessages}
                            deletMessageBtn={messageDelet}
                            inputChange={messageInputChanged}
                            selectedChatId={selectedChatId}
                            messageText={messageText}
                            submitClickedBtn={submitClickedBtn}
                            enterPress={submitClickedBtn}
                            handleCloseBtn={handleCloseChatMessage}
                        />
                    </Col>
                }

            </Row>
        </Container >
    )
}