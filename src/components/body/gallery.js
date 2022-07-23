import React from "react";
import PhotoCard from "./photoCard";
import { connect } from 'react-redux';      

const mapStateToProps = (state) => {
    return {
        photoInfo: state.photos,
        comments: state.comments
    }
}

class Gallery extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedPhoto: null
        }
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
                    key={item.id}
                    info={item}
                    photoSelect={() => { this.photoSelect(item.id) }}
                    comments={item.id === this.state.selectedPhoto ? filteredComments : null}
                    submitHandlerFromGallery = {this.submitHandlerFromGallery}
                    photoId={item.id}
                    commentNum={this.props.comments.filter(comment => comment.photoId === item.id).length}
                />
            );
        });

        return (
            <div className="row row-cols-1 text-center row-cols-md-3 g-4" style={{margin: '40px'}}>
                {photos}
            </div>

        )
    }
}

export default connect(mapStateToProps)(Gallery);