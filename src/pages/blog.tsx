import Link from 'next/link';
import Image from 'next/image';

import Footer from '@/layout/Footer';
import Layout from '@/layout/Layout';
import blog1 from '@/public/assets/images/blog1.jpg';
import blog2 from '@/public/assets/images/blog2.jpg';
import blog3 from '@/public/assets/images/blog3.jpg';
import blog4 from '@/public/assets/images/blog4.jpg';

const Blog = () => {
  return (
    <Layout>
      <div className="wrapper">
        {/* Section Started Heading */}
        <div className="section section-inner started-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* titles */}
                <div className="h-titles">
                  <div
                    className="h-subtitle red splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    Our
                  </div>
                  <div
                    className="h-title splitting-text-anim-2 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    blog
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section Archive */}
        <div className="section section-inner m-archive">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                {/* archive items */}
                <div className="archive-items">
                  <div
                    className="archive-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <Link legacyBehavior href="blog-single">
                        <a>
                          <Image src={blog1} alt="Blog 01" fill />
                        </a>
                      </Link>
                    </div>
                    <div className="desc">
                      <div className="category">
                        Guides <span>/ November 3, 2020</span>
                      </div>
                      <div className="title">
                        <Link legacyBehavior href="blog-single">
                          <a>How to Do Panning Photography</a>
                        </Link>
                      </div>
                      <div className="text">
                        Gallery blocks have two settings: the number of columns,
                        and whether or not images should be cropped. The default
                        number of columns is three, and the maximum number of
                        columns is eight. Below is a three column gallery at
                        full width, with cropped images.
                      </div>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-single">
                          <a className="btn-link">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="archive-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <Link legacyBehavior href="blog-single">
                        <a>
                          <Image src={blog2} alt="Blog 02" fill />
                        </a>
                      </Link>
                    </div>
                    <div className="desc">
                      <div className="category">
                        Food <span>/ October 13, 2020</span>
                      </div>
                      <div className="title">
                        <Link legacyBehavior href="blog-single">
                          <a>How to Photograph Food without a Tripod</a>
                        </Link>
                      </div>
                      <div className="text">
                        Gallery blocks have two settings: the number of columns,
                        and whether or not images should be cropped. The default
                        number of columns is three, and the maximum number of
                        columns is eight. Below is a three column gallery at
                        full width, with cropped images.
                      </div>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-single">
                          <a className="btn-link">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="archive-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <Link legacyBehavior href="blog-single">
                        <a>
                          <Image src={blog3} alt="Blog 03" fill />
                        </a>
                      </Link>
                    </div>
                    <div className="desc">
                      <div className="category">
                        Fashion <span>/ September 28, 2020</span>
                      </div>
                      <div className="title">
                        <Link legacyBehavior href="blog-single">
                          <a>My Style My Choise Lighthouse</a>
                        </Link>
                      </div>
                      <div className="text">
                        Gallery blocks have two settings: the number of columns,
                        and whether or not images should be cropped. The default
                        number of columns is three, and the maximum number of
                        columns is eight. Below is a three column gallery at
                        full width, with cropped images.
                      </div>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-single">
                          <a className="btn-link">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="archive-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="image">
                      <Link legacyBehavior href="blog-single">
                        <a>
                          <Image src={blog4} alt="Blog 04" fill />
                        </a>
                      </Link>
                    </div>
                    <div className="desc">
                      <div className="category">
                        Wildlife <span>/ August 3, 2020</span>
                      </div>
                      <div className="title">
                        <Link legacyBehavior href="blog-single">
                          <a>3 Ways To Level Up Your Photography</a>
                        </Link>
                      </div>
                      <div className="text">
                        Gallery blocks have two settings: the number of columns,
                        and whether or not images should be cropped. The default
                        number of columns is three, and the maximum number of
                        columns is eight. Below is a three column gallery at
                        full width, with cropped images.
                      </div>
                      <div className="readmore">
                        <Link legacyBehavior href="/blog-single">
                          <a className="btn-link">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* pager */}
                <div className="pager">
                  <span className="page-numbers current">1</span>
                  <a className="page-numbers" href="#">
                    2
                  </a>
                  <a className="page-numbers" href="#">
                    3
                  </a>
                  <span className="page-numbers dots">…</span>
                  <a className="page-numbers" href="#">
                    9
                  </a>
                  <a className="page-numbers next" href="#">
                    <i className="icon-arrow" />
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                {/* sidebar */}
                <div
                  className="col__sedebar scrolla-element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="content-sidebar">
                    <aside className="widget-area">
                      <section className="widget widget_search">
                        <h2 className="widget-title">Search</h2>
                        <form className="search-form">
                          <label>
                            <span className="screen-reader-text">
                              Search for:
                            </span>
                            <input
                              type="search"
                              className="search-field"
                              placeholder="Search"
                              defaultValue=""
                            />
                          </label>
                          <input
                            type="submit"
                            className="search-submit"
                            defaultValue="Search"
                          />
                        </form>
                      </section>
                      <section className="widget widget_categories">
                        <h2 className="widget-title">Categories</h2>
                        <ul>
                          <li>
                            <a href="#">Food</a> (1)
                          </li>
                          <li>
                            <a href="#">Wildlife</a> (2)
                          </li>
                          <li>
                            <a href="#">Fashion</a> (4)
                          </li>
                          <li>
                            <a href="#">Guides</a> (5)
                          </li>
                        </ul>
                      </section>
                      <section className="widget widget_recent_entries">
                        <h2 className="widget-title">Recent Posts</h2>
                        <ul>
                          <li>
                            <a href="#">
                              3 Ways To Level Up Your Photography Skills of
                              Wildlife
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              My Style My Choise Lighthouse Long White Jacket
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              How to Photograph Food without a Tripod
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              How to Do Panning Photography Nam mollierap ibus
                            </a>
                          </li>
                        </ul>
                      </section>
                      <section className="widget widget_tag_cloud">
                        <h2 className="widget-title">Tag Cloud</h2>
                        <div className="tagcloud">
                          <a href="#" className="tag-cloud-link">
                            html
                          </a>
                          <a href="#" className="tag-cloud-link">
                            photo
                          </a>
                          <a href="#" className="tag-cloud-link">
                            food
                          </a>
                          <a href="#" className="tag-cloud-link">
                            chat
                          </a>
                          <a href="#" className="tag-cloud-link">
                            fashion
                          </a>
                          <a href="#" className="tag-cloud-link">
                            css
                          </a>
                          <a href="#" className="tag-cloud-link">
                            embeds
                          </a>
                          <a href="#" className="tag-cloud-link">
                            portfolio
                          </a>
                          <a href="#" className="tag-cloud-link">
                            personal
                          </a>
                          <a href="#" className="tag-cloud-link">
                            js
                          </a>
                        </div>
                      </section>
                      <section className="widget widget_archive">
                        <h2 className="widget-title">Archives List</h2>
                        <ul>
                          <li>
                            <a href="#">November 2019</a>&nbsp;(11)
                          </li>
                          <li>
                            <a href="#">October 2019</a>&nbsp;(1)
                          </li>
                          <li>
                            <a href="#">January 2020</a>&nbsp;(5)
                          </li>
                          <li>
                            <a href="#">March 2020</a>&nbsp;(5)
                          </li>
                          <li>
                            <a href="#">January 2020</a>&nbsp;(6)
                          </li>
                          <li>
                            <a href="#">March 2020</a>&nbsp;(1)
                          </li>
                          <li>
                            <a href="#">October 2020</a>&nbsp;(1)
                          </li>
                          <li>
                            <a href="#">September 2020</a>&nbsp;(2)
                          </li>
                          <li>
                            <a href="#">August 2020</a>&nbsp;(3)
                          </li>
                        </ul>
                      </section>
                      <section className="widget widget_recent_comments">
                        <h2 className="widget-title">Recent Comments</h2>
                        <ul>
                          <li className="recentcomments">
                            <span className="comment-author-link">
                              <a href="#" className="url">
                                John Doe
                              </a>
                            </span>{' '}
                            on{' '}
                            <a href="#">
                              How to Photograph Food without a Tripod
                            </a>
                          </li>
                          <li className="recentcomments">
                            <span className="comment-author-link">
                              <a href="#" className="url">
                                John Doe
                              </a>
                            </span>{' '}
                            on{' '}
                            <a href="#">
                              How to Photograph Food without a Tripod
                            </a>
                          </li>
                          <li className="recentcomments">
                            <span className="comment-author-link">
                              <a href="#" className="url">
                                James Flick
                              </a>
                            </span>{' '}
                            on{' '}
                            <a href="#">
                              My Style My Choise Lighthouse Long White Jacket
                            </a>
                          </li>
                        </ul>
                      </section>
                    </aside>
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
export default Blog;
