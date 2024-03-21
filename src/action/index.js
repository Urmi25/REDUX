export const addTodo = (data) =>{
    return {
        type: "ADD-TODO",
        payload:{
            id: new Date().getTime().toString(), 
            data:data
        } 
    }
}

export const deleteTodo =() =>{
    return {
        type: "DElETE-TODO"
    }
}
export const removeTodo =() =>{
    return {
        type: "REMOVE-TODO"
    }
}