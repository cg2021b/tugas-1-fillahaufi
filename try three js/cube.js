    let scene, camera, renderer;
    let rot = 0.01;
    
    let cube;
    let createCube = function() {
        let geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        let material = new THREE.MeshBasicMaterial({color: 0x00a1cb});
        cube = new THREE.Mesh( geometry, material );
        scene.add(cube);
    };

    let cube2;
    let createCube2 = function() {
        let geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        let material = new THREE.MeshBasicMaterial({color: 0x00a1cb});
        cube2 = new THREE.Mesh( geometry, material );
        scene.add(cube2);
    };

    let sphere;
    let createSphere = function() {
        let geometry = new THREE.SphereGeometry( 0.2, 32, 16 );
        let material = new THREE.MeshPhongMaterial( { color: 0x00a1cb } );
        sphere = new THREE.Mesh( geometry, material );
        scene.add(sphere);
    };

    let cone;
    let createCone = function () {

        let geometry = new THREE.ConeGeometry( 0.2, 0.5, 32 );
        let material = new THREE.MeshPhongMaterial( {color: 0xffff00} );
        cone = new THREE.Mesh( geometry, material );
        scene.add( cone );
    };

    let torus;
    let createTorus = function() {

        let geometry = new THREE.TorusGeometry( 0.2, 0.1, 16, 100 );
        let material = new THREE.MeshPhongMaterial( { color: 0xff002f } );
        torus = new THREE.Mesh( geometry, material );
        scene.add( torus );
    };

    let line, wireframe;
    let createTorusKnot = function () {
        let geometry = new THREE.TorusKnotGeometry( 0.2, 0.05, 100, 16 );
        // let material = new THREE.MeshPhongMaterial( { color: 0x2bed3b } );
        // torusKnot = new THREE.Mesh( geometry, material );
        // scene.add( torusKnot );
        wireframe = new THREE.WireframeGeometry( geometry );

        line = new THREE.LineSegments( wireframe );
        line.material.depthTest = false;
        line.material.opacity = 0.25;
        line.material.transparent = true;

        scene.add( line );
    };

    //masih tidak dapat menggunakan text geometry
    let text;
    let createText = function() {
        let loader = new FontLoader();

        loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

            let geometry = new TextGeometry( 'Hello three.js!', {
                font: font,
                size: 80,
                height: 5,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 8,
                bevelOffset: 0,
                bevelSegments: 5
            } );

            text = new THREE.Mesh(geometry, {color: 0xad4000})
        } );
    };

    let lights = function() {
        const ambientLight = new THREE.AmbientLight( 0x006769 );
        const hemisphereLight = new THREE.HemisphereLight(0x404040, 0xFFFFFF, 0.5);
        const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
        const pointLight = new THREE.PointLight( 0xffffff, 1, 100 );
        pointLight.position.set( 50, 50, 50 );
        const spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(50, 50, 50);

        //ganti atau tambah variabel dengan light yang diinginkan
        scene.add(hemisphereLight);
        scene.add(ambientLight);
        scene.add(directionalLight);
    };

    // let hemisLight = function() {
    //     const skyColor = 0xB1E1FF;  // light blue
    //     const groundColor = 0xB97A20;  // brownish orange
    //     const intensity = 1;
    //     // const light = new THREE.AmbientLight(color, intensity);
    //     const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    //     sphere.add(light);
    // };

    // set up the environment - 
    // initiallize scene, camera, objects and renderer
    let init = function() {
        // 1. create the scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xababab);
        
        // 2. create an locate the camera       
        camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 5;
        
        // 3. create an locate the object on the scene           
        createCube();
        createCube2();
        createSphere();
        createCone();
        createTorus();
        createTorusKnot();
        // createText();
        lights();
        
        // 4. create the renderer     
        // container = document.getElementById('cube');
        // document.body.appendChild(container);
        renderer = new THREE.WebGLRenderer();   
        renderer.setSize(window.innerWidth, window.innerHeight);
        // renderer.setSize(window.offsetWidth, window.offsetHeight);
        
        document.body.appendChild(renderer.domElement);
        // container.appendChild(renderer.domElement);
      
    };
    
    function cubeOne() {
        cube.rotation.z -= rot
        cube.rotation.x -= rot
        cube.position.x = -2
        cube.position.y = 1
        // cube.position.x = -1.5
        // cube.position.y = 0.5
    }

    var speedRot = 0.05;
    var speedPos = 0.01;
    function cubeTwo() {
        cube2.rotation.z -= speedRot
        cube2.position.y = 1
        cube2.position.x += speedPos
        if (cube2.position.x <= -1) {
            speedPos *= -1
            speedRot *= -1
        }
        if (cube2.position.x >= 1) {
            // cube2.position.x += speedPos * -1
            speedPos *= -1
            speedRot *= -1
        }
    }

    function sphereOne() {
        sphere.rotation.z -= rot
        sphere.rotation.x -= rot
        sphere.position.x = -2
    }

    function coneOne() {
        cone.rotation.z -= rot;
        cone.rotation.x -= rot;
    }

    function torusOne() {
        torus.position.x = 2
        torus.rotation.z -= rot
        torus.rotation.x -= rot
    }

    function torusKnotOne() {
        line.position.x = -2
        line.position.y = -1
        line.rotation.z -= rot
        line.rotation.x -= rot
    }

    function textOne() {
        text.position.y = -1
        text.rotation.z -= rot
        text.rotation.x -= rot
    }

    // main animation loop - calls 50-60 in a second.
    let mainLoop = function() {
        cubeOne();
        cubeTwo();
        sphereOne();
        coneOne();
        torusOne();
        torusKnotOne();
        // textOne();
        renderer.render(scene, camera);
        requestAnimationFrame(mainLoop);
    };
    
    ///////////////////////////////////////////////
    init();
    mainLoop();
