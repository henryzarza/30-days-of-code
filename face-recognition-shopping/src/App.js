import React, { useCallback, useRef, useEffect, useState } from 'react';

import imgExample from './assets/example.jpeg';
import Header from './components/Header';
import Masks from './components/Masks';
import Loader from './components/Loader';
import { maskify, loadModels } from './maskify';

function App() {
  const [isModelReady, setIsModelReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const imgContainerRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    loadModels()
      .then(() => setIsModelReady(true))
      .catch(() => setIsModelReady(false));
  }, []);

  const deleteOverlay = useCallback(() => {
    const overlay = document.querySelector('#overlay');
    if (overlay) {
      overlay.parentNode.removeChild(overlay);
    }
  }, []);

  const handleSelected = useCallback(
    (mask) => {
      setIsLoading(true);
      if (isModelReady) {
        deleteOverlay();
        maskify(mask, imgRef.current, imgContainerRef.current)
          .then(() => {
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error);
            setIsLoading(false);
          });
      } else {
        setError('Problem loading the models.');
        setIsLoading(false);
      }
    },
    [isModelReady, deleteOverlay]
  );

  const handleFile = useCallback(
    (e) => {
      const { files } = e.target;
      const img = imgRef.current;
      if (FileReader && files && files.length) {
        deleteOverlay();
        let fr = new FileReader();
        fr.onload = function () {
          img.src = fr.result;
          img.alt = files[0].name;
        };
        fr.readAsDataURL(files[0]);
      }
    },
    [deleteOverlay]
  );

  return (
    <>
      <Header />
      <main className='container'>
        <div className='inner-content'>
          <div ref={imgContainerRef} className='photo-container'>
            <img className='user-photo' src={imgExample} alt='User face' ref={imgRef} />
            {isLoading && <Loader />}
          </div>
          <input
            type='file'
            className='input-file'
            id='input-photo'
            accept='image/*'
            onChange={handleFile}
          />
          <label htmlFor='input-photo' className='button'>
            Upload photo
          </label>
          {error && <small className='error-msg'>{error}</small>}
        </div>
        <Masks onSelected={handleSelected} />
      </main>
    </>
  );
}

export default App;
