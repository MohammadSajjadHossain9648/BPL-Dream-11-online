import PropTypes from 'prop-types';
import bgShadow from '../../assets/bg-shadow.png';
import bannerLogo from '../../assets/banner-main.png';

const Banner = (({ handleToAddCoin }) => {
    return (
        <div className="relative bg-black_color rounded-3xl overflow-hidden my-8">
            {/* image layer over Background */}
            <img className="absolute w-full h-full bg-cover z-0" src={bgShadow} alt="background shadow image" />

            {/* Text content layer */}
            <div className="relative z-10 flex flex-col items-center justify-center space-y-4 py-12">
                <img src={bannerLogo} alt="banner logo image" />
                <h1 className="text-3xl font-bold text-white_color text-center sm:w-4/5 md:w-full">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="font_inter text-xl font-medium text-shade_white_color_1 pb-4">Beyond Boundaries Beyond Limits</p>
                <button onClick={handleToAddCoin} className="btn text-sm font-bold bg-yellow_color outline outline-yellow_color outline-offset-8">Claim Free Credit</button>
            </div>
        </div>
    );
});

Banner.propTypes = {
    handleToAddCoin: PropTypes.func.isRequired,
};

export default Banner;