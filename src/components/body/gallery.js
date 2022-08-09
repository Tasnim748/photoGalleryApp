import React from "react";
import PhotoCard from "./photoCard";
import { connect } from 'react-redux';
import { Fragment } from "react";
import { fetchPhotos } from "../../redux/actionCreators";
import UploadImage from "./uploadImage";
import Spinner from "../ui/spinner";

const mapDispatchToProps = dispaz => {
    return {
        fetchPhotos: () => dispaz(fetchPhotos()),
    }
}

const mapStateToProps = (state) => {
    return {
        photoInfo: state.photos,
        comments: state.comments,
        commentLoading: state.commentLoading,
        loadingFailed: state.loadingFailed
    }
}

class Gallery extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedPhoto: null
        }
    }

    componentDidMount() {
        this.props.fetchPhotos();
    }

    photoSelect = (id) => {
        this.setState({
            selectedPhoto: id
        });
    }
    
    render() {
        // console.log(this.props);
        const filteredComments = this.props.comments.filter(comment => comment.photoId === this.state.selectedPhoto);
        const photos = this.props.photoInfo.map(item => {
            return (
                <PhotoCard
                    key={item._id.toString()}
                    info={item}
                    photoSelect={() => { this.photoSelect(item._id.toString()) }}
                    comments={item._id === this.state.selectedPhoto ? filteredComments : null}
                    submitHandlerFromGallery = {this.submitHandlerFromGallery}
                    photoId={item._id.toString()}
                    commentNum={this.props.comments.filter(comment => comment.photoId === item._id.toString()).length}
                />
            );
        });

        return (
            <Fragment>
                <div className="row row-cols-1 text-center row-cols-md-3 g-4" style={{ margin: '40px' }}>
                    {!this.props.commentLoading ? photos : <Spinner />}
                </div>
                <UploadImage />
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);