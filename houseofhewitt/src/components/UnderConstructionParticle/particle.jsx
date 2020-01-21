import '../../App.css';
import '../../animate.css';
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import ParticlesBg from 'particles-bg'
import constructionIcon from './construction-icon.png';

function Particle() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div style={{ height: '100%' }}>
      <CSSTransition
        in={showText}
        timeout={1500}
        classNames={{ enterDone: 'fadeIn' }}>

        <div className="animated"
          style={{
            position: 'absolute',
            top: '45%',
            left: '42%',
            opacity: '0'
          }}>

          <div style={{ textAlign: 'center', marginBottom: '0' }}>
            <img src={constructionIcon} style={{ height: '78px', width: '75px', filter: 'invert(1)' }} alt="under-construction" />
          </div>

          <h3 style={{ color: 'white', marginTop: '0' }}>Under Construction</h3>
        </div>

      </CSSTransition>

      <ParticlesBg type="lines" num={300} bg={true} />
    </div >
  );
}

export default Particle;