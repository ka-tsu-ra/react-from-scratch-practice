import React from "react";
import PhotoList from "../components/photoList";

class PhotoListContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            photos : ['1', '2', '3', '4']
        }
    }
    //
    // showUserProfile(user) {
    //     this.context.router.push(`/users/${user.username}`);
    // }
    // showUserProfile={this.showUserProfile}>
    // <UserProfileContainer {...this.props}/>

    // componentDidMount() {
    //     fetch('/data/users.js', {
    //         method: 'get'
    //     }).then((response) => {
    //         return response.json()
    //     }).then((data) => {
    //         this.setState({users:data})
    //     }).catch((err)=> {
    //         console.log(err);
    //     });
    // }

    render() {
        return (
          <PhotoList
            {...this.props} photos={this.state.photos}
          />
        )
    }
}

export default PhotoListContainer;
