define([ "Floors" ], function(Floors) {

	var scene = null;
	var camera = null;
	var renderer = null;
	var cube = null;
	var floors = new Floors();
	var controls = null;
	var animateNpc = true;

	var keyMove = {
		moveForward : false,
		moveBackward : false,
		moveLeft : false,
		moveRight : false
	};

	var cameraPosition = {
		x : 2,
		y : 0,
		z : 2
	};

	function Control() {
		scene = new THREE.Scene();
		var width = window.innerWidth / window.innerHeight;
		camera = new THREE.PerspectiveCamera(75, width, 0.1, 1000);

		renderer = new THREE.WebGLRenderer({
			antialias : true
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);

		cube = addCube(scene, camera, false, 1, 1);

		var floors = new Floors();
		floors.drawFloor(scene);

		document.addEventListener('keydown', onKeyDown, false);
		document.addEventListener('keyup', onKeyUp, false);

		if (keyMove.moveLeft) {
			cameraPosition.x -= 1;
		} else {
		}

	}

	var onKeyDown = function(event) {

		switch (event.keyCode) {

		case 38: // up
		case 87: // w
			keyMove.moveForward = true;
			break;

		case 37: // left
		case 65: // a
			keyMove.moveLeft = true;
			break;

		case 40: // down
		case 83: // s
			keyMove.moveBackward = true;
			break;

		case 39: // right
		case 68: // d
			keyMove.moveRight = true;
			break;
		}
	};

	var onKeyUp = function(event) {

		switch (event.keyCode) {

		case 38: // up
		case 87: // w
			keyMove.moveForward = false;
			break;

		case 37: // left
		case 65: // a
			keyMove.moveLeft = false;
			break;

		case 40: // down
		case 83: // s
			keyMove.moveBackward = false;
			break;

		case 39: // right
		case 68: // d
			keyMove.moveRight = false;
			break;
		}
	};
	
	
	function render() {

		camera.position.set(cameraPosition.x, cameraPosition.y,
				cameraPosition.z);

		if (keyMove.moveLeft) {
			cameraPosition.x -= -0.1;
		} else if (keyMove.moveRight) {
			cameraPosition.x -= 0.1;
		} else if (keyMove.moveUp) {
			cameraPosition.z -= -0.1;
		} else if (keyMove.moveDown) {
			cameraPosition.z -= 0.1;
		}

		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}

	function addCube(scene, camera, wireFrame) {
		//for (var i=0; i<6; i++) {
		//	addCube(scene, camera, wireFrame, 1, 1);
		//}

		return cube;
	}

	
	return Control;
	
});