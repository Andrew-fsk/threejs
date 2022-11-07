import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


let mainBlock = gsap.timeline().to( document.querySelectorAll('.main_block_title'),{
    duration: 2,
    x: function(index, target, targets) {
        let offset = target.offsetWidth / 2 - ((target.offsetWidth / 2) * .65);
        return target.classList.contains('main_block_title-blue') ? offset * -1 : offset;
    }
}, {}, 'main_block');

mainBlock.to(document.querySelectorAll('.light-blue'),{
    duration: 2,
    css:{scaleX: 2, scaleY: 2, bottom: window.innerHeight * .8},
},{}, 'main_block');

mainBlock.to(document.querySelectorAll('.light-yellow'),{
    duration: 2,
    css:{scaleX: 2, scaleY: 2, top: window.innerHeight * .8},
},{}, 'main_block');

mainBlock.to(document.querySelectorAll('.light-gray'),{
    duration: 2,
    css:{scaleX: 1.5, scaleY: 1.5},
},{}, 'main_block');

mainBlock.to(document.querySelectorAll('.main_block_text'),{
    duration: 2,
    css:{transform: 'translateY(0)', opacity: 1},
},{}, 'main_block').to(document.querySelectorAll('.main_block_text_line'),{
    duration: 2,
    css:{'stroke-dashoffset': 0},
},{}, 'main_block');

ScrollTrigger.create({
    trigger: '.main_block',
    pin:true,
    animation:mainBlock,
    pinnedContainer: '.main_block',
    scrub: true,
    // markers: true,
    invalidateOnRefresh: false,
})


/*

// FPS counter
const stats = Stats()
document.body.appendChild(stats.dom)

// Main renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;


// Scene configuration
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0  , 7, 0);
camera.rotateX(-1.57);
const orbit = new OrbitControls(camera, renderer.domElement);

renderer.setClearColor(0xfffffff);
// renderer.setClearColor(0x020303);



const geometry = new THREE.PlaneGeometry( 21, 10 );
const material = new THREE.MeshStandardMaterial( {color: 0xffaaff} );
const plane = new THREE.Mesh( geometry, material );

scene.add( plane );
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;


const bluePointLight = new THREE.PointLight( 0x0157D8, 1, 20, 2 );
bluePointLight.position.set( -9, 1, 5 );

const yellowPointLight = new THREE.PointLight( 0xDAC401, 1, 20, 2 );
yellowPointLight.position.set( 10, 1, -5 );

const grayPointLight = new THREE.PointLight( 0x0e1622, 2, 20, 2 );
grayPointLight.position.set( 0, 1, 0 );


scene.add( bluePointLight );
scene.add( yellowPointLight );
scene.add( grayPointLight );


// Helpers
const gridHelper = new THREE.GridHelper(21, 12);
// scene.add(gridHelper);
const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( bluePointLight, sphereSize );
// scene.add( pointLightHelper );

function animate() {
    renderer.render(scene, camera);
    stats.update()
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

let mainBlockDuration = 3;
let mainBlockAnimations = [];

mainBlockAnimations.push(gsap.to( bluePointLight.position, {duration: mainBlockDuration,y: 3,z: -5, ease: "circ.out"}).pause());
mainBlockAnimations.push(gsap.to( yellowPointLight.position, {duration: mainBlockDuration,y: 3,z: 5, ease: "circ.out" }).pause());
mainBlockAnimations.push(gsap.to( grayPointLight.position, {duration: mainBlockDuration,y: 5, ease: "circ.out"}).pause());

mainBlockAnimations.push(gsap.to( document.querySelector('.main_block_title-yellow'), {
    duration: mainBlockDuration,
    x: function(index, target, targets) {
        return (target.offsetWidth / 2 - ((target.offsetWidth / 2) * .65));
    }
}).pause());

mainBlockAnimations.push(gsap.to( document.querySelector('.main_block_title-blue'), {
    duration: mainBlockDuration,
    x: function(index, target, targets) {
        return -(target.offsetWidth / 2 - ((target.offsetWidth / 2) * .65));
    }
}).pause());


document.addEventListener('mousewheel', (event) => {
    if(event.deltaY > 0) {
        mainBlockAnimations.map(element => element.play());
        if (!gsap.isTweening("#id")) {
            // do stuff
        }
    } else {
        mainBlockAnimations.map(element => element.reverse());
    }
});*/
