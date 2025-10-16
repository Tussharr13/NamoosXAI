import { useState } from 'react';
import Orb from './components/Orb';

export default function App() {
  const [hue, setHue] = useState(0);
  
  return (
    <div className="w-full h-screen bg-black flex flex-col">
      <div className="flex-1 relative">
        <Orb hue={hue} hoverIntensity={0.2} rotateOnHover={true} />
      </div>
      <div className="p-6 bg-gray-900">
        <label className="text-white block mb-2">Hue Shift: {hue}°</label>
        <input
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={(e) => setHue(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-gray-400 text-sm mt-2">Hover over the orb to see interactive effects!</p>
      </div>
    </div>
  );
}
