import React from "react";

const Comment = (props) => {
    return (
        <div>
            <hr />
            <h5>{props.comment.author}</h5>
            <p>{props.comment.comment}</p>
            <h6>{props.comment.time}</h6>
            <br />
        </div>
    );
}

export default Comment;