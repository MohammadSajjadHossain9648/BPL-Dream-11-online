import PropTypes from 'prop-types';
import deleteBtn from '../../assets/delete.svg';

const Squad = ({ selectedPlayer, handleToRemovePlayer }) => {
    const {img, name, role, bidding_price} = selectedPlayer;

    return (
        <div>
            <div className="p-4 border border-shade_black_hr_color rounded-xl flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img className="h-20 w-20 rounded-xl" src={img} alt="a cricketer image" />
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <p className="text-xs text-shade_black_color_2">{role}</p>
                        <p className="text-xs text-shade_black_color_2">${bidding_price}</p>
                    </div>
                </div>
                <button className="h-4 w-4" onClick={() => handleToRemovePlayer(selectedPlayer)}>
                    <img className="h-full w-full" src={deleteBtn} alt="delete icon image" />
                </button>
            </div>
        </div>
    );
};

Squad.propTypes = {
    selectedPlayer: PropTypes.object.isRequired,
    handleToRemovePlayer: PropTypes.object.isRequired
};

export default Squad;