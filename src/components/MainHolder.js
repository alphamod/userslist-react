import React, { Component } from "react";
// import usersdata from "./userdata";

class MainHolder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dispElement: "users",
      userdata: [
        {
          id: 1,
          user: "User1",
          post: "post 1 from user1"
        },
        {
          id: 2,
          user: "User2",
          post: "post 2 from user2"
        },
        {
          id: 3,
          user: "User3",
          post: "post 3 from user3"
        }
      ]
    };
  }

  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          {this.state.dispElement === "users" ? (
            <div className="offset-xl-1 col-xl-11">
              <div className="container-fluid">
                <div className="row ">
                  <div className="addPosts border-bottom shadow-md border-secondary pb-2 my-2 col-xl-12 d-flex flex-row-reverse">
                    <div className="">
                      <span className=" btn shadow-sm">
                        <i className="material-icon md-36">add_box</i>
                      </span>
                    </div>
                  </div>
                  <div>
                    {this.state.userdata.map(ele => (
                      <h4>{ele.user}</h4>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h1>Posts</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MainHolder;
