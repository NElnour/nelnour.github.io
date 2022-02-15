import React from 'react'
import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry'

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

        scene.background = new THREE.Color(0x0a0a0a) //
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.getElementById('header').appendChild(renderer.domElement)

        var box = new RoundedBoxGeometry(2, 2, 2, 7, 0.2);
        var material = new THREE.MeshLambertMaterial({ color: 0xff61ad });
        var cube = new THREE.Mesh(box, material);
        scene.add(cube)

        var pointLight = new THREE.PointLight(0xff61ad, 1);
        pointLight.position.set(10, 10, 10)
        scene.add(pointLight)

        var animate = function () {
            requestAnimationFrame(animate)
            cube.rotation.x = 0.0005 * mouseX
            cube.rotation.y = 0.0005 * mouseY
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
            <div ref={ref => this.mount = ref} className='Header' id='header' />
        )
    }
}