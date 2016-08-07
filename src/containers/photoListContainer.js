import React from "react";
import PhotoList from "../components/photoList";
import 'isomorphic-fetch';


class PhotoListContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            rawPhotos: [],
            photoThumbnails : ['1', '2', '3', '4']
        }
    }
    //
    // showUserProfile(user) {
    //     this.context.router.push(`/users/${user.username}`);
    // }
    // showUserProfile={this.showUserProfile}>
    // <UserProfileContainer {...this.props}/>

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/photos', {
            method: 'get'
        }).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({rawPhotos: data});
            this.setState({photoThumbnails: data.map(entry => entry.thumbnailUrl)})
        }).catch((err)=> {
            console.log(err);
        });
    }

    render() {
      console.log(this.state.rawPhotos)
      return (
        <PhotoList
          {...this.props} photoThumbnails={this.state.photoThumbnails}
        />
      )
    }
}

export default PhotoListContainer;
