import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Candidate from '../Candidate/Candidate';

const Candidates = () => {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetch("players.json")
       .then(res => res.json())
       .then(data => setCandidates(data))
       .catch(err => console.error("Data load error: ", err));
    }, []);

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                candidates.map((candidate, idx) => <Candidate key={idx} candidate={candidate}></Candidate>)
            }
        </div>
    );
};

Candidates.propTypes = {

};

export default Candidates;