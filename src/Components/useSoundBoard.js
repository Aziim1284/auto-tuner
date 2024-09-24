import { useState, useEffect } from 'react';
import * as Tone from 'tone';

let currentSound = null; // Track the currently playing sound

const useSoundBoard = (instrument = 'synth', note = 'C4') => {
  const [sound, setSound] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let synth;

    switch (instrument) {
      case 'synth':
        synth = new Tone.Synth().toDestination();
        break;
      case 'amSynth':
        synth = new Tone.AMSynth().toDestination();
        break;
      case 'fmSynth':
        synth = new Tone.FMSynth().toDestination();
        break;
      case 'membraneSynth':
        synth = new Tone.MembraneSynth().toDestination();
        break;
      default:
        synth = new Tone.Synth().toDestination();
    }

    setSound(synth);
    setIsLoaded(true);

    return () => {
      synth.dispose();
    };
  }, [instrument]);

  const playSound = () => {
    if (isLoaded && sound) {
      if (currentSound && currentSound.state === 'started') {
        currentSound.triggerRelease(); // Stop the previous sound if playing
      }
      sound.triggerAttackRelease(note, '8n');
      currentSound = sound; // Set the current sound
    } else {
      console.log('Sound not yet loaded');
    }
  };

  const pauseSound = () => {
    if (currentSound) {
      currentSound.triggerRelease(); // Stop the currently playing sound
    }
  };

  return { playSound, pauseSound };
};

export default useSoundBoard;
