import React from 'react'
import './App.css'
import {connect} from "react-redux";
import {User} from "./components/User";
import {Page} from "./components/Page";
import {getPhotos} from "./actions/PageActions";

const App = props => {
    const {user, page, getPhotosAction} = props;
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Мой топ фото</h1>
            </header>
            <User name={user.name}/>
            <Page year={page.year} photos={page.photos} getPhotos={getPhotosAction} isFetching={page.isFetching}/>
        </div>
    )
}

const mapStateToProps = store => {
    console.log(store);
    return {
        user: store.user,
        page: store.page,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPhotosAction: year => dispatch(getPhotos(year)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(App);
