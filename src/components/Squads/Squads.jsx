import PropTypes from 'prop-types';
import Squad from '../Squad/Squad';

const Squads = ({ selectedPlayers, handlePageChange, handleToRemovePlayer }) => {
    return (
        <div className="sm:mb-40 md:mb-60">
            <div className="space-y-4">
                {
                    selectedPlayers.map((selectedPlayer, idx) => <Squad key={idx} selectedPlayer={selectedPlayer} handleToRemovePlayer={handleToRemovePlayer}></Squad>)
                }
            </div>
            <button onClick={() => handlePageChange("available")} className="btn text-sm font-bold bg-yellow_color outline outline-yellow_color outline-offset-8 mt-12 ml-2.5">Add More Player</button>
        </div>
    );
};

Squads.propTypes = {
    selectedPlayers: PropTypes.object.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    handleToRemovePlayer: PropTypes.object.isRequired
};

export default Squads;