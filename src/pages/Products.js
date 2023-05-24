import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentWillMount() {
    const scriptTag = document.createElement("script");
    scriptTag.src = "assets/js/main.js";
    scriptTag.async = true;
    document.body.appendChild(scriptTag);
  }
  getData = () => {
    axios
      .get("https://difficult-girdle-fly.cyclic.app/admin/products")
      .then((res) => {
        this.setState({ data: res.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleDelete = (gameNumber) => {
    console.log(gameNumber);
    axios
      .get(
        "https://difficult-girdle-fly.cyclic.app/admin/delete-products?gameNumber=" +
          gameNumber
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.result) {
          this.getData();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <div class="m-2" style={{ paddingTop: '110px' }}>
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <div class="row">
                <div class="col-sm-6">
                  <h2 class="m-0 font-weight-bold">Manage Product</h2>
                </div>
                <div class="col-sm-6 text-right">
                  <Link
                    to="/create-product"
                    type="submit"
                    class="btn mb-5"
                    style={{
                      backgroundColor: "#012738",
                      color: "white",
                    }}
                  >
                    <i class="material-icons"></i> <span>Add New Products</span>
                  </Link>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table
                  class="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr class="text-center">
                      <th scope="col">Game Name</th>
                      <th scope="col">Detail</th>
                      <th scope="col">Image URL 1</th>
                      <th scope="col">Image URL 2</th>
                      <th scope="col">Image URL 3</th>
                      <th scope="col">Image URL 4</th>
                      <th scope="col">Image URL 5</th>
                      <th scope="col">Spec</th>
                      <th scope="col">Developer</th>
                      <th scope="col">Price</th>
                      <th scope="col">Stock</th>
                      <th scope="col">Category</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>

                  <tbody class="text-black">
                    {this.state.data.map((item) => (
                      <tr>
                        <td>{item.gameName}</td>
                        <td>{item.gameDetail}</td>
                        <td>{item.image_url1}</td>
                        <td>{item.image_url2}</td>
                        <td>{item.image_url3}</td>
                        <td>{item.image_url4}</td>
                        <td>{item.image_url5}</td>
                        <td>{item.gameSpec}</td>
                        <td>{item.gameDeveloper}</td>
                        <td>{item.gamePrice}</td>
                        <td>{item.gameStock}</td>
                        <td>{item.gameCategory}</td>
                        <td>
                          <Link to={"/update-products/" + item.gameNumber}>
                            <button className="btn">
                              <i
                                class="material-icons"
                                data-toggle="tooltip"
                                title="Edit"
                              >
                                <img src="assets/img/edit.png" />
                              </i>
                            </button>
                          </Link>
                          <button
                            className="btn"
                            onClick={() => {
                              if (
                                window.confirm(
                                  "Are you sure you wish to delete this item?"
                                )
                              )
                                this.handleDelete(item.gameNumber);
                            }}
                          >
                            <i
                              class="material-icons"
                              data-toggle="tooltip"
                              title="Delete"
                            >
                              <img src="assets/img/delete.png" />
                            </i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
