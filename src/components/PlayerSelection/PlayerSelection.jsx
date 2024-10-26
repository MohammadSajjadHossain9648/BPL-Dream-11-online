import PropTypes from 'prop-types';
import './PlayerSelection.css'
import Candidates from '../Candidates/Candidates';
import Squads from '../Squads/Squads';


const PlayerSelection = ({ isActive, handlePageChange, handleToChoosePlayer, selectedPlayers, selectedNumber, handleToRemovePlayer }) => {
    // header conditional rendering
    const {page, status} = isActive;
    const renderAuthText = () => {
        return status ? "Available Players" : `Selected Player (${selectedNumber}/12)`;
    }

    return (
        <div>
            <div className="sm:mt-8 md:mt-12 lg:mt-20 mb-6 flex justify-between items-center">
                <h1 className="text-xl font-bold">{renderAuthText()}</h1>
                <div className="rounded-lg overflow-hidden">
                    <button onClick={() => handlePageChange("available")} className={`${status ? "btn rounded-none px-8 active" : "btn rounded-none px-8 non_active"}`}>Available</button>
                    <button onClick={() => handlePageChange("selected")} className={`${status ? "btn rounded-none px-8 non_active" : "btn rounded-none px-8 active"}`}>Selected ({selectedNumber})</button>
                </div>
            </div>

            <div>
                {
                    (page === "available") ? <Candidates handleToChoosePlayer={handleToChoosePlayer}></Candidates> : <Squads selectedPlayers={selectedPlayers} handlePageChange={handlePageChange} handleToRemovePlayer={handleToRemovePlayer}></Squads>
                }
            </div>
        </div>
    );
};

PlayerSelection.propTypes = {
    isActive: PropTypes.object.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    handleToChoosePlayer: PropTypes.func.isRequired,
    selectedPlayers: PropTypes.object.isRequired,
    selectedNumber: PropTypes.number.isRequired,
    handleToRemovePlayer: PropTypes.object.isRequired
};

export default PlayerSelection;