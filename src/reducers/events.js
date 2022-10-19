import { CREATE_EVENT,DELETE_EVENT,DELETE_ALL_EVENTS } from "../actions";

// action = {
//   type: "CREATE_EVENT",
//   title:"東京オリンピックのお知らせ",
//   body:"東京でオリンピックを開催します。つきましては....."
// };

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const id = state.length === 0 ? 1 : state[state.length-1].id + 1;
      return [
        ...state,
        {
          id: id,
          title: action.title,
          body: action.body,
        },
      ];
    case DELETE_EVENT:
      return state.filter((event) => event.id !== action.id);

    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
};

export default events;
