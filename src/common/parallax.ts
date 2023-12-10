import Parallax from 'parallax-js';

export const parallaxAnimation = () => {
  let scene = document.getElementById('scene');
  if (scene != undefined) {
    let parallaxInstance = new Parallax(scene, {
      limitY: 15,
    });
    return parallaxInstance;
  }
};
