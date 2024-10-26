import PropTypes from 'prop-types';
import deleteBtn from '../../assets/delete.svg';

const Squad = ({ selectedPlayer, handleToRemovePlayer }) => {
    const {img, name, role} = selectedPlayer;

    return (
        <div>
            <div className="p-4 border border-shade_black_hr_color rounded-xl flex justify-between">
                <div className="flex items-center gap-4">
                    <img className="h-12 w-12 rounded-xl" src={img} alt="a cricketer image" />
                    <div>
                        <h2 className="text-xl font-semibold">{name}</h2>
                        <p className="text-xs text-shade_black_color_2">{role}</p>
                    </div>
                </div>
                <button onClick={() => handleToRemovePlayer(selectedPlayer)}>
                    <img className="h-4 w-4" src={deleteBtn} alt="delete icon image" />
                </button>
            </div>
        </div>
    );
};

Squad.propTypes = {

};

export default Squad;