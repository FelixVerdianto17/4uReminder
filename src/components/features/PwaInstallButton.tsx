import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '../ui/button';

export function PwaInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Also check if we are already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone;
    if (isStandalone) {
      setIsInstallable(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // Fallback for iOS or browsers that don't support beforeinstallprompt
      alert('To install on iOS: tap Share -> "Add to Home Screen". On Android: use the browser menu -> "Install App".');
      return;
    }

    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);
    
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  // If not installable and not wanting to show a fallback, we could return null.
  // But let's show the button always, and use the fallback alert if deferredPrompt is null.
  // Actually, standard practice is to hide the button if not installable, but for iOS we might want to show it.
  
  // Let's only show if not already in standalone mode
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone;
  if (isStandalone) return null;

  return (
    <Button 
      variant="outline" 
      onClick={handleInstallClick} 
      className="bg-white/50 backdrop-blur-md border-[#e0e0e0] text-[#1d1d1f] hover:bg-[#f5f5f7] rounded-full px-4 h-[44px]"
    >
      <Download className="w-4 h-4 mr-2 text-[#0066cc]" />
      Add to Home Screen
    </Button>
  );
}
