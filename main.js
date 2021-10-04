function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');

    const guitar = {
        setelan_color: [0.71, 0.29, 0],
        setelan_a: [-0.5, 0.652],
        setelan_b: [-0.474, 0.674],
        setelan_c: [-0.416, 0.674],
        setelan_d: [-0.39, 0.652],
        setelan_e: [-0.5, 0.544],
        setelan_f: [-0.48, 0.508],
        setelan_g: [-0.412, 0.508],
        setelan_h: [-0.39, 0.544],

        batang_color: [0.26, 0.10, 0],
        batang_a: [-0.48, 0.508],
        batang_b: [-0.412, 0.508],
        batang_c: [-0.48, -0.074],
        batang_d: [-0.412, -0.074],

        body_color: [0.71, 0.29, 0],
        body_z: [-0.446, -0.196],
        body_a: [-0.48, 0.042],
        body_b: [-0.412, 0.042],
        body_c: [-0.542, 0.024],
        body_d: [-0.346, 0.024],
        body_e: [-0.602, -0.048],
        body_f: [-0.29, -0.048],
        body_g: [-0.594, -0.14],
        body_h: [-0.296, -0.14],
        body_i: [-0.674, -0.238],
        body_j: [-0.216, -0.238],
        body_k: [-0.666, -0.392],
        body_l: [-0.224, -0.392],
        body_m: [-0.578, -0.484],
        body_n: [-0.31, -0.484],
        body_o: [-0.504, -0.508],
        body_p: [-0.386, -0.508],

        bolong_color: [0, 0, 0],
        bolong_a: [-0.472, -0.064],
        bolong_b: [-0.420, -0.064],
        bolong_c: [-0.502, -0.094],
        bolong_d: [-0.39, -0.094],
        bolong_e: [-0.502, -0.140],
        bolong_f: [-0.39, -0.140],
        bolong_g: [-0.472, -0.176],
        bolong_h: [-0.420, -0.176],
    };

    const guitar_2 = {
        setelan2_color: [0.71, 0.29, 0],
        setelan2_a: [0.388, 0.67],
        setelan2_b: [0.420, 0.662],
        setelan2_c: [0.342, 0.508],
        setelan2_d: [0.376, 0.508],

        batang2_color: [0.26, 0.10, 0],
        batang2_a: [0.342, 0.508],
        batang2_b: [0.376, 0.508],
        batang2_c: [0.342, 0.044],
        batang2_d: [0.376, 0.044],

        body2_color: [0.71, 0.29, 0],
        body2_a: [0.342, 0.044],
        body2_b: [0.474, 0.044],
        body2_c: [0.342, -0.508],
        body2_d: [0.474, -0.508],
    };

  const vertices = [
      ...guitar.setelan_a, ...guitar.setelan_color,
      ...guitar.setelan_b, ...guitar.setelan_color,
      ...guitar.setelan_c, ...guitar.setelan_color,
      ...guitar.setelan_a, ...guitar.setelan_color,
      ...guitar.setelan_c, ...guitar.setelan_color,
      ...guitar.setelan_d, ...guitar.setelan_color, // 30
      ...guitar.setelan_e, ...guitar.setelan_color,
      ...guitar.setelan_f, ...guitar.setelan_color,
      ...guitar.setelan_g, ...guitar.setelan_color,
      ...guitar.setelan_g, ...guitar.setelan_color,
      ...guitar.setelan_h, ...guitar.setelan_color,
      ...guitar.setelan_e, ...guitar.setelan_color,
      ...guitar.setelan_a, ...guitar.setelan_color,
      ...guitar.setelan_h, ...guitar.setelan_color,
      ...guitar.setelan_d, ...guitar.setelan_color,
      ...guitar.setelan_a, ...guitar.setelan_color,
      ...guitar.setelan_e, ...guitar.setelan_color,
      ...guitar.setelan_h, ...guitar.setelan_color,
      
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_b, ...guitar.body_color,
      ...guitar.body_a, ...guitar.body_color,
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_c, ...guitar.body_color,
      ...guitar.body_a, ...guitar.body_color,
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_d, ...guitar.body_color,
      ...guitar.body_b, ...guitar.body_color,
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_c, ...guitar.body_color,
      ...guitar.body_e, ...guitar.body_color,
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_d, ...guitar.body_color,
      ...guitar.body_f, ...guitar.body_color,
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_e, ...guitar.body_color,
      ...guitar.body_g, ...guitar.body_color,
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_f, ...guitar.body_color,
      ...guitar.body_h, ...guitar.body_color,
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_g, ...guitar.body_color,
      ...guitar.body_i, ...guitar.body_color,
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_h, ...guitar.body_color,
      ...guitar.body_j, ...guitar.body_color,
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_i, ...guitar.body_color,
      ...guitar.body_k, ...guitar.body_color,
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_j, ...guitar.body_color,
      ...guitar.body_l, ...guitar.body_color,
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_k, ...guitar.body_color,
      ...guitar.body_m, ...guitar.body_color,
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_l, ...guitar.body_color,
      ...guitar.body_n, ...guitar.body_color,
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_m, ...guitar.body_color,
      ...guitar.body_o, ...guitar.body_color,
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_n, ...guitar.body_color,
      ...guitar.body_p, ...guitar.body_color,
      ...guitar.body_z, ...guitar.body_color,
      ...guitar.body_o, ...guitar.body_color,
      ...guitar.body_p, ...guitar.body_color,
            
      ...guitar.batang_a, ...guitar.batang_color,
      ...guitar.batang_b, ...guitar.batang_color,
      ...guitar.batang_c, ...guitar.batang_color,
      ...guitar.batang_b, ...guitar.batang_color,
      ...guitar.batang_c, ...guitar.batang_color,
      ...guitar.batang_d, ...guitar.batang_color,
      
      ...guitar.bolong_a, ...guitar.bolong_color,
      ...guitar.bolong_b, ...guitar.bolong_color,
      ...guitar.bolong_c, ...guitar.bolong_color,
      ...guitar.bolong_b, ...guitar.bolong_color,
      ...guitar.bolong_c, ...guitar.bolong_color,
      ...guitar.bolong_d, ...guitar.bolong_color,
      ...guitar.bolong_e, ...guitar.bolong_color,
      ...guitar.bolong_f, ...guitar.bolong_color,
      ...guitar.bolong_g, ...guitar.bolong_color,
      ...guitar.bolong_f, ...guitar.bolong_color,
      ...guitar.bolong_g, ...guitar.bolong_color,
      ...guitar.bolong_h, ...guitar.bolong_color,
      ...guitar.bolong_c, ...guitar.bolong_color,
      ...guitar.bolong_d, ...guitar.bolong_color,
      ...guitar.bolong_e, ...guitar.bolong_color,
      ...guitar.bolong_d, ...guitar.bolong_color,
      ...guitar.bolong_e, ...guitar.bolong_color,
      ...guitar.bolong_f, ...guitar.bolong_color,
      
      ...guitar_2.setelan2_a, ...guitar_2.setelan2_color,
      ...guitar_2.setelan2_b, ...guitar_2.setelan2_color,
      ...guitar_2.setelan2_c, ...guitar_2.setelan2_color,
      ...guitar_2.setelan2_b, ...guitar_2.setelan2_color,
      ...guitar_2.setelan2_c, ...guitar_2.setelan2_color,
      ...guitar_2.setelan2_d, ...guitar_2.setelan2_color,
      
      ...guitar_2.batang2_a, ...guitar_2.batang2_color,
      ...guitar_2.batang2_b, ...guitar_2.batang2_color,
      ...guitar_2.batang2_c, ...guitar_2.batang2_color,
      ...guitar_2.batang2_b, ...guitar_2.batang2_color,
      ...guitar_2.batang2_c, ...guitar_2.batang2_color,
      ...guitar_2.batang2_d, ...guitar_2.batang2_color,
      
      ...guitar_2.body2_a, ...guitar_2.body2_color,
      ...guitar_2.body2_b, ...guitar_2.body2_color,
      ...guitar_2.body2_c, ...guitar_2.body2_color,
      ...guitar_2.body2_b, ...guitar_2.body2_color,
      ...guitar_2.body2_c, ...guitar_2.body2_color,
      ...guitar_2.body2_d, ...guitar_2.body2_color,
  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


  var vertexShaderSource = `
      attribute vec2 aPosition;
      attribute vec3 aColor;
      varying vec3 vColor;
      uniform float uChange;
      void main() {
          gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
          vColor = aColor;
      }
  `;

  var fragmentShaderSource = `
      precision mediump float;
      varying vec3 vColor;
      void main() {
          gl_FragColor = vec4(vColor, 1.0);
      }
  `;

  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);


  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);


  var shaderProgram = gl.createProgram();


  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);


  gl.linkProgram(shaderProgram);


  gl.useProgram(shaderProgram);


  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(
      aPosition,
      2,
      gl.FLOAT,
      false,
      5 * Float32Array.BYTES_PER_ELEMENT,
      0
  );
  gl.enableVertexAttribArray(aPosition);
  var aColor = gl.getAttribLocation(shaderProgram, "aColor");
  gl.vertexAttribPointer(
      aColor,
      3,
      gl.FLOAT,
      false,
      5 * Float32Array.BYTES_PER_ELEMENT,
      2 * Float32Array.BYTES_PER_ELEMENT
  );
  gl.enableVertexAttribArray(aColor);

  var freeze = false;
  // Interactive graphics with mouse
  function onMouseClick(event) {
      freeze = !freeze;
  }
  document.addEventListener("click", onMouseClick);
  // Interactive graphics with keyboard
  function onKeydown(event) {
      if (event.keyCode == 32) freeze = true;
  }

  function onKeyup(event) {
      if (event.keyCode == 32) freeze = false;
  }
  document.addEventListener("keydown", onKeydown);
  document.addEventListener("keyup", onKeyup);

  var speed = 0.0148;
  var change = 0;
  var uChange = gl.getUniformLocation(shaderProgram, "uChange");

  function moveVertices() {

      if (vertices[531] < -1.0 || vertices[451] > 1.0) {
          speed = speed * -1;
      }

      for (let i = 451; i < vertices.length; i += 5) {
          vertices[i] = vertices[i] + speed;
      }
  }


  function render() {
      moveVertices();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      change = change + speed;
      gl.uniform1f(uChange, change);

      gl.clearColor(0.760, 0.633, 0.380, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      var primitive = gl.TRIANGLES;
      var offset = 0;
      var nVertex = 108;
      gl.drawArrays(primitive, offset, nVertex);
      requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}