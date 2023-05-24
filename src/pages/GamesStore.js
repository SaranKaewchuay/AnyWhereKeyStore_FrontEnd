import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import axios from 'axios';


class GamesStore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            gameCategory: "",
            gameName : ""
        }
    }

    componentDidMount() {
        this.getData()

    }

    componentDidUpdate() {
        if ((this.state.gameCategory) === "All") {
            this.getData();
        } else {
            this.getByCategory();
        }
    }

    getData = () => {
        axios.get("https://difficult-girdle-fly.cyclic.app/admin/products").then((res) => {
            this.setState({ data: res.data.data });
        }).catch((error) => {
            console.log(error);
        });
    }

    getByCategory = () => {
        axios.get("https://difficult-girdle-fly.cyclic.app/admin/getBy-category/" + this.state.gameCategory).then((res) => {
            this.setState({ data: res.data.data });
        }).catch((error) => {
            console.log(error);
        });

    }

    searchName = () => {
        axios.get("https://difficult-girdle-fly.cyclic.app/admin/getByName/" + this.state.gameName).then((res) => {
            this.setState({ data: res.data.data });
        }).catch((error) => {
            console.log(error);
        });
    }

    componentWillMount() {
        const scriptTag = document.createElement("script");
        scriptTag.src = "assets/js/main.js";
        scriptTag.async = true;
        document.body.appendChild(scriptTag);
    }

    handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    searchChange = (e) => {
        console.log(e.target.name, e.target.value);
        let name = e.target.name;
        let value = e.target.value;

        console.log("value = ",value)
        this.setState({
            [name]: value
        });
        
        if(!value){ 
            this.getData()
        }else{
            this.searchName()
        }

    }
    render() {
        return (
            <div className="page-store">
                <div className="page-wrapper">
                    <div className="page-content">
                        <main className="page-main">
                            <div className="widjet --filters">
                                <div className="widjet__head">
                                    <h3 className="uk-text-lead">Games Store</h3>
                                </div>
                                <div className="widjet__body">
                                    <div className="uk-grid uk-child-width-1-6@xl uk-child-width-1-3@l uk-child-width-1-2@s uk-flex-middle uk-grid-small" data-uk-grid>
                                        <div className="uk-width-1-1">
                                            <div className="search">
                                                <div className="search__input"><i className="ico_search"></i><input type="search" name="gameName" placeholder="Search" onChange={this.searchChange}/></div>
                                                <div className="search__btn"><button type="button"><i className="ico_microphone"></i></button></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-3 mr-4">
                                        <select class="form-control" name="gameCategory" onChange={this.handleChange}>
                                            <option value="All">All</option>
                                            <option value="Adventure">Adventure</option>
                                            <option value="Fighting">Fighting</option>
                                            <option value="Horror">Horror</option>
                                            <option value="RPG">RPG</option>
                                            <option value="Shooter">Shooter</option>
                                            <option value="Platformer">Platformer</option>
                                            <option value="Survival">Survival</option>
                                            <option value="Racing">Racing</option>
                                            <option value="Building">Building</option>
                                        </select>
                                    </div>
                                    <div class="uk-text-right mt-3">{this.state.data.length} items</div>
                                </div>
                            </div>
                            <div className="uk-grid uk-child-width-1-6@xl uk-child-width-1-3@l uk-child-width-1-2@s uk-flex-middle uk-grid-small" data-uk-grid>
                                {this.state.data.map(item => (
                                    <Link to={"/game-profile/" + item.gameNumber} style={{ textDecoration: 'none',color:"inherit"}}>
                                        <div className="game-card">
                                            <div className="game-card__box">
                                                <div className="game-card__media"><img src={item.image_url1}/></div>
                                                <div className="game-card__info">{item.gameName}
                                                    <ul class="game-profile-card__type">
                                                        <li><span>{item.gameCategory}</span></li>
                                                    </ul>
                                                    <div className="game-card__rating-and-price">
                                                        <div className="game-card__rating"><span>4.8</span><i className="ico_star"></i></div>
                                                        <div className="game-card__price"><span>฿ {item.gamePrice} </span></div>
                                                    </div>
                                                    <div className="game-card__bottom">
                                                        <div className="game-card__platform"><i className="ico_windows"></i><i className="ico_apple"></i></div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </main>
                    </div >
                </div >
            </div >
        )
    }
}

export default GamesStore;