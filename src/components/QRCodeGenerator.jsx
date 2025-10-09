import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

const QRCodeGenerator = () => {
  const [qrCodeDataURL, setQrCodeDataURL] = useState('');

  useEffect(() => {
    // Default URL for the contact card
    const defaultUrl = `${window.location.origin}/contact-card`;
    generateQRCode(defaultUrl);
  }, []);

  const generateQRCode = async (text) => {
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Set canvas size
      const size = 512;
      canvas.width = size;
      canvas.height = size;
      
      // Fill background with project's purple color
      ctx.fillStyle = '#55384C'; // Project's purple color
      ctx.fillRect(0, 0, size, size);
      
      // Generate QR code
      const qrDataURL = await QRCode.toDataURL(text, {
        width: size,
        margin: 2,
        color: {
          dark: '#1F2937', // Dark gray for QR code modules
          light: '#FFFFFF'  // White for light areas
        },
        errorCorrectionLevel: 'H' // High error correction for logo space
      });
      
      // Create image from QR code data URL
      const qrImage = new Image();
      qrImage.onload = () => {
        // Draw QR code on canvas
        ctx.drawImage(qrImage, 0, 0, size, size);
        
        // Load and draw the actual logo in center
        const logoImage = new Image();
        logoImage.onload = () => {
          const logoSize = 80;
          const logoX = (size - logoSize) / 2;
          const logoY = (size - logoSize) / 2;
          
        
          ctx.fillRect(logoX, logoY, logoSize, logoSize);
          
          // Draw the actual logo
          ctx.drawImage(logoImage, logoX + 10, logoY + 10, logoSize - 20, logoSize - 20);
          
          // Set the final data URL
          setQrCodeDataURL(canvas.toDataURL());
        };
        
        logoImage.src = '/logo.jpg';
      };
      
      qrImage.src = qrDataURL;
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };


  const downloadQRCode = () => {
    if (qrCodeDataURL) {
      const link = document.createElement('a');
      link.download = 'kulinare-qr-code.png';
      link.href = qrCodeDataURL;
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        {/* QR Code Display */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-lg shadow-md">
            {qrCodeDataURL ? (
              <img 
                src={qrCodeDataURL} 
                alt="QR Code" 
                className="w-80 h-80"
              />
            ) : (
              <div className="w-80 h-80 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Generating QR Code...</span>
              </div>
            )}
          </div>
          
          {qrCodeDataURL && (
            <button
              onClick={downloadQRCode}
              className="mt-6 bg-[#55384C] text-white px-8 py-3 rounded-lg hover:bg-[#4A2F42] transition-colors font-semibold"
            >
              Download QR Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
