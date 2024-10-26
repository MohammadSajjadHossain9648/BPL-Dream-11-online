import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Candidate from '../Candidate/Candidate';

const Candidates = ({ handleToChoosePlayer }) => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetch("players.json")
       .then(res => res.json())
       .then(data => setCandidates(data))
       .catch(err => console.error("Data load error: ", err));
    }, []);

    return (
        <div className="sm:mb-60 md:mb-80 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                candidates.map((candidate, idx) => <Candidate
                                                        key={idx}
                                                        candidate={candidate}
                                                        handleToChoosePlayer={handleToChoosePlayer}
                                                    ></Candidate>)
            }
        </div>
    );
};

Candidates.propTypes = {
    handleToChoosePlayer: PropTypes.func.isRequired
};

export default Candidates;