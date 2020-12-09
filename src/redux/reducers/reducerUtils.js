function convertActionTypeToName(actionType) {
    return actionType.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase());
}

export default function createReducer(state, action, handlers) {
    const key = convertActionTypeToName(action.type);
    const handler = handlers[key];
    console.log("come createReducer! key=", key)
    if (handler) {
        console.log("come handler=!", handler)
        handler(state, action);
    }
}