import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';
import coin from '../../assets/coin.svg';

const Header = () => {
    return (
        <div>
            {/* navbar design */}
            <div className="navbar sm:my-4 md:my-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabindex="0" role="button" className="btn btn-ghost md:hidden">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </div>
                        <ul tabindex="0" className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
                        <ul className="flex space-x-8 mr-8 px-1">
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
                        <span className='text-sm font-semibold'>0 coin</span>
                        <img src={coin} alt="coin icon image" />
                    </button>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {

};

export default Header;