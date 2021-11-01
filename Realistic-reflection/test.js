    import { OrbitControls } from './js/OrbitControls.js';
    import { FlakesTexture } from './js/FlakesTexture.js';
    import { RGBELoader } from './js/RGBELoader.js';
    
    let scene, camera, controls, renderer;
    let rot = 0.01;
    
    let cube;
    let createSphere = function() {
        let envmaploader = new THREE.PMREMGenerator(renderer);

        new RGBELoader().setPath('textures/').load('hawow.hdr', function(hdrmap){
            let envmap = envmaploader.fromCubemap(hdrmap)
            let texture = new THREE.CanvasTexture(new FlakesTexture());
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.x = 10;
            texture.repeat.y = 6;

            const ballMaterial = {
                clearcoat: 1.0,
                cleacoatRoughness: 0.1,
                metalness: 0.9,
                roughness:0.5,
                color: 0x8418ca,
                normalMap: texture,
                normalScale: new THREE.Vector2(0.15,0.15),
                envMap: envmap.texture
            };

            let ballGeo = new THREE.SphereGeometry(100, 64, 64);
            let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial);
            let ballMesh = new THREE.Mesh(ballGeo, ballMat);
            scene.add(ballMesh);
        });
    };

    let lights = function() {
        const pointlight = new THREE.PointLight(0xffffff,1);
        pointlight.position.set(200,200,200);
        scene.add(pointlight);
    };

    // set up the environment - 
    // initiallize scene, camera, objects and renderer
    let init = function() {
        // 1. create the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x474747);

        renderer = new THREE.WebGLRenderer();   
        renderer.setSize(window.innerWidth, window.innerHeight);
        // renderer.setSize(window.offsetWidth, window.offsetHeight);
        document.body.appendChild(renderer.domElement);

        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;
        
        // 2. create an locate the camera       
        camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(0,0,500);
        controls = new OrbitControls(camera, renderer.domElement);
        controls.listenToKeyEvents( window ); // optional

        //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

        controls.enableDamping = true;

        //controls.autoRotate = true;
//         
        // 3. create an locate the object on the scene           
        createSphere();
        lights();
        
        

    };
    
    // function cubeOne() {
    // }

    let mainLoop = function() {
        // cubeOne();
        // textOne();
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();
