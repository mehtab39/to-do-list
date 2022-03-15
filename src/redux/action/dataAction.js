import {
    ADDCOMPLETEDTODO,
    ADDPENDINGTODO,
    REMOVEALLCOMPLETED,
    REMOVECOMPLETEDTODO,
    REMOVEPENDINGTODO
} from "../actionTypes";
import short from 'short-uuid';

export const add_completed_todo = data => {
    return {
        type: ADDCOMPLETEDTODO,
        payload: data
    }
}
export const remove_completed_todo = data => {
    return {
        type: REMOVECOMPLETEDTODO,
        payload: data
    }
}

export const add_pending_todo = data => {
    return {
        type: ADDPENDINGTODO,
        payload: data
    }
}
export const remove_pending_todo = data => {
    return {
        type: REMOVEPENDINGTODO,
        payload: data
    }
}
export const removeallcompleted = $ => {
    return {
        type: REMOVEALLCOMPLETED
    }
}

// getting each id of the array to be deleted for using array.includes method
// further to remove 


//deleting list from completed array
export const removeCompletedTodo = (data) => dispatch => {
    dispatch(remove_completed_todo(data))
}

// deleting list directly from pending
export const removePendingTodo = (data) => dispatch => {
    dispatch(remove_pending_todo(data))
}

//sending list back to pending
export const addCompletedTodo = (data) => dispatch => {
    dispatch(removePendingTodo(data))
    dispatch(add_completed_todo(data))
}

const timeConvert = date => {
    console.log('date:', date)
    return ( date.getDate()+
"/"+(date.getMonth()+1)+
"/"+date.getFullYear()+
" "+date.getHours()+
":"+date.getMinutes()+
":"+date.getSeconds())
}

//adding to-do for first time
export const addPendingTodo = (data) => dispatch => {
    //creating a unique id before adding it to pending array
    data = {
        ...data,
        created: timeConvert(data.created),
        date: timeConvert(data.date),
        id: short.generate()
    }
    dispatch(add_pending_todo(data))
}

//sending completed to-do lists back to pending
export const completedToPending = (data) => dispatch => {
    dispatch(removeCompletedTodo(data))
    dispatch(add_pending_todo(data))
}