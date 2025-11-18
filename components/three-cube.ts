import {
  BoxGeometry,
  Group,
  Mesh,
  MeshNormalMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

// Constants to replace magic numbers
const CAMERA_FOV = 75;
const CAMERA_Z = 5;
const CUBE_SIZE = 0.3;
const CUBE_GAP = 0.1;
const MAIN_CUBE_SIZE = 3;
const GROUP_ROTATION_SPEED_X = 0.002;
const GROUP_ROTATION_SPEED_Y = 0.003;
const CUBE_ROTATION_SPEED = 0.01;
const CAMERA_NEAR = 0.1;
const CAMERA_FAR = 1000;

/**
 * A reusable class to create and manage a Three.js cube animation scene.
 * It encapsulates scene setup, rendering, animation loop, and resizing.
 */
export class ThreeCube {
  private container!: HTMLElement;
  private scene!: Scene;
  private camera!: PerspectiveCamera;
  private renderer!: WebGLRenderer;
  private group!: Group;
  private resizeObserver!: ResizeObserver;

  constructor(containerSelector: string) {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) {
      console.error(
        `Container element not found for selector: ${containerSelector}`
      );
      return;
    }
    this.container = container;
    this.init();
  }

  private init() {
    if (!this.container) {
      return;
    }

    // Scene, Camera, Renderer
    this.scene = new Scene();
    // Use a default aspect of 1 to prevent division by zero, handleResize will correct it.
    this.camera = new PerspectiveCamera(CAMERA_FOV, 1, CAMERA_NEAR, CAMERA_FAR);
    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.container.appendChild(this.renderer.domElement);
    this.camera.position.z = CAMERA_Z;

    // Create the cube group
    this.group = this.createCubeGroup();
    this.scene.add(this.group);

    // Bind methods and start animation
    this.animate = this.animate.bind(this);
    this.handleResize = this.handleResize.bind(this);

    // Set up robust resizing
    this.resizeObserver = new ResizeObserver(this.handleResize);
    this.resizeObserver.observe(this.container);
    this.handleResize(); // Set initial size

    this.animate();
  }

  private createCubeGroup() {
    const group = new Group();
    const geometry = new BoxGeometry(CUBE_SIZE, CUBE_SIZE, CUBE_SIZE);
    const material = new MeshNormalMaterial();

    const gap = CUBE_GAP;
    const step = CUBE_SIZE + gap;
    const half = (MAIN_CUBE_SIZE - 1) / 2;

    for (let x = 0; x < MAIN_CUBE_SIZE; x++) {
      for (let y = 0; y < MAIN_CUBE_SIZE; y++) {
        for (let z = 0; z < MAIN_CUBE_SIZE; z++) {
          const smallCube = new Mesh(geometry, material);
          smallCube.position.set(
            (x - half) * step,
            (y - half) * step,
            (z - half) * step
          );
          group.add(smallCube);
        }
      }
    }
    return group;
  }

  private animate() {
    if (!this.renderer) {
      return;
    }
    requestAnimationFrame(this.animate);

    if (this.group) {
      // Group rotation
      this.group.rotation.x += GROUP_ROTATION_SPEED_X;
      this.group.rotation.y += GROUP_ROTATION_SPEED_Y;

      // Individual cube rotation
      for (const cube of this.group.children as Mesh[]) {
        cube.rotation.x += CUBE_ROTATION_SPEED;
        cube.rotation.y += CUBE_ROTATION_SPEED;
      }
    }
    this.renderer.render(this.scene, this.camera);
  }

  private handleResize() {
    if (!(this.container && this.renderer)) {
      return;
    }
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    if (width > 0 && height > 0) {
      this.renderer.setSize(width, height);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  }
}
