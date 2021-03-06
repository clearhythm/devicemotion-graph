define(['three', 'app/three/texture'], function (THREE, texture) {
  return {
    whitePlastic: new THREE.MeshPhongMaterial({
      ambient: 0x111111,
      color: 0x8c8c8c,
      specular: 0xb3b3b3,
      shininess: 32
    }),
    frostedPlastic: new THREE.MeshPhongMaterial({
      ambient: 0x000000,
      color: 0x8c8c8c,
      specular: 0xb3b3b3,
      //shininess: 32,
      opacity: 0.5,
      transparent: true
    }),
    starSprite: new THREE.SpriteMaterial({
      map: texture.lensflare,
      useScreenCoordinates: false, // todo: necessary?
      color: 0xffffff // todo: necessary?
    }),
    softSprite: new THREE.SpriteMaterial({
      map: texture.spark,
      useScreenCoordinates: false, // todo: necessary?
      color: 0xffffff // todo: necessary?
    }),
    line: new THREE.LineBasicMaterial({
      color: 0x0000ff,
      fog: true
    })
  };
});