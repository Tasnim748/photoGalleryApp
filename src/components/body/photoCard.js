import React from "react";
import PhotoDetail from "./photoDetail";

class PhotoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: false
        }
    }

    handleSelect = () => {
        this.setState({
            selection: !this.state.selection
        });
        this.props.photoSelect();
    }

    handleClose = () => {
        this.setState({
            selection: !this.state.selection
        });
    }


    render() {
        let photoDetail = null;
        if (this.state.selection) {
            photoDetail = <PhotoDetail
                detail={this.props.info}
                selection={this.state.selection}
                handleClose={this.handleClose}
                comments = {this.props.comments}
                photoId={this.props.photoId}
            />
        }
        return (
            <div className="col">
                <div className="card">
                    <img style={{ cursor: "pointer" }} src={this.props.info.filePath} className="card-img-top" alt={this.props.info.name} onClick={this.handleSelect} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.info.name}</h5>
                        <p className="card-text">Uploader: {this.props.info.uploader}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{this.props.commentNum} comment(s)</small>
                    </div>
                </div>
                {photoDetail}
            </div>
        );
    }
}

export default PhotoCard;
                
