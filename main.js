import {loadGLTF} from "/loader.js";
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    //mockWithVideo('../../assets/mock-videos/musicband1.mp4');

    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: 'blackDebit.mind'
    });
    const {renderer, scene, camera} = mindarThree;

    const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
    scene.add(light);

    const cardText = await loadGLTF('first4.gltf');
    cardText.scene.scale.set(1, 1, 1);
    cardText.scene.position.set(0.7, 0.7, 0);
    cardText.scene.rotation.x += 1.5;

    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(cardText.scene);

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  };
  start();
});
