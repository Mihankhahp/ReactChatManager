export const ACTIONS = {
    CHANGESELECTEDCHATID: 'CHANGESELECTEDCHATID',
    SEARCHBUTTONCLICKED: 'SEARCHBUTTONCLICKED',
    SEARCHABILITI: 'SEARCHABILITI',
    INPUTCHANGED: 'INPUTCHANGED',
    SUBMITEBUTTONCLICKED: 'SUBMITEBUTTONCLICKED',
    INPUTMESSAGECHANGED: 'INPUTMESSAGECHANGED',
    CHATCLOSEBTNCLICKED: 'CHATCLOSEBTNCLICKED',
    HANDLEDELETMESSAGECLICKED: 'HANDLEDELETMESSAGECLICKED'

}
export const changeSelectedChatId = id => ({ type: ACTIONS.CHANGESELECTEDCHATID, payload: id })
export const searchAbiliti = (searchAble) => ({ type: ACTIONS.SEARCHABILITI, payload: searchAble })
export const inputValueChanged = (inputkey) => ({ type: ACTIONS.INPUTCHANGED, payload: inputkey })
export const submitButtonClicked = (messageText) => ({ type: ACTIONS.SUBMITEBUTTONCLICKED, payload: messageText })
export const inputMessageChanged = (inputText) => ({ type: ACTIONS.INPUTMESSAGECHANGED, payload: inputText })
export const chatCloseBtnClicked = () => ({ type: ACTIONS.CHATCLOSEBTNCLICKED })
export const handleDeletMessageClicked = (id) => ({ type: ACTIONS.HANDLEDELETMESSAGECLICKED, payload: id })