import Data from '@data/sections/subscribe';

const SubscribeSection = () => {
  return (
    <>
      {/* call to action */}
      <section id="about" className="mil-p-90-90">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="mil-center">
              <h2 className="mil-up mil-mb-60">{Data.title}</h2>
              <div className="mil-up">
                <form
                  method="post"
                  target="_blank"
                  className="mil-subscribe-form"
                >
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="EMAIL"
                    required
                  />
                  <input type="hidden" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
    </>
  );
};

export default SubscribeSection;
