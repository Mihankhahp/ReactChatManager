import React, { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
    Row,
    Col,
    Container,
    FormControl,
    InputGroup,
} from 'react-bootstrap'
import ListItems from './ListItems'

export default function List({
    changeSearchAbliti,
    searchAble,
    keyWord,
    chatList,
    itemId,
    itsinputval,
    filteredList }) {
    const searchInput = useRef(null)


    // Search input change
    function inputChanged(e) {
        const inputkey = e.target.value
        itsinputval(inputkey)
    }
    // selected chat id
    function selectedItemChanged(id) {
        itemId(id)
    }

    useEffect(
        () => {
            (searchAble && searchInput.current.focus())
        }, [changeSearchAbliti,searchAble]
    )
    return (
        <Container>
            {/* Search Box  */}
            <Row md="12" style={{
                margin: "10px"
            }}>
                <Col style={{
                    backgroundColor: "#CCC",
                    borderRadius: "5px"
                }}
                >
                    {searchAble !== false ?
                        <Row>
                            <InputGroup  >
                                <FormControl
                                    ref={searchInput}
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder='Type to filter'
                                    value={keyWord}
                                    onChange={(e) => inputChanged(e)}
                                />
                                <label
                                    onClick={changeSearchAbliti}
                                >
                                    <FontAwesomeIcon icon={faArrowLeft}
                                    />
                                </label>
                            </InputGroup>
                        </Row>
                        :
                        <Row
                            onClick={changeSearchAbliti}
                        >
                            <label
                            >Click for Search ..</label>
                        </Row>
                    }
                </Col>
            </Row>
            {/* Main List Items */}
            <Row>
                <Col style={{
                    overflowY: 'scroll',
                    maxHeight: "300px"
                }} >
                    {
                        keyWord === "" ? chatList.map(chat =>
                            < ListItems
                                handleListItemClick={() => selectedItemChanged(chat.id)}
                                key={chat.id}
                                sex={chat.sex}
                                name={chat.name}
                                time={chat.time}
                                unreadMessagesCount={chat.unreadMessagesCount}
                            />
                        ) :
                            filteredList.map(chat =>
                                <ListItems
                                    handleListItemClick={() => selectedItemChanged(chat.id)}
                                    key={chat.id}
                                    sex={chat.sex}
                                    name={chat.name}
                                    time={chat.time}
                                    unreadMessagesCount={chat.unreadMessagesCount}
                                />)
                    }
                </Col>
            </Row>
        </Container >
    )
}