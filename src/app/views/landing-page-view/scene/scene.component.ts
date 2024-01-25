import { Component, ElementRef, HostListener, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-scene',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scene.component.html',
  styleUrl: './scene.component.scss',
})
export class SceneComponent {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private mouse: THREE.Vector2 = new THREE.Vector2();

  constructor(private ngZone: NgZone, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.initScene();
    this.render();
    window.addEventListener('resize', () => this.onWindowResize(), false);
    window.addEventListener(
      'mousemove',
      (event) => this.onMouseMove(event),
      false
    );
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', () => this.onWindowResize(), false);
  }

  private initScene(): void {
    // Créer la scène
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf5efe6);

    // Créer la caméra
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 1.3;
    this.camera.position.x += 1;
    this.camera.position.y += 0.5;

    // Créer le renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Ajouter le renderer au DOM
    this.elementRef.nativeElement
      .querySelector('#renderer')
      .appendChild(this.renderer.domElement);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    this.scene.add(directionalLight);

    // Ajoutez une lumière ambiante
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    // Ajouter une lumière
    const light = new THREE.PointLight(0xffffff);
    light.position.set(10, 10, 10);
    this.scene.add(light);

    // Ajouter des objets à la scène (ex. cube)
    this.initModel();

    // Ajouter des contrôles d'orbite
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  }

  private render(): void {
    this.ngZone.run(() => {
      this.renderer.render(this.scene, this.camera);
    });
    requestAnimationFrame(() => this.render());
  }

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  particleSystem?: THREE.Points;
  particles = 2000;
  initModel() {
    var particleGeometry = new THREE.BufferGeometry();
    var particleMaterial = new THREE.PointsMaterial({
      color: 0x7c8594,
      size: 0.012,
    });

    // Remplir la géométrie de particules avec des positions aléatoires
    var particlePositions = new Float32Array(this.particles * 3);

    for (var i = 0; i < this.particles * 3; i++) {
      particlePositions[i] = (Math.random() - 0.5) * 20;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    var particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    this.scene.add(particleSystem);

    // Initialiser un chargeur GLTF
    var loader = new GLTFLoader();

    // Charger un objet GLTF
    loader.load(
      '/assets/models/_model_fpv/scene.gltf',
      (gltf) => {
        // L'objet GLTF a été chargé avec succès

        // Ajouter l'objet à la scène
        gltf.scene.position.x += 0.5;
        this.scene.add(gltf.scene);
      },
      (xhr) => {
        // Fonction de progression (optionnelle)
        console.log((xhr.loaded / xhr.total) * 100 + '% chargé');
      },
      (error) => {
        // Fonction d'erreur (en cas d'échec du chargement)
        console.error('Erreur de chargement', error);
      }
    );
  }

  onMouseMove(event: MouseEvent) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Logique à exécuter lors du défilement
    console.log('Scrolled', window.scrollY);
  }

  updateParticles() {
    if (this.particleSystem) {
      const particlePositions =
        this.particleSystem.geometry.getAttribute('position').array;

      for (let i = 0; i < this.particles; i++) {
        const index = i * 3;

        particlePositions[index] +=
          (this.mouse.x * 0.1 - particlePositions[index]) * 0.02;
        particlePositions[index + 1] +=
          (this.mouse.y * 0.1 - particlePositions[index + 1]) * 0.02;
      }

      this.particleSystem.geometry.getAttribute('position').needsUpdate = true;
    }
  }
}
