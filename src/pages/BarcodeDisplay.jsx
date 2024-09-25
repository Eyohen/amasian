import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../url';

const BarcodeDisplay = () => {
  const [barcodeUrl, setBarcodeUrl] = useState('');

  useEffect(() => {
    const fetchBarcode = async () => {
      try {
        const response = await axios.get(`${URL}/api/barcode/generate`, { responseType: 'arraybuffer' });
        const base64 = btoa(
          new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        setBarcodeUrl(`data:image/png;base64,${base64}`);
      } catch (error) {
        console.error('Error fetching barcode:', error);
      }
    };

    fetchBarcode();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-['Libre_Baskerville',serif]">
      <h1 className="text-2xl font-bold mb-4">Scan this barcode</h1>
      {barcodeUrl && <img src={barcodeUrl} alt="Barcode" className="w-64 h-64" />}
    </div>
  );
};

export default BarcodeDisplay;