import React from 'react'
import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry'
import anime from 'animejs/lib/anime.es.js';

export default class Canvas extends React.Component {

    componentDidMount() {
        let mouseX, mouseY = 0
        var scene = new THREE.Scene()
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 5
        var renderer = new THREE.WebGL1Renderer()

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()

            renderer.setSize(window.innerWidth, window.innerHeight)
        })

        scene.background = new THREE.Color(0x141414) //
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.getElementById('canvas').appendChild(renderer.domElement)

        var box = new RoundedBoxGeometry(4, 4, 4, 10, 1);
        var material = new THREE.MeshLambertMaterial({ color: 0xfb8cbb});
        var cube = new THREE.Mesh(box, material);
        scene.add(cube)

        var pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(10, 10, 10)
        scene.add(pointLight)

        var animate = function () {
            requestAnimationFrame(animate)
            cube.rotation.x = 0.0005 * mouseY
            cube.rotation.y = 0.0005 * mouseX
            renderer.render(scene, camera)
        }

        animate()

        document.addEventListener('mousemove', jitter)

        function jitter(event) {
            mouseX = event.clientX - (window.innerWidth / 2)
            mouseY = event.clientY - (window.innerHeight / 2)
        }

    }


    render() {
        return (
            <div ref={ref => this.mount = ref} className='Canvas' id='canvas' />
        )
    }
}