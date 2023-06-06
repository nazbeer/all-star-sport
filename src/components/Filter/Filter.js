import "./Filter.css";
function Filter(){
    return(
        <>
            <div className="clearfix-1"> </div>
            <h3 className="font-weight-600 text-black pt-4 pb-3">Filters</h3>
            <div className="clearfix-1"> </div>
            <div className="d-block justify-content-around align-items-center">
                <button className="btn btn-warning font-weight-600 m-r-15 mb-3" type="button">All</button>
                <button className="btn btn-default no-wrap m-r-15 mb-3" type="button">Pitch Rentals</button>
                <button className="btn btn-default m-r-15 mb-3" type="button">Birthdays</button>
                <button className="btn btn-default m-r-15 mb-3" type="button">Custom</button>
            </div>
        </>
    );
}
export default Filter;