const addReducer = (state, action) => {
  switch (action.type) {
    // case "DELETE_TRANSACTION":{

    //   return{


    //     initialTransaction:state.filter((transaction) => {
    //       return transaction.id !== action.payload;
    //     }),
    //     ...state
    //   }
    // }


        //  case 'DELETE_TRANSACTION':
        //   const deletedNotes=state.filter(
        //     note=>
        //       note.id !==action.payload

        //   );
        //   return{
        //     ...state,
        //     initialTransaction:deletedNotes
        //   }


      // case 'ADD_TRANSACTION':
      //   return {
      //     ...state,
      //     initialTransaction:[action.payload,...state]
      //   }

            case 'ADD_TRANSACTION':
         {
           return[action.payload,...state]

        }


    default:
      return state;
  }
};
export default addReducer;
