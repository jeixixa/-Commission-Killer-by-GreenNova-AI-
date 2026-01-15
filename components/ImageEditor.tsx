
import React, { useState, useRef, useEffect } from 'react';
import { editImageWithGemini } from '../services/geminiService';
import { Camera, Upload, Trash2, Sparkles, X, Check, AlertTriangle } from 'lucide-react';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/webp', 'image/jpg'];

const ImageEditor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const startCamera = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (err) {
      setError("Camera access denied. Please check your browser permissions.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      setIsCameraActive(false);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        setImage(canvasRef.current.toDataURL('image/png'));
        stopCamera();
        setError(null);
      }
    }
  };

  const validateAndSetImage = (file: File) => {
    setError(null);
    
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("Unsupported format. Please upload a PNG, JPG, or WebP image.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("File too large. Maximum size allowed is 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => setError("Failed to read the file. Please try again.");
    reader.onload = (event) => {
      setImage(event.target?.result as string);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      validateAndSetImage(file);
    }
  };

  const handleEdit = async () => {
    if (!image || !prompt) return;
    setIsProcessing(true);
    setError(null);
    try {
      const editedImageUrl = await editImageWithGemini(image, prompt);
      if (editedImageUrl) {
        setImage(editedImageUrl);
        setError(null);
      } else {
        setError("AI couldn't process this request. Try a simpler, more descriptive prompt.");
      }
    } catch (err: any) {
      console.error("Image processing error:", err);
      if (err.message?.includes('429')) {
        setError("AI is currently busy. Please wait a minute and try again.");
      } else if (err.message?.includes('API_KEY')) {
        setError("AI configuration error. Please contact support.");
      } else {
        setError("A network error occurred during AI processing. Please check your connection.");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div id="ai-tool" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 p-3 rounded-2xl mb-4 transition-colors duration-300">
            <Sparkles size={32} />
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4 transition-colors duration-300">Polish Your Menu Photos with AI</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Great food deserves great photos. Upload or snap a dish and let GreenNova's AI enhance it instantly for your digital menu.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-slate-900 rounded-[40px] border border-gray-100 dark:border-slate-800 shadow-2xl dark:shadow-none overflow-hidden min-h-[500px] flex flex-col md:flex-row transition-colors duration-300">
          {/* Preview Area */}
          <div className="flex-1 bg-gray-900 dark:bg-black flex items-center justify-center p-6 relative min-h-[400px]">
            {isCameraActive ? (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <video ref={videoRef} autoPlay playsInline className="max-h-full rounded-2xl border-4 border-green-500/30" />
                <div className="absolute bottom-10 flex gap-4">
                  <button onClick={capturePhoto} className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                    <div className="w-12 h-12 border-4 border-gray-900 rounded-full"></div>
                  </button>
                  <button onClick={stopCamera} className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                    <X />
                  </button>
                </div>
              </div>
            ) : !image ? (
              <div className="text-center space-y-6">
                <div className="flex justify-center gap-4">
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="flex flex-col items-center gap-3 bg-gray-800 dark:bg-slate-800 p-8 rounded-3xl border border-gray-700 dark:border-slate-700 hover:bg-gray-700 dark:hover:bg-slate-700 transition-all text-gray-300 hover:text-white"
                  >
                    <Upload size={32} />
                    <span className="font-bold">Upload Photo</span>
                  </button>
                  <button 
                    onClick={startCamera}
                    className="flex flex-col items-center gap-3 bg-gray-800 dark:bg-slate-800 p-8 rounded-3xl border border-gray-700 dark:border-slate-700 hover:bg-gray-700 dark:hover:bg-slate-700 transition-all text-gray-300 hover:text-white"
                  >
                    <Camera size={32} />
                    <span className="font-bold">Use Camera</span>
                  </button>
                </div>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/png, image/jpeg, image/webp" />
                <p className="text-gray-500 text-sm">Accepted: PNG, JPG, WebP (Max 5MB)</p>
              </div>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                <img src={image} alt="Preview" className="max-h-full max-w-full object-contain rounded-xl shadow-2xl" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button 
                    onClick={() => { setImage(null); setError(null); }}
                    className="bg-red-500/80 hover:bg-red-500 text-white p-3 rounded-full backdrop-blur transition-all"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            )}
            <canvas ref={canvasRef} className="hidden" />
          </div>

          {/* Controls Area */}
          <div className="w-full md:w-[400px] p-8 md:p-12 bg-white dark:bg-slate-900 flex flex-col justify-center transition-colors duration-300">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-2 dark:text-white">
              AI Enhancement
              <span className="text-[10px] bg-green-100 dark:bg-emerald-900/40 text-green-700 dark:text-emerald-400 px-2 py-0.5 rounded uppercase tracking-widest">Beta</span>
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest mb-3">Refinement Prompt</label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder='Try: "Make the pizza look more golden and vibrant" or "Remove the messy background"'
                  className="w-full h-32 px-4 py-4 rounded-2xl bg-gray-50 dark:bg-slate-800 dark:text-white border border-gray-100 dark:border-slate-700 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all resize-none font-medium placeholder:text-gray-400 dark:placeholder:text-slate-600"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Brighter', 'Retro', 'HDR', 'Clean BG'].map(tag => (
                  <button 
                    key={tag}
                    onClick={() => setPrompt(`Apply ${tag} effect to this food photo`)}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-400 rounded-lg text-xs font-bold hover:bg-green-50 dark:hover:bg-emerald-950/40 hover:text-green-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    +{tag}
                  </button>
                ))}
              </div>

              <button 
                onClick={handleEdit}
                disabled={isProcessing || !image || !prompt}
                className="w-full py-5 bg-gray-900 dark:bg-emerald-600 text-white rounded-2xl font-black text-lg hover:bg-green-600 dark:hover:bg-emerald-500 transition-all flex items-center justify-center gap-3 disabled:bg-gray-300 dark:disabled:bg-slate-800 shadow-xl"
              >
                {isProcessing ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Brewing Magic...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} className="text-green-400 dark:text-emerald-300" />
                    Apply AI Enhancement
                  </>
                )}
              </button>

              {error && (
                <div className="p-4 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium flex items-start gap-3 animate-shake transition-colors duration-300 border border-red-100 dark:border-red-900/50">
                  <AlertTriangle size={20} className="shrink-0 mt-0.5" />
                  <p>{error}</p>
                </div>
              )}

              {image && !isProcessing && !error && (
                <div className="p-4 bg-green-50 dark:bg-emerald-950/30 text-green-700 dark:text-emerald-400 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors duration-300">
                  <Check size={16} />
                  Ready for your menu!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
