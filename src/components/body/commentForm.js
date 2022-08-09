import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../redux/actionCreators';
import axios from 'axios';
import { URL } from '../../url';

const mapDispatchToProps = dispaz => {
    return {
        addComment: (comment) => dispaz(addComment(comment))
    }
}

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
        }
    }

    nameChangeHandler = (e) => {
        this.setState({
            author: e.target.value
        });
    }

    commentChangeHandler = (e) => {
        this.setState({
            comment: e.target.value
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        let payLoad = this.state;
        payLoad.photoId = this.props.photoId;
        payLoad.author = this.props.author;
        // getting current time
        const currentdate = new Date();
        const datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " at "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
        payLoad.datetime = datetime;

        // send to server
        axios.post(`${URL}/comments`, payLoad)
            .then(response => {
                this.props.addComment(payLoad);
                this.setState({
                    comment: ""
                })
            })
            .catch(err => window.alert('something wrong'));
    }

    render () {
        return (
            <form onSubmit={this.submitHandler}>

                <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Comment</label>
                    <input
                        type="textarea"
                        className="form-control"
                        id="comment"
                        value={this.state.comment}
                        onChange={this.commentChangeHandler}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default connect(null, mapDispatchToProps)(CommentForm);