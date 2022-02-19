import React from 'react'
import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry'
import emoji from '@/assets/img/emoji.jpg'

export default class Canvas extends React.Component {

    componentDidMount() {
        let mouseX, mouseY = 0
        var scene = new THREE.Scene()
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.95 / window.innerHeight, 0.1, 1000)
        camera.position.z = 5
        var renderer = new THREE.WebGL1Renderer()

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()

            renderer.setSize(window.innerWidth, window.innerHeight)
        })

        scene.background = new THREE.Color(0x070707) //
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.getElementById('canvas').appendChild(renderer.domElement)

        const textureLoader = new THREE.TextureLoader()

        var box = new RoundedBoxGeometry(4, 4, 3, 10, 1)
        var material = [
            new THREE.MeshStandardMaterial({ color: 0xf49cc8 }),
            new THREE.MeshStandardMaterial({ color: 0xf49cc8 }),
            new THREE.MeshStandardMaterial({ color: 0xf49cc8 }),
            new THREE.MeshStandardMaterial({ color: 0xf49cc8 }),
            new THREE.MeshStandardMaterial({ map: textureLoader.load(emoji) }),
            new THREE.MeshStandardMaterial({ color: 0xf49cc8 })
        ]
        var cube = new THREE.Mesh(box, material)
        cube.position.set(1, 0, 0)
        scene.add(cube)
        var pointLight = new THREE.PointLight(0xf49cc8, 1)

        pointLight.position.set(0, 20, 20)

        const pointLightHelper = new THREE.PointLightHelper(pointLight, 4)
        scene.add(pointLight, pointLightHelper)

        document.addEventListener('mousemove', pan)

        function pan(event) {
            mouseX = event.clientX - (window.innerWidth / 2)
            mouseY = event.clientY - (window.innerHeight / 2)
        }

        const raycaster = new THREE.Raycaster()
        const pointer = new THREE.Vector2()

        let animationTime = 1;
        window.addEventListener('mousemove', getPointer)
        window.addEventListener('click', () => {
            animationTime = 0
            giggle()
        })

        function getPointer(event) {
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
        }

        function updateTime() {
            const timeDelta = 1 / 60; // 60 fps or bust!

            if (animationTime < 1.0) {
                const animationSpeed = 0.6;
                animationTime += timeDelta * animationSpeed;
            }
        }

        function giggle(event) {
            requestAnimationFrame(giggle);
            updateTime()
            const selected = raycaster.intersectObjects(scene.children);
            selected.forEach((obj) => {
                const maxGiggles = 2;
                const guffawArc = 0.1;
                const nGiggles = (1 - animationTime) * maxGiggles;
                const nShakes = (1 - animationTime) * guffawArc;

                const rotation = Math.sin(animationTime * nGiggles) * Math.PI * nShakes;
                obj.object.rotation.x = rotation
            })
            renderer.render(scene, camera);
        }

        var animate = function () {
            raycaster.setFromCamera(pointer, camera)
            requestAnimationFrame(animate)
            cube.rotation.x = 0.0005 * mouseY
            cube.rotation.y = 0.0005 * mouseX
            renderer.render(scene, camera)
        }

        animate()

    }


    render() {
        return (
            <div ref={ref => this.mount = ref} className='Canvas' id='canvas' />
        )
    }
}