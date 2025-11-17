// To satisfy TypeScript for the global THREE object from the CDN script
declare const THREE: any;

/**
 * A reusable class to create and manage a Three.js cube animation scene.
 * It encapsulates scene setup, rendering, animation loop, and resizing.
 */
export class ThreeCube {
  private container: HTMLElement;
  private scene: any;
  private camera: any;
  private renderer: any;
  private group: any;
  private resizeObserver: ResizeObserver;

  constructor(containerSelector: string) {
    this.container = document.querySelector<HTMLElement>(containerSelector);
    if (!this.container) {
      console.error(`Container element not found for selector: ${containerSelector}`);
      return;
    }
    this.init();
  }

  private init() {
    if (!this.container || typeof THREE === 'undefined') {
      return;
    }

    // Scene, Camera, Renderer
    this.scene = new THREE.Scene();
    // Use a default aspect of 1 to prevent division by zero, handleResize will correct it.
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.container.appendChild(this.renderer.domElement);
    this.camera.position.z = 5;

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
    const group = new THREE.Group();
    const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const material = new THREE.MeshNormalMaterial();

    const mainCubeSize = 3;
    const gap = 0.1;
    const step = 0.3 + gap;
    const half = (mainCubeSize - 1) / 2;

    for (let x = 0; x < mainCubeSize; x++) {
      for (let y = 0; y < mainCubeSize; y++) {
        for (let z = 0; z < mainCubeSize; z++) {
            const smallCube = new THREE.Mesh(geometry, material);
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
    if (!this.renderer) return;
    requestAnimationFrame(this.animate);

    if(this.group) {
        // Group rotation
        this.group.rotation.x += 0.002;
        this.group.rotation.y += 0.003;

        // Individual cube rotation
        this.group.children.forEach((cube: any) => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        });
    }
    this.renderer.render(this.scene, this.camera);
  }

  private handleResize() {
    if (!this.container || !this.renderer) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    if (width > 0 && height > 0) {
      this.renderer.setSize(width, height);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
  }
}
