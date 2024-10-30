import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import coin from '../../assets/coin.svg';
import Banner from '../Banner/Banner';

const Header = ({ coins, handleToAddCoin, isActive }) => {
    return (
        <div>
            {/* navbar design */}
            <div className="navbar my-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 bg-white border border-grey-500">
                            <li>
                                <a className='text-sm text-shade_black_color_1' href='#'>Home</a>
                            </li>
                            <li>
                                <a className='text-sm text-shade_black_color_1' href='#'>Fixture</a>
                            </li>
                            <li>
                                <a className='text-sm text-shade_black_color_1' href='#'>Teams</a>
                            </li>
                            <li>
                                <a className='text-sm text-shade_black_color_1' href='#'>Schedules</a>
                            </li>
                        </ul>
                    </div>
                    <img src={logo} alt="brand logo image" />
                </div>

                <div className="navbar-end">
                    <div className="hidden md:flex">
                        <ul className="flex space-x-8 mr-8">
                            <li>
                                <a className='text-sm text-shade_black_color_1' href='#'>Home</a>
                            </li>
                            <li>
                                <a className='text-sm text-shade_black_color_1' href='#'>Fixture</a>
                            </li>
                            <li>
                                <a className='text-sm text-shade_black_color_1' href='#'>Teams</a>
                            </li>
                            <li>
                                <a className='text-sm text-shade_black_color_1' href='#'>Schedules</a>
                            </li>
                        </ul>
                    </div>
                    <button className="btn bg-white_color">
                        <span className='text-sm font-semibold'>{coins} coin</span>
                        <img src={coin} alt="coin icon image" />
                    </button>
                </div>
            </div>

            {/* banner design */}
            <Banner handleToAddCoin={handleToAddCoin} isActive={isActive}></Banner>
        </div>
    );
};

Header.propTypes = {
    coins: PropTypes.number.isRequired,
    handleToAddCoin: PropTypes.func.isRequired,
    isActive: PropTypes.object.isRequired
};

export default Header;