import Link from "next/link";
import Footer from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
const BlogSingle = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Started Heading */}
        <div className="section section-inner started-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* titles */}
                <div className="m-titles">
                  <div
                    className="m-category splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <Link legacyBehavior href="/blog">
                      <a>Guides</a>
                    </Link>
                    <em> / November 3, 2020</em>
                  </div>
                  <div
                    className="m-title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    How to Do Panning Photography
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Image Large */}
        <div className="section section-inner m-image-large">
          <div className="image">
            <div
              className="img scrolla-element-anim-1 scroll-animate"
              data-animate="active"
              style={{ backgroundImage: "url(assets/images/blog1.jpg)" }}
            />
          </div>
        </div>
        {/* Section Archive */}
        <div className="section section-inner m-archive">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1">
                {/* content */}
                <div className="post-content">
                  <p>
                    Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                    mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                    arcu lacus, ornare eget ligula vel, commodo luctus felis. Ut
                    dignissim sapien sit amet molestie rutrum. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Pellentesque in porta dolor, a suscipit
                    risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Cras ac arcu in lorem rhoncus ullamcorper. Ut at nulla
                    ut libero mollis viverra sed vitae purus.
                  </p>
                  <blockquote>
                    <p>
                      Photography is the story I fail to put into words get{" "}
                      <br />
                      ligula vel, commodo luctus felis. Ut dignissim sapien{" "}
                      <br />
                      sit amet molestie rutr
                    </p>
                    <cite>- Destin Sparks</cite>
                  </blockquote>
                  <p>
                    Nam dui mauris, congue vel nisi in, tempus gravida enim.
                    Nulla et tristique orci. Pellentesque lectus sapien, maximus
                    id gravida sit amet, tristique non eros. Etiam aliquet, sem
                    vitae sagittis convallis, ante sapien tincidunt nisl, eget
                    dapibus tortor velit quis ex. Proin et condimentum est, sed
                    pretium ex. Mauris posuere est metus, vitae commodo sem
                    posuere eget. Praesent maximus augue rutrum, consequat magna
                    id, facilisis lorem. Quisque molestie, turpis ac interdum
                    gravida
                  </p>
                  <p>
                    <br />
                  </p>
                  <h3>Aliquam vel sem vel vellesuada</h3>
                  <p>
                    <img src="assets/images/blog2.jpg" alt="" />
                  </p>
                  <p>
                    Vivamus interdum suscipit lacus. Nunc ultrices accumsan
                    mattis. Aliquam vel sem vel velit efficitur malesuada. Donec
                    arcu lacus, ornare eget ligula vel, commodo luctus felis. Ut
                    dignissim sapien sit amet molestie rutrum. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Pellentesque in porta dolor, a suscipit
                    risus. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Cras ac arcu in lorem rhoncus ullamcorper. Ut at nulla
                    ut libero mollis viverra sed vitae purus.
                  </p>
                  <ul>
                    <li>
                      Donec arcu lacus, ornare eget ligula vel, commodo luctus
                      felis.
                    </li>
                    <li>Ut dignissim sapien sit amet molestie rutrum.</li>
                    <li>
                      Orci varius natoque penatibus et magnis dis parturient
                      montes.
                    </li>
                    <li>
                      Ut at nulla ut libero mollis viverra sed vitae purus.
                    </li>
                  </ul>
                  <p>
                    Nam dui mauris, congue vel nisi in, tempus gravida enim.
                    Nulla et tristique orci. Pellentesque lectus sapien, maximus
                    id gravida sit amet, tristique non eros. Etiam aliquet, sem
                    vitae sagittis convallis, ante sapien tincidunt nisl, eget
                    dapibus tortor velit quis ex.
                  </p>
                </div>
                <div className="post-details">
                  <span className="tags-links">
                    <span>Tags:</span>
                    <Link legacyBehavior href="blog">
                      <a>photo</a>
                    </Link>
                    <Link legacyBehavior href="blog">
                      <a>fashion</a>
                    </Link>
                    <Link legacyBehavior href="blog">
                      <a>creative</a>
                    </Link>
                  </span>
                </div>
                {/* Comments */}
                <div
                  className="comments-post scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  {/* Comments */}
                  <div className="section__comments">
                    <div className="m-titles">
                      <div className="m-title align-left">3 Comments</div>
                    </div>
                    <ul className="comments">
                      <li className="comment comment-item">
                        <div className="comment comment-box">
                          <img
                            src="https://secure.gravatar.com/avatar/aa9d265f1a064dcd6973df722b49c392?s=64&d=mm&r=g"
                            className="avatar"
                            alt=""
                          />
                          <div className="comment-box__body">
                            <div className="content-caption post-content description">
                              <h5 className="comment-box__details">
                                Alex Morrison <span>March 9, 2021</span>
                              </h5>
                              <p>
                                Gallery blocks have two settings: the number of
                                columns, and whether or not images should be
                                cropped. The default number of columns is three,
                                and the maximum number of columns is eight.
                                Below is a three column gallery at full width,
                                with cropped images.
                              </p>
                            </div>
                          </div>
                          <div className="comment-footer">
                            <a className="comment-reply-link" href="#">
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="comment comment-item">
                        <div className="comment comment-box">
                          <img
                            src="https://secure.gravatar.com/avatar/aa9d265f1a064dcd6973df722b49c392?s=64&d=mm&r=g"
                            className="avatar"
                            alt=""
                          />
                          <div className="comment-box__body">
                            <div className="content-caption post-content description">
                              <h5 className="comment-box__details">
                                John Doe <span>March 9, 2021</span>
                              </h5>
                              <p>
                                Gallery blocks have two settings: the number of
                                columns, and whether or not images should be
                                cropped. The default number of columns is three,
                                and the maximum number of columns is eight.
                                Below is a three column gallery at full width,
                                with cropped images.
                              </p>
                            </div>
                          </div>
                          <div className="comment-footer">
                            <a className="comment-reply-link" href="#">
                              Reply
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="form-comment">
                      <div className="comment-respond">
                        <div className="m-titles">
                          <div className="m-title align-left">
                            Leave a comment
                          </div>
                        </div>
                        <form method="post" className="comment-form">
                          <div className="group-row">
                            <div className="group full">
                              <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                              />
                            </div>
                            <div className="group full">
                              <input
                                type="text"
                                name="email"
                                placeholder="Email Address"
                              />
                            </div>
                            <div className="group full">
                              <textarea
                                className="textarea"
                                rows={3}
                                placeholder="Comment"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="group-row">
                            <div className="group">
                              <button
                                type="submit"
                                name="submit"
                                id="submit"
                                className="btn"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export default BlogSingle;
