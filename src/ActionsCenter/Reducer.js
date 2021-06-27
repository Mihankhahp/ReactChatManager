import { ACTIONS } from './Action'

export const INITIALSTATE = {
    userID: '1',
    chatList: [
        { time: '21: 22', unreadMessagesCount: '12', name: 'Fahimeh', id: '2', sex: "female" },
        { time: '22: 22', unreadMessagesCount: '14', name: 'Navid', id: '3', sex: "male" },
        { time: '20: 20', unreadMessagesCount: '10', name: 'Kianmehr', id: '1', sex: "female" },
        { time: '23: 22', unreadMessagesCount: '15', name: 'Peyman ', id: '4', sex: "male" },
        { time: '00: 22', unreadMessagesCount: '16', name: 'Tester', id: '5', sex: "male" },

    ],
    messages: [
        { chatId: '1', id: '1', text: 'hi its hi its Kianmehr message', userID: '1', me: false, date: new Date() },
        { chatId: '1', id: '2', text: 'hi its hi its Kianmehr message', userID: '1', me: false, date: new Date() },
        { chatId: '2', id: '1', text: 'hi its Fahimeh message', userID: '1', me: false, date: new Date() },
        { chatId: '2', id: '2', text: 'hi its Fahimeh message', userID: '1', me: false, date: new Date() },
        { chatId: '2', id: '3', text: 'hi its Navid message', userID: '1', me: false, date: new Date() },
        { chatId: '3', id: '32', text: 'hi its Navid message', userID: '1', me: false, date: new Date() },
        { chatId: '3', id: '33', text: 'hi its Navid message', userID: '1', me: false, date: new Date() },
        { chatId: '4', id: '34', text: 'hi its Peyman message1', userID: '1', me: false, date: new Date() },
        { chatId: '4', id: '35', text: 'hi its Peyman message2', userID: '1', me: false, date: new Date() },
        { chatId: '4', id: '36', text: 'hi its Peyman message3', userID: '1', me: false, date: new Date() },
        { chatId: '4', id: '38', text: 'hi its Peyman message4', userID: '1', me: false, date: new Date() },
        { chatId: '5', id: '37', text: 'hi its Tester message1', userID: '1', me: false, date: new Date() },
        { chatId: '5', id: '39', text: 'hi its Tester message2', userID: '1', me: false, date: new Date() },
        { chatId: '5', id: '388', text: 'hi its Tester message3', userID: '1', me: false, date: new Date() },
        { chatId: '5', id: '347', text: 'hi its Tester message4', userID: '1', me: false, date: new Date() },
        { chatId: '5', id: '348', text: 'hi its Tester message8', userID: '1', me: false, date: new Date() }

    ],
    selectedChatId: false,
    searchAble: false,
    keyWord: '',
    messageText: ''
}
export function reducer(state, action) {
    return (ACTION_HANDLERS[action.type])(state, action.payload)

}
const ACTION_HANDLERS = {
    [ACTIONS.CHANGESELECTEDCHATID]: handleChatSelected,
    [ACTIONS.SEARCHABILITI]: handleSearchAbliti,
    [ACTIONS.INPUTCHANGED]: handleInputChanged,
    [ACTIONS.SUBMITEBUTTONCLICKED]: handleSubmitButtonClicked,
    [ACTIONS.INPUTMESSAGECHANGED]: handleInputMessageChaged,
    [ACTIONS.CHATCLOSEBTNCLICKED]: handleChatCloseBtnClicked,
    [ACTIONS.HANDLEDELETMESSAGECLICKED]: handleMessageDeletebtnClicked
}
function handleMessageDeletebtnClicked(state, payload) {
    return {
        ...state,
        messages: state.messages.filter((nMessages) => nMessages.id !== payload)
    }
}
function handleChatCloseBtnClicked(state) {
    return {
        ...state,
        selectedChatId: false
    }
}
function handleInputMessageChaged(state, payload) {
    return {
        ...state,
        messageText: payload
    }
}
function handleSubmitButtonClicked(state, payload) {
    return {
        ...state,
        messages: [
            ...state.messages,
            {
                chatId: state.selectedChatId,
                id: Math.random().toString(),
                text: payload
                , userID: state.userID,
                me: true,
                date: new Date()
            },
        ],
        messageText: ''
    }
}
function handleSearchAbliti(state, searchAble) {
    return {
        ...state,
        searchAble: !searchAble,
        keyWord: ''
    }
}
function handleInputChanged(state, payload) {
    return {
        ...state,
        keyWord: payload
    }
}
function handleChatSelected(state, payload) {
    return {
        ...state,
        selectedChatId: payload,
        keyWord: '',
        searchAble: false
    }
}