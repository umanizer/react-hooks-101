import React,{useState} from "react";

const EventForm = ({state,dispatch}) => {
  
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  const addEvent = (e) => {
    e.preventDefault();
    dispatch({ type: "CREATE_EVENT", title, body });
    setBody("");
    setTitle("");
  };

  const deleteALLEvents = (e) => {
    e.preventDefault();
    const result = window.confirm(
      "全てのイベントを本当に削除しても良いですか？"
    );
    if (result) dispatch({ type: "DELETE_ALL_EVENTS" });
  };
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            type="text"
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            type="text"
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary "
          onClick={addEvent}
          disabled={title === "" || body === ""}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteALLEvents}
          disabled={state.length === 0}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;