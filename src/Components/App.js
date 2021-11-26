import React, {Component} from 'react';

// import react router
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Solidity from "./Solidity";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: '',
            token: ''

        };
        this.mounted = true;
    }



    componentDidMount() {



    }


    render() {


        return (

            < Router>


                    <Switch>


                        <Route exact path="/" component={Solidity}/>

                    </Switch>

            </Router>

        )
    }
}

export default App;
