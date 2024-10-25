import PropTypes from 'prop-types';
import './PlayerSelection.css'

const PlayerSelection = ({ isActive, handlePageChange }) => {
    const {page, status} = isActive;

    const renderAuthText = () => {
        return status ? "Available Players" : "Selected Player (0/12)";
    }


    return (
        <div>
            <div className="sm:my-8 md:my-12 lg:my-20 flex justify-between items-center">
                <h1 className="text-xl font-bold">{renderAuthText()}</h1>
                <div className="rounded-lg overflow-hidden">
                    <button onClick={() => handlePageChange("available")} className={`${status ? "btn rounded-none px-8 active" : "btn rounded-none px-8 non_active"}`}>Available</button>
                    <button onClick={() => handlePageChange("selected")} className={`${status ? "btn rounded-none px-8 non_active" : "btn rounded-none px-8 active"}`}>Selected (0)</button>
                </div>
            </div>

            {/* <div className="">
                {
                    (page === "available") ? <Candidates></Candidates> : <Squad></Squad>
                }
            </div> */}

        </div>
    );
};

PlayerSelection.propTypes = {

};

export default PlayerSelection;