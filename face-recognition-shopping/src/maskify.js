import * as faceapi from 'face-api.js';

const getOverlayValues = (landmarks) => {
  const nose = landmarks.getNose();
  const jawline = landmarks.getJawOutline();
  const jawLeft = jawline[0];
  const jawRight = jawline.splice(-1)[0];
  const adjacent = jawRight.x - jawLeft.x;
  const opposite = jawRight.y - jawLeft.y;
  const jawLength = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2));
  const angle = Math.atan2(opposite, adjacent) * (180 / Math.PI);
  const width = jawLength * 2.2;

  return {
    width,
    angle,
    leftOffset: jawLeft.x - width * 0.27,
    topOffset: nose[0].y - width * 0.47
  };
};

export function loadModels() {
  return Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68TinyNet.loadFromUri('/models')
  ]);
}

export async function maskify(mask, imgRef, containerRef) {
  const scale = imgRef.width / imgRef.naturalWidth;

  return new Promise((resolve, reject) => {
    const handleImage = (newImage) => async () => {
      const detection = await faceapi
        .detectSingleFace(newImage, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks(true);

      if (!detection) {
        reject('Face not detected.');
        return;
      }

      const overlayValues = getOverlayValues(detection.landmarks);
      const overlay = document.createElement('img');
      overlay.src = mask.photo;
      overlay.alt = mask.name;
      overlay.id = 'overlay';
      overlay.style.cssText = `
        position: absolute;
        left: ${overlayValues.leftOffset * scale}px;
        top: ${overlayValues.topOffset * scale}px;
        width: ${overlayValues.width * scale}px;
        transform: rotate(${overlayValues.angle}deg);
      `;

      containerRef.appendChild(overlay);
      resolve();
    };

    // To avoid CORS issues we create a cross-origin-friendly copy of the image.
    const image = new Image();
    image.crossOrigin = 'Anonymous';
    image.addEventListener('load', handleImage(image));
    image.src = imgRef.src;
  });
}
