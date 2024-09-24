// import React from 'react';
// import useSoundBoard from '../Components/useSoundBoard';

// const SoundButton = ({ soundUrl, label, id, isPlaying, setCurrentlyPlaying }) => {
//     const { playSound, pauseSound } = useSoundBoard(soundUrl);

//   const handlePlaySound = () => {
//     setCurrentlyPlaying(label);
//     playSound();
//   };

//   return (
//     <div >
//     <button
//       id={id}
//       onClick={handlePlaySound}
//       className={`sound-button ${isPlaying ? 'playing' : ''}`}
//     >
//       {label}
//     </button>
//   </div>
    
//   );
// };

// export default SoundButton;
import React from 'react';
import useSoundBoard from '../Components/useSoundBoard';

const SoundButton = ({ instrument, note, label, id, isPlaying, setCurrentlyPlaying }) => {
  const { playSound, pauseSound } = useSoundBoard(instrument, note);

  const handlePlaySound = () => {
    setCurrentlyPlaying(label);
    playSound();
  };

  return (
    <div>
      <button
        id={id}
        onClick={handlePlaySound}
        className={`sound-button ${isPlaying ? 'playing' : ''}`}
      >
        {label}
      </button>
    </div>
  );
};

export default SoundButton;
