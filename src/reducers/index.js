// action = {
//   type: "CREATE_EVENT",
//   title:"東京オリンピックのお知らせ",
//   body:"東京でオリンピックを開催します。つきましては....."
// };

const events = (state = [], action) => {

  switch (action.type) {
    case "CREATE_EVENT":
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.title,
          body: action.body,
        },
      ];
    case "DELETE_EVENT":
      return state;
    case "DELETE_ALL_EVENTS":
      return [];
    default:
      return state;
  }
};

export default events;
