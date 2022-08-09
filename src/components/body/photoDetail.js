import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import CommentForm from "./commentForm";
import Comment from "./comment";
import { UserAuth } from "../../context/authContext";

const PhotoDetail = (props) => {
    
    const comments = props.comments.map(comment => {
        return (
            <Comment
                key={comment.id}
                comment = {comment}
            />
        )
    });

    const author = UserAuth().user.email;

    return (
        <Modal
            show={props.selection}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.detail.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="card-img-top" src={props.detail.filePath} alt={props.detail.name} />
                {comments}
                <hr />
                <CommentForm
                    photoId={props.photoId}
                    author={author}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PhotoDetail;