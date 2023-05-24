import axios from "axios";
import React from "react";
import { Redirect } from "react-router";
import Menu from "../components/Menu";

class CreateProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameNumber: "",
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
        "https://difficult-girdle-fly.cyclic.app/admin/add-products",
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

export default CreateProducts;
