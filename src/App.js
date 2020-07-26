import React from 'react'
import './App.css'
import {connect} from "react-redux";
import {User} from "./components/User";
import {Page} from "./components/Page";
import {setYear} from "./actions/PageActions";

const App = props => {
    const {user, page, setYearAction} = props;
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Мой топ фото</h1>
            </header>
            <User name={user.name}/>
            <Page year={page.year} photos={page.photos} setYear={setYearAction}/>
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
        setYearAction: year => dispatch(setYear(year)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(App);
