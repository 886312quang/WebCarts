import * as Messages from './../contants/Messages';
import * as Types from './../contants/ActionType';
var initialState = Messages.MSG_WELLCOME;

const messages = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGES:
            return action.messages;
        default: return state;
    }
}
export default messages;