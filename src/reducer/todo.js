const initialData = {
    list: []
};

const todoReducer = (state = initialData, action) => {
   
    switch(action.type) {
        case "ADD-TODO":
            // eslint-disable-next-line no-case-declarations
            const { id, data } = action.payload;
            console.log(id);
            
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            };
        default:
            return state;
    }
}
export default todoReducer;