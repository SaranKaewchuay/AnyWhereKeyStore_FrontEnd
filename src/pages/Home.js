import React from 'react';
import axios from 'axios';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentWillMount() {
        const scriptTag = document.createElement("script");
        scriptTag.src = "assets/js/main.js";
        scriptTag.async = true;
        document.body.appendChild(scriptTag);
    }

    componentDidMount() {
        this.getData()

    }

    getData = () => {
        axios.get("https://difficult-girdle-fly.cyclic.app/admin/products").then((res) => {
            this.setState({ data: res.data.data });
        }).catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div className="page-home">
                <div className="page-wrapper">
                    <div className="page-content">
                        <main className="page-main">
                            <div className="uk-grid" data-uk-grid>
                                <div className="uk-width-2-3@xl">
                                    <h3 className="uk-text-lead">Recommended & Featured</h3>
                                    <div className="js-recommend mt-5">
                                        <div className="swiper">
                                            <div className="swiper-wrapper">


                                                <div className="swiper-slide">
                                                    <div className="recommend-slide">
                                                        <div className="recommend-slide__box">
                                                            <div className="recommend-slide__info">
                                                                <h2 className="text-white">Forza Horizon 5</h2>
                                                                <div className="recommend-slide__intro"><span>Ultimate Horizon Adventure is waiting for you!</span></div>
                                                                <div className="recommend-slide__rating-and-price">
                                                                    <div className="recommend-slide__rating"><span>4.3</span><i className="ico_star"></i></div>
                                                                    <div className="recommend-slide__price"><span>฿ 1899</span></div>
                                                                </div>
                                                                <div className="recommend-slide__btn"><Link to={"/game-profile/" + 21} style={{ textDecoration: 'none' }}><button className="uk-button uk-button-danger" type="button">Play Now</button></Link></div>
                                                                <div className="recommend-slide__platform">
                                                                    <i className="ico_windows"></i>
                                                                    <i className="ico_apple"></i>
                                                                </div>
                                                            </div>
                                                            <Link to={"/game-profile/" + 21} style={{ textDecoration: 'none' }}><div className="recommend-slide__img"><img src="https://shorturl.asia/vJ4cu" /></div></Link>
                                                            <div className="recommend-slide__favorites"><i className="ico_favourites"></i></div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="swiper-slide">
                                                    <div className="recommend-slide">
                                                        <div className="recommend-slide__box">
                                                            <div className="recommend-slide__info">
                                                                <h2 className="text-white">Far Cry®3</h2>
                                                                <div className="recommend-slide__intro"><span>Ghostrunner offers a unique single-player experience: fast-paced and violent combat.</span></div>
                                                                <div className="recommend-slide__rating-and-price">
                                                                    <div className="recommend-slide__rating"><span>4.3</span><i className="ico_star"></i></div>
                                                                    <div className="recommend-slide__price"><span>฿ 669.01 </span></div>
                                                                </div>
                                                                <Link to={"/game-profile/" + 4} style={{ textDecoration: 'none' }}>
                                                                    <div className="recommend-slide__btn"><button className="uk-button uk-button-danger" type="button">Play Now</button></div>
                                                                </Link>
                                                                <div className="recommend-slide__platform">
                                                                    <i className="ico_windows"></i>
                                                                    <i className="ico_apple"></i>
                                                                </div>
                                                            </div>
                                                            <Link to={"/game-profile/" + 4} style={{ textDecoration: 'none' }}>
                                                                <div className="recommend-slide__img"><img src="https://shorturl.asia/Zuktn" /></div>
                                                            </Link>
                                                            <div className="recommend-slide__favorites"><i className="ico_favourites"></i></div>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="swiper-slide text-light">
                                                    <div className="recommend-slide">
                                                        <div className="recommend-slide__box">
                                                            <div className="recommend-slide__info">
                                                                <h2 className="text-white">DARK SOULS™ III</h2>
                                                                <div className="recommend-slide__intro"><span>Dark Souls continues to push the boundaries with the latest</span></div>
                                                                <div className="recommend-slide__rating-and-price">
                                                                    <div className="recommend-slide__rating"><span>4.3</span><i className="ico_star"></i></div>
                                                                    <div className="recommend-slide__price"><span>฿ 1500 </span></div>
                                                                </div>
                                                                <Link to={"/game-profile/" + 13} style={{ textDecoration: 'none' }}>
                                                                    <div className="recommend-slide__btn"><button className="uk-button uk-button-danger" type="button">Play Now</button></div>
                                                                </Link>
                                                                <div className="recommend-slide__platform">
                                                                    <i className="ico_windows"></i>
                                                                    <i className="ico_apple"></i>
                                                                </div>
                                                            </div>
                                                            <Link to={"/game-profile/" + 13} style={{ textDecoration: 'none' }}>
                                                                <div className="recommend-slide__img"><img src="https://shorturl.asia/23Z7g" /></div>
                                                            </Link>
                                                            <div className="recommend-slide__favorites"><i className="ico_favourites"></i></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="swiper-slide">
                                                    <div className="recommend-slide">
                                                        <div className="recommend-slide__box">
                                                            <div className="recommend-slide__info">
                                                                <h2 className="text-white">Horizon Zero Dawn</h2>
                                                                <div className="recommend-slide__intro"><span>Experience Aloy's legendary quest to unravel the mysteries of a future world ruled by machines.</span></div>
                                                                <div className="recommend-slide__rating-and-price">
                                                                    <div className="recommend-slide__rating"><span>4.5</span><i className="ico_star"></i></div>
                                                                    <div className="recommend-slide__price"><span>฿ 1645</span></div>
                                                                </div>
                                                                <Link to={"/game-profile/" + 23} style={{ textDecoration: 'none' }}>
                                                                    <div className="recommend-slide__btn"><button className="uk-button uk-button-danger" type="button">Play Now</button></div>
                                                                </Link>
                                                                <div className="recommend-slide__platform">
                                                                    <i className="ico_windows"></i>
                                                                    <i className="ico_apple"></i>
                                                                </div>
                                                            </div>
                                                            <Link to={"/game-profile/" + 23} style={{ textDecoration: 'none' }}>
                                                                <div className="recommend-slide__img"><img src="https://shorturl.asia/UQvgu"/></div>
                                                            </Link>
                                                            <div className="recommend-slide__favorites"><i className="ico_favourites"></i></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="swipper-nav">
                                                <div className="swiper-button-prev"></div>
                                                <div className="swiper-button-next"></div>
                                            </div>
                                            <div className="swiper-pagination"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="uk-width-1-3@xl">
                                    <h3 className="uk-text-lead">Trending Now</h3>
                                    <div className="js-trending">
                                        <div className="swiper">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div className="game-card --horizontal">
                                                        <div className="game-card__box">
                                                            <div className="game-card__media"><Link to={"/game-profile/" + 16} style={{ textDecoration: 'none' }}><img src="https://shorturl.asia/IaGxq" /></Link></div>
                                                            <Link to={"/game-profile/" + 16} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                                <div className="game-card__info">ARK Survival Evolved
                                                                    <div className="game-card__genre">On the shores of a mysterious island, You must learn to survive. Use your cunning to kill or control primitive creatures roaming the land. </div>
                                                                    <div className="game-card__rating-and-price">
                                                                        <div className="game-card__rating"><span>4.5</span><i className="ico_star"></i></div>
                                                                        <div className="game-card__price"><span>฿ 379</span></div>
                                                                    </div>
                                                                    <div className="game-card__bottom">
                                                                        <div className="game-card__platform"><i className="ico_windows"></i><i className="ico_apple"></i></div>
                                                                        <div className="game-card__users">
                                                                            <ul className="users-list">
                                                                                <li><img src="assets/img/user-1.png" /></li>
                                                                                <li><img src="assets/img/user-2.png" /></li>
                                                                                <li><img src="assets/img/user-3.png" /></li>
                                                                                <li><img src="assets/img/user-4.png" /></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="game-card --horizontal">
                                                        <Link to={"/game-profile/" + 18} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                            <div className="game-card__box">
                                                                <div className="game-card__media"><img src="https://shorturl.asia/ut8jA" /></div>
                                                                <div className="game-card__info">Days Gone
                                                                    <div className="game-card__genre">Fight in post-pandemic America. Play as Deacon St. John, a Drifter and bounty hunter who rides on crumbling roads.</div>
                                                                    <div className="game-card__rating-and-price">
                                                                        <div className="game-card__rating"><span>4.5</span><i className="ico_star"></i></div>
                                                                        <div className="game-card__price"><span>฿ 1290</span></div>
                                                                    </div>
                                                                    <div className="game-card__bottom">
                                                                        <div className="game-card__platform">
                                                                            <i>
                                                                                <img src='https://icons.iconarchive.com/icons/martz90/circle-addon2/24/playstation-icon.png' class="mb-1" />
                                                                            </i>
                                                                            <i>
                                                                                <img src='https://icons.iconarchive.com/icons/martz90/circle-addon1/24/xbox-icon.png' class="mb-1" />
                                                                            </i>
                                                                            <i>
                                                                                <img src='https://icons.iconarchive.com/icons/martz90/circle/24/windows-8-icon.png' class="mb-1" />
                                                                            </i>
                                                                            <i>
                                                                                <img src='https://icons.iconarchive.com/icons/uiconstock/socialmedia/32/Apple-icon.png' class="mb-1" />
                                                                            </i>
                                                                        </div>
                                                                        <div className="game-card__users">
                                                                            <ul className="users-list">
                                                                                <li><img src="assets/img/user-1.png" /></li>
                                                                                <li><img src="assets/img/user-2.png" /></li>
                                                                                <li><img src="assets/img/user-3.png" /></li>
                                                                                <li><img src="assets/img/user-4.png" /></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="swipper-nav">
                                                    <div className="swiper-button-prev"></div>
                                                    <div className="swiper-button-next"></div>
                                                </div>
                                                <div className="swiper-pagination"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="uk-width-1-1">
                                        <h3 className="uk-text-lead">Most Popular</h3>
                                        <div className="js-popular">
                                            <div className="swiper">
                                                <div className="swiper-wrapper">
                                                    <div className="swiper-slide">
                                                        <div className="game-card">
                                                            <Link to={"/game-profile/" + 26} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                                <div className="game-card__box">
                                                                    <div className="game-card__media"><img src="https://shorturl.asia/DcdEh" /></div>
                                                                    <div className="game-card__info">Planet Zoo
                                                                        <div className="game-card__genre">Building </div>
                                                                        <div className="game-card__rating-and-price">
                                                                            <div className="game-card__rating"><span>4.8</span><i className="ico_star"></i></div>
                                                                            <div className="game-card__price"><span>฿ 975 </span></div>
                                                                        </div>
                                                                        <div className="game-card__bottom">
                                                                            <div className="game-card__platform"><i className="ico_windows"></i><i className="ico_apple"></i></div>
                                                                            <div className="game-card__users">
                                                                                <ul className="users-list">
                                                                                    <li><img src="assets/img/user-1.png" /></li>
                                                                                    <li><img src="assets/img/user-2.png" /></li>
                                                                                    <li><img src="assets/img/user-3.png" /></li>
                                                                                    <li><img src="assets/img/user-4.png" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="game-card">
                                                            <Link to={"/game-profile/" + 17} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                                <div className="game-card__box">
                                                                    <div className="game-card__media"><img src="https://shorturl.asia/Sbv6O" /></div>
                                                                    <div className="game-card__info">Call of Duty: Black Ops III
                                                                        <div className="game-card__genre">Shooter</div>
                                                                        <div className="game-card__rating-and-price">
                                                                            <div className="game-card__rating"><span>4.6</span><i className="ico_star"></i></div>
                                                                            <div className="game-card__price"><span>฿ 379 </span></div>
                                                                        </div>
                                                                        <div className="game-card__bottom">
                                                                            <div className="game-card__platform"><i className="ico_windows"></i><i className="ico_apple"></i></div>
                                                                            <div className="game-card__users">
                                                                                <ul className="users-list">
                                                                                    <li><img src="assets/img/user-1.png" /></li>
                                                                                    <li><img src="assets/img/user-2.png" /></li>
                                                                                    <li><img src="assets/img/user-3.png" /></li>
                                                                                    <li><img src="assets/img/user-4.png" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className="swiper-slide">
                                                        <div className="game-card">
                                                            <Link to={"/game-profile/" + 15} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                                <div className="game-card__box">
                                                                    <div className="game-card__media"><img src="https://shorturl.asia/wCL4i" /></div>
                                                                    <div className="game-card__info">Fallout 4
                                                                        <div className="game-card__genre">Adventure</div>
                                                                        <div className="game-card__rating-and-price">
                                                                            <div className="game-card__rating"><span>4.7</span><i className="ico_star"></i></div>
                                                                            <div className="game-card__price"><span>฿ 660 </span></div>
                                                                        </div>
                                                                        <div className="game-card__bottom">
                                                                            <div className="game-card__platform"><i className="ico_windows"></i><i className="ico_apple"></i></div>
                                                                            <div className="game-card__users">
                                                                                <ul className="users-list">
                                                                                    <li><img src="assets/img/user-1.png" /></li>
                                                                                    <li><img src="assets/img/user-2.png" /></li>
                                                                                    <li><img src="assets/img/user-3.png" /></li>
                                                                                    <li><img src="assets/img/user-4.png" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="swiper-slide">
                                                        <div className="game-card">
                                                            <Link to={"/game-profile/" + 8} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                                <div className="game-card__box">
                                                                    <div className="game-card__media"><img src="https://shorturl.asia/NYokt" /></div>
                                                                    <div className="game-card__info">Titanfall® 2
                                                                        <div className="game-card__genre">Shooter</div>
                                                                        <div className="game-card__rating-and-price">
                                                                            <div className="game-card__rating"><span>4.1</span><i className="ico_star"></i></div>
                                                                            <div className="game-card__price"><span>฿ 799</span></div>
                                                                        </div>
                                                                        <div className="game-card__bottom">
                                                                            <div className="game-card__platform"><i className="ico_windows"></i><i className="ico_apple"></i></div>
                                                                            <div className="game-card__users">
                                                                                <ul className="users-list">
                                                                                    <li><img src="assets/img/user-1.png" /></li>
                                                                                    <li><img src="assets/img/user-2.png" /></li>
                                                                                    <li><img src="assets/img/user-3.png" /></li>
                                                                                    <li><img src="assets/img/user-4.png" /></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-button-prev"></div>
                                                <div className="swiper-button-next"></div>
                                                <div className="swiper-pagination"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;
