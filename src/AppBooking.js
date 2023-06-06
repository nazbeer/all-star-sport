import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header/Header";
import Calendar from './components/Calendar/Calendar';
import Filter from './components/Filter/Filter';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';

import './Appcss.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import { Booking, Customers} from './pages';
function App() {
  return (
    <div >
       {/* <Router>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Booking} />
            <Route path="/customers" component={Customers} />
           
          </Switch>
        </div>
      </Router> */}
      <Header/>
      <div className="container mb-4">
        <div className="row mb-4">
          <h1 className="text-center py-2 mb-3 font-weight-700">Booking <span className="calendar-text">Calendar</span></h1>
        </div>
        <div className="row gap-3">
        <div className="col-md-3 bg-f7 p-3 pr-4 ">
          <Calendar/>
          <Filter/>
          </div>
          <div className="col-md-8 bg-f7 p-3">
          <Booking/>
          </div>
        </div>
        
      </div>
      <Footer/>
    </div> 
  );
}

export default App;
