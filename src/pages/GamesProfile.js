import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';



class GamesProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameNumber: props.match.params.gameNumber,
            gameName: '',
            gameDetail: '',
            image_url1: '',
            image_url2: '',
            image_url3: '',
            image_url4: '',
            image_url5: '',
            gameSpec: '',
            gameDeveloper: '',
            gamePrice: '',
            gameStock: '',
            gameCategory: '',
            redirect: null
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8081/admin/edit-products/' + this.state.gameNumber).then(res => {
            let data = res.data.data[0];
            console.log(data);
            this.setState({
                gameName: data.gameName,
                gameDetail: data.gameDetail,
                image_url1: data.image_url1,
                image_url2: data.image_url2,
                image_url3: data.image_url3,
                image_url4: data.image_url4,
                image_url5: data.image_url5,
                gameSpec: data.gameSpec,
                gameDeveloper: data.gameDeveloper,
                gamePrice: data.gamePrice,
                gameStock: data.gameStock,
                gameCategory: data.gameCategory
            });
        }).catch(error => {
            console.log(error);
        });
    }
    componentWillMount() {
        const scriptTag = document.createElement("script");
        scriptTag.src = "assets/js/main.js";
        scriptTag.async = true;
        document.body.appendChild(scriptTag);
    }
    render() {
        return (
            <div class="page-store">
                <div class="page-wrapper">
                    <div class="page-content">
                        <aside class="sidebar is-show" id="sidebar">
                            <Menu />
                        </aside>
                        <main class="page-main">
                            <ul class="uk-breadcrumb">
                                <li><Link to="/game-store"><span data-uk-icon="chevron-left"></span><span>Back to Store</span></Link></li>
                                <li><span>{this.state.gameName}</span></li>
                            </ul>
                            <h3 class="uk-text-lead">{this.state.gameName}</h3>
                            <div class="uk-grid uk-grid-small" data-uk-grid>
                                <div class="uk-width-2-3@s">
                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src={this.state.image_url1} alt="First slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src={this.state.image_url2} alt="Second slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src={this.state.image_url3} alt="Third slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src={this.state.image_url4} alt="four slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src={this.state.image_url5} alt="five slide" />
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                    <div class="game-profile-price ">
                                        <div class="game-profile-price__value">฿ {this.state.gamePrice}</div><button class="uk-button uk-button-danger uk-width-1-1" type="button"><span class="ico_shopping-cart"></span><span>Buy Now</span></button><button class="uk-button uk-button-primary uk-width-1-1" type="button"><span class="ico_add-square"></span><span>Add to Favourites</span></button>
                                    </div>
                                </div>
                                <div class="uk-width-1-3@s">
                                    <div class="game-profile-card">
                                        <div class="game-profile-card__media"><img src={this.state.image_url1} alt="game-profile-card" /></div>
                                        <div class="game-profile-card__intro"><span>{this.state.gameDetail}</span></div>
                                        <ul class="game-profile-card__list">
                                            <li>
                                                <div class="mr-b">Minimum Spec:</div>
                                                <div>{this.state.gameSpec}</div>
                                            </li>
                                            <li>
                                                <div>Developer:</div>
                                                <div>{this.state.gameDeveloper}</div>
                                            </li>
                                            <li>
                                                <div>Platforms:</div>
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
                                            </li>
                                        </ul>
                                        <ul class="game-profile-card__type">
                                            <li>
                                                <span>{this.state.gameCategory}</span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </main>
                    </div>
                </div >
            </div >
        )
    }

}


export default GamesProfile;
