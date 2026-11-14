import React, { useState, useEffect } from 'react';
import { Camera, Image as ImageIcon, Sparkles, Edit3, X, Check, Upload } from 'lucide-react';
import { SCRAPBOOK_INITIAL } from '../data/wonderlandData';
import { ScrapbookPhoto } from '../types';
import { soundFX } from '../utils/audio';

interface ScrapbookProps {
  onSecretFound: (id: number) => void;
}

export const Scrapbook: React.FC<ScrapbookProps> = ({ onSecretFound }) => {
  const [photos, setPhotos] = useState<ScrapbookPhoto[]>(SCRAPBOOK_INITIAL);
  const [editingPhoto, setEditingPhoto] = useState<ScrapbookPhoto | null>(null);
  const [newUrl, setNewUrl] = useState('');
  const [newCaption, setNewCaption] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('wonderland_scrapbook');
      if (saved) {
        setPhotos(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleEditClick = (photo: ScrapbookPhoto) => {
    soundFX.playPop();
    setEditingPhoto(photo);
    setNewUrl(photo.url);
    setNewCaption(photo.caption);
  };

  const handleSaveEdit = () => {
    if (!editingPhoto) return;
    soundFX.playSparkle();

    const updated = photos.map(p =>
      p.id === editingPhoto.id ? { ...p, url: newUrl || p.url, caption: newCaption || p.caption } : p
    );

    setPhotos(updated);
    try {
      localStorage.setItem('wonderland_scrapbook', JSON.stringify(updated));
    } catch {
      // ignore
    }
    setEditingPhoto(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setNewUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="scrapbook" className="py-16 px-4 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-pink-100 dark:bg-pink-950/60 border border-pink-200 text-xs font-bold text-[#FF6B8B] mb-3">
          <Camera className="w-3.5 h-3.5" />
          <span>POLAROID MEMORY JOURNAL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#3b1d28] dark:text-pink-100 font-playfair tracking-tight mb-4">
          Our Little Scrapbook 📸
        </h2>
        <p className="text-gray-600 dark:text-pink-200 font-quicksand font-medium text-base sm:text-lg max-w-xl mx-auto">
          A personal memory board of our happiest smiles. You can click any Polaroid to personalize it with our real memories!
        </p>

        {/* Hidden Secret Easter Egg #10: A pastel ribbon bow */}
        <div className="mt-3">
          <button
            onClick={() => onSecretFound(10)}
            title="A pastel ribbon bow tucked in scrapbook notes..."
            className="text-base sm:text-lg hover:scale-125 transition-transform cursor-pointer opacity-70 hover:opacity-100"
          >
            🎀 <span className="text-xs font-dancing text-[#FF6B8B]">a tiny souvenir...</span>
          </button>
        </div>
      </div>

      {/* Polaroid Grid (10 Frames) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{ transform: `rotate(${photo.rotation}deg)` }}
            className="group relative bg-white dark:bg-[#FFF8ED] p-3 pb-6 rounded-md shadow-lg hover:shadow-2xl hover:scale-105 hover:rotate-0 transition-all duration-300 border border-gray-200 flex flex-col justify-between"
          >
            {/* Paper clip / Washi tape styling */}
            <div className="washi-tape" />

            {/* Photo Container */}
            <div className="relative w-full aspect-square bg-pink-50 rounded overflow-hidden mb-3">
              <img
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Edit button overlay */}
              <button
                onClick={() => handleEditClick(photo)}
                className="absolute bottom-2 right-2 p-1.5 rounded-full bg-white/90 text-gray-700 shadow hover:bg-pink-100 hover:text-[#FF6B8B] transition-colors"
                title="Replace with your own photograph"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Handwritten Label */}
            <div className="text-center px-1">
              <p className="font-bubble text-sm text-[#FF6B8B] mb-0.5">
                {photo.title}
              </p>
              <p className="font-handwriting text-xl text-gray-800 font-bold leading-tight">
                "{photo.caption}"
              </p>
              <span className="text-[10px] text-gray-600 font-poppins block mt-1">
                {photo.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Photo Modal */}
      {editingPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative max-w-md w-full bg-white dark:bg-[#2b1e38] rounded-3xl p-6 sm:p-7 shadow-2xl border-4 border-[#FF9EBC] transform animate-scale-up">
            
            <button
              onClick={() => setEditingPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-pink-100 text-gray-700 hover:bg-pink-200"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold font-playfair text-[#FF6B8B] mb-4 flex items-center gap-2">
              <Camera className="w-5 h-5" /> Customize Polaroid Memory
            </h3>

            {/* Preview image */}
            <div className="w-32 h-32 mx-auto rounded-xl overflow-hidden mb-4 border-2 border-pink-200">
              <img src={newUrl || editingPhoto.url} alt="preview" className="w-full h-full object-cover" />
            </div>

            {/* Upload File Input */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-gray-700 dark:text-pink-100 mb-1">
                Upload your picture:
              </label>
              <label className="flex items-center justify-center gap-2 w-full p-2.5 rounded-xl border-2 border-dashed border-[#FF9EBC] bg-pink-50/50 dark:bg-pink-950/30 text-xs font-bold text-[#FF6B8B] cursor-pointer hover:bg-pink-100/50 transition-colors">
                <Upload className="w-4 h-4" /> Choose from Phone / Computer
                <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>

            {/* URL Input */}
            <div className="mb-4">
              <label className="block text-xs font-bold text-gray-700 dark:text-pink-100 mb-1">
                Or paste Image URL:
              </label>
              <input
                type="text"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                placeholder="https://example.com/our-photo.jpg"
                className="w-full px-3 py-2 text-xs rounded-xl border border-pink-200 bg-white dark:bg-[#1c1427] text-gray-800 dark:text-pink-100 focus:outline-none focus:ring-2 focus:ring-[#FF6B8B]"
              />
            </div>

            {/* Caption Input */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-700 dark:text-pink-100 mb-1">
                Polaroid Handwritten Caption:
              </label>
              <input
                type="text"
                value={newCaption}
                onChange={(e) => setNewCaption(e.target.value)}
                placeholder="Our favourite memory..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-pink-200 bg-white dark:bg-[#1c1427] text-gray-800 dark:text-pink-100 focus:outline-none focus:ring-2 focus:ring-[#FF6B8B]"
              />
            </div>

            {/* Save Button */}
            <button
              onClick={handleSaveEdit}
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#FF9EBC] text-white font-poppins font-bold text-sm shadow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Check className="w-4 h-4" /> Save Memory
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

