import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/main';
import { SchedulingPage } from './pages/scheduling';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/scheduling" component={SchedulingPage} />
            </Switch>
        </BrowserRouter>
    );
}