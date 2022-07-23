import React from 'react';
import { connect } from 'react-redux';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            time: "",
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
        payLoad.id = this.props.commentNum;
        payLoad.author = this.props.author; 
        this.props.dispatch({
            type: 'ADD_COMMENT',
            payLoad: payLoad
        })
        this.setState({
            author: "",
            comment: ""
        })
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

export default connect()(CommentForm);