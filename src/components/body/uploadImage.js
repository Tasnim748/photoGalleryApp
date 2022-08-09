import React from "react";
import { useState } from "react";
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { UserAuth } from "../../context/authContext";
import axios from "axios";
import { addPhoto } from '../../redux/actionCreators';
import { connect } from "react-redux";
import { URL } from "../../url";

const mapDispatchToProps = dispaz => {
    return {
        addPhoto: (photo) => dispaz(addPhoto(photo))
    }
}

function UploadImage(props) {
    const [imageUpload, setImageUpload] = useState(null);
    const [title, setTitle] = useState('');

    const author = UserAuth().user.email;

    const fileChangeHandler = e => {
        setImageUpload(e.target.files[0]);
    }

    const titleChangeHandler = e => {
        setTitle(e.target.value);
    }

    const imgSubmitHandler = (e) => {
        e.preventDefault();
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload)
            .then(res => {
                getDownloadURL(imageRef).then(url => {
                    const photoInfo = {
                        name: title,
                        uploader: author,
                        filePath: url
                    }
                    axios.post(`${URL}/photo`, photoInfo)
                        .then(res => {
                            const payLoad = {
                                _id: res.data,
                                uploader: author,
                                name: title,
                                filePath: url
                            }
                            props.addPhoto(payLoad);
                            setTitle('');
                            setImageUpload(null);
                        })
                        .catch((err) => alert('posting failed'))
                })
                .catch(err => alert('cannot get the image url'));
            })
            .catch(err => alert('Image upload failed!'));
    }

    return (
        <form onSubmit={imgSubmitHandler} style={{margin: '40px'}} >
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Upload you own image</label>
                <input className="form-control" type="file" required id="formFile" accept="image/png, image/jpeg" onChange={fileChangeHandler} />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Photo Title</label>
                <input type="text" className="form-control" id="title" value={title} required onChange={titleChangeHandler} />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    );
}

export default connect(null, mapDispatchToProps)(UploadImage);