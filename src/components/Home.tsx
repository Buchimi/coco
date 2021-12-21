import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Home</h1>
            <p>
              <b>Again, welcome to out website</b> <br />
              Building habits is an investment. One that is bound to serve you
              for years to come. Although it can be hard to get started making
              the right habits, we&apos;re here to help. To make habits that
              will work for you, you need to follow four steps.
            </p>
            <ol>
              <li>
                Make your habit obvious
                <div>
                  <strong hidden>Add something here</strong>
                </div>
              </li>
              <li>
                Make your habit attractive
                <div>
                  <strong hidden>Add something here</strong>
                </div>
              </li>
              <li>
                Make your habit easy
                <div>
                  <strong hidden>Add something here</strong>
                </div>
              </li>
              <li>
                Make tour habit satisfying
                <div>
                  <strong hidden>Add something here</strong>
                </div>
              </li>
              <hr />
            </ol>
            <footer>
              <h1>Contact us</h1>
              <div>
                <a href="tel:+12242215423">Phone number </a>
                <img
                  src="https://www.logolynx.com/images/logolynx/6b/6bbd2e4c17ccb77dc97775b22dc8116b.png"
                  style={{ height: 40, width: 40 }}
                />
                <img
                  src="https://logos-download.com/wp-content/uploads/2016/02/Twitter_Logo_new.png"
                  style={{ height: 40, width: 40 }}
                />
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
