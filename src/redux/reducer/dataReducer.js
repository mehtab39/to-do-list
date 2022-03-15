import {
    ADDCOMPLETEDTODO,
    ADDPENDINGTODO,
    REMOVECOMPLETEDTODO,
    REMOVEPENDINGTODO,
    REMOVEALLCOMPLETED
} from "../actionTypes";
const init_state = {
    pending_todo: [],
    completed_todo: [] 
}
export const dataReducer = (state = init_state, {
    type,
    payload
}) => {
    switch (type) {

        case ADDCOMPLETEDTODO:
            return {
                ...state,
                completed_todo: [...state.completed_todo, payload]
            }
            case REMOVEALLCOMPLETED:
                return {
                    ...state,
                    completed_todo: []
                }
            case ADDPENDINGTODO:
                console.log(payload)
            return {
                ...state,
                 pending_todo: [...state.pending_todo, payload]
            }
            case REMOVECOMPLETEDTODO:
                console.log(payload, state.completed_todo)

                return {
                    ...state,
                    completed_todo: filter(state.completed_todo, payload)
                }

                case REMOVEPENDINGTODO:
                    return {
                        ...state,
                            pending_todo: filter(state.pending_todo, payload)
                    }
                   

                        default:
                            return state
    }
}


//filtering the array to remove a task using id
export const filter = (data, payload) => {
    return data.filter(el => el.id!== payload.id)
}