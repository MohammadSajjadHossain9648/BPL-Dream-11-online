import PropTypes from 'prop-types';
import profile from '../../assets/profile.svg';
import flag from '../../assets/flag.svg';

const Candidate = ({ candidate }) => {
    const {name, country, img, role, batting_type, bowling_type, bidding_price} = candidate;

    return (
        <div className="p-5 border border-shade_black_hr_color rounded-2xl">
            <figure className="sm:h-72 md:h-52">
                <img className="w-full h-full rounded-2xl" src={img} alt="cricket player image" />
            </figure>

            <div className="">
                <h1 className="font-semibold flex items-center mt-5 mb-3">
                    <img className="mr-4" src={profile} alt="profile icon image" />{name}
                </h1>
                <div className="flex justify-between">
                    <p className="text-sm opacity-50 flex items-center">
                        <img className="mr-4" src={flag} alt="flag icon image" />{country}
                    </p>
                    <div className="text-xs bg-shade_black_bg_color rounded-md px-4 py-3">{role}</div>
                </div>

                <div className="my-4 border border-shade_black_hr_color"></div>

                <h2 className="text-sm font-bold">Rating</h2>
                <div className="mt-5 mb-2 flex justify-between items-center">
                    <p className="text-sm font-semibold">{batting_type}</p>
                    <p className="text-sm text-shade_black_color_1">{bowling_type}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold">Price: ${bidding_price}</p>
                    <button className="btn text-xs font-normal bg-white_color rounded-md">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

Candidate.propTypes = {

};

export default Candidate;