import axios from "axios";
import React from "react";
import { Redirect } from "react-router";
import Menu from "../components/Menu";

class UpdateProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameNumber: props.match.params.gameNumber,
      gameName: "",
      gameDetail: "",
      image_url1: "",
      image_url2: "",
      image_url3: "",
      image_url4: "",
      image_url5: "",
      gameSpec: "",
      gameDeveloper: "",
      gamePrice: "",
      gameStock: "",
      gameCategory: "",
      redirect: null,
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://difficult-girdle-fly.cyclic.app/admin/edit-products/" +
          this.state.gameNumber
      )
      .then((res) => {
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
          gameCategory: data.gameCategory,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://difficult-girdle-fly.cyclic.app/admin/edit-products",
        this.state
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.result) {
          this.setState({ redirect: "/admin-product" });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div class="m-2" style={{ paddingTop: "110px" }}>
        <div className="page-home">
            <div classNameName="row">
              <div classNameName="col-md-6">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Game Name</label>
                    <input
                      type="text"
                      name="gameName"
                      className="form-control"
                      placeholder="Game Name"
                      onChange={this.handleChange}
                      value={this.state.gameName}
                    />
                  </div>
                  <div className="form-group">
                    <label>Detail</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="gameDetail"
                      placeholder="Detail"
                      onChange={this.handleChange}
                      value={this.state.gameDetail}
                    />
                  </div>
                  <div className="form-group">
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Image URL 1
                      </label>
                      <input
                        type="text"
                        name="image_url1"
                        className="form-control"
                        placeholder="Image URL 1"
                        onChange={this.handleChange}
                        value={this.state.image_url1}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Image URL 2
                      </label>
                      <input
                        type="text"
                        name="image_url2"
                        className="form-control"
                        placeholder="Image URL 2"
                        onChange={this.handleChange}
                        value={this.state.image_url2}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Image URL 3
                      </label>
                      <input
                        type="text"
                        name="image_url3"
                        className="form-control"
                        placeholder="Image URL 3"
                        onChange={this.handleChange}
                        value={this.state.image_url3}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Image URL 4
                      </label>
                      <input
                        type="text"
                        name="image_url4"
                        className="form-control"
                        placeholder="Image URL 4"
                        onChange={this.handleChange}
                        value={this.state.image_url4}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Image URL 5
                      </label>
                      <input
                        type="text"
                        name="image_url5"
                        className="form-control"
                        placeholder="Image URL 5"
                        onChange={this.handleChange}
                        value={this.state.image_url5}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Spec</label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="gameSpec"
                      placeholder="Spec"
                      onChange={this.handleChange}
                      value={this.state.gameSpec}
                    />
                  </div>
                  <div className="form-group">
                    <label>Developer</label>
                    <input
                      type="text"
                      name="gameDeveloper"
                      className="form-control"
                      placeholder="Developer"
                      onChange={this.handleChange}
                      value={this.state.gameDeveloper}
                    />
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="text"
                      name="gamePrice"
                      className="form-control"
                      placeholder="Price"
                      onChange={this.handleChange}
                      value={this.state.gamePrice}
                    />
                  </div>
                  <div className="form-group">
                    <label>Stock</label>
                    <input
                      type="text"
                      name="gameStock"
                      className="form-control"
                      placeholder="Stock"
                      onChange={this.handleChange}
                      value={this.state.gameStock}
                    />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <input
                      type="text"
                      name="gameCategory"
                      className="form-control"
                      placeholder="Category"
                      onChange={this.handleChange}
                      value={this.state.gameCategory}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn mt-4"
                    style={{ backgroundColor: "#012738", color: "white" }}
                  >
                    Submit
                  </button>
                </form>
                <br />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default UpdateProducts;
