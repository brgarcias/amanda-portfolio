const PageTitle = ({ title }) => {
  return (
    <div className="section section-inner started-heading">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {/* titles */}
            <div className="h-titles">
              <div
                className="h-title splitting-text-anim-2 scroll-animate"
                data-splitting="chars"
                data-animate="active"
              >
                {title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageTitle;
