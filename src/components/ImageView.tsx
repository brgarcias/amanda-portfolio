import { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';

import useClickOutside from '@/utils/useClickOutside';

const ImgViews = ({ close, src }) => {
  const nodes = useClickOutside(() => {
    close(false);
  });
  return (
    <Fragment>
      <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: 'hidden auto' }}
      >
        <div
          className={`mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`}
        >
          <div className="mfp-content" ref={nodes}>
            <div className="mfp-iframe-scaler">
              <Image src={src} className="mfp-img" alt="mfp-img" fill />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Fragment>
  );
};

const ImageView = () => {
  const [img, setImg] = useState(false);
  const [imgValue, setImgValue] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const as = document.querySelectorAll('a');
      as.forEach((a) => {
        if (a.href.includes('assets/images/')) {
          if (a.getAttribute('download') === null) {
            ReactDOM.findDOMNode(a).addEventListener('click', (e) => {
              e.preventDefault();
              setImgValue(a.href);
              setImg(true);
            });
          }
        }
      });
    }, 1500);
  }, []);
  return (
    <Fragment>
      {img && <ImgViews close={() => setImg(false)} src={imgValue} />}
    </Fragment>
  );
};
export default ImageView;
