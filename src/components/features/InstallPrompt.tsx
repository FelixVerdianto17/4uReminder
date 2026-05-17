import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export function InstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Basic check for mobile user agents
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // Check if already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone;
    
    // Only show if mobile and not standalone
    if (isMobile && !isStandalone) {
      // Don't show if user previously dismissed
      const hasDismissed = localStorage.getItem('pwa-prompt-dismissed');
      if (!hasDismissed) {
        setShowPrompt(true);
      }
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('pwa-prompt-dismissed', 'true');
    setShowPrompt(false);
  };

  const handleInstallClick = () => {
    // In a real PWA, you'd handle the beforeinstallprompt event.
    // For iOS, you have to instruct the user to use the share menu.
    alert('To install on iOS: tap Share -> "Add to Home Screen". On Android: use the browser menu -> "Install App".');
    handleDismiss();
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 pb-[calc(16px+env(safe-area-inset-bottom))]">
      <Card className="bg-[#1d1d1f] text-white shadow-2xl border-none max-w-sm mx-auto">
        <CardContent className="p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#2a2a2c] rounded-lg shrink-0">
              <Download className="w-5 h-5 text-[#2997ff]" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-[14px]">Install App</span>
              <span className="text-[#a1a1a6] text-[12px]">Add to Home Screen</span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="ghost" size="sm" onClick={handleInstallClick} className="bg-[#0066cc] text-white hover:bg-[#0071e3] hover:text-white rounded-full px-4 text-[14px] h-[32px]">
              Install
            </Button>
            <Button variant="ghost" size="icon" onClick={handleDismiss} className="text-[#a1a1a6] hover:text-white size-[32px] rounded-full">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
