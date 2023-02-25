const Preloader = () => {
  return (
    <div className="preloader">
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="spinner-logo">
            <img src="assets/images/logo.png" alt="" />
            <div className="spinner-dot" />
            <div className="spinner spinner-line" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preloader;
