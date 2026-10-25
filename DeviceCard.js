// src/components/DeviceCard.js
'use client'; // Wajib karena menggunakan efek hover dan klik

import { motion } from 'framer-motion';
import { Cpu, Smartphone } from 'lucide-react';

export default function DeviceCard({ device, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(device)}
      className="cursor-pointer bg-white dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="w-full h-48 bg-gray-100 dark:bg-gray-900 rounded-xl mb-4 overflow-hidden flex items-center justify-center relative">
        {device.image_url ? (
          <img src={device.image_url} alt={device.model} className="object-contain h-full w-full p-2" />
        ) : (
          <Smartphone size={48} className="text-gray-400" />
        )}
      </div>
      
      <div className="flex flex-col flex-grow">
        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
          {device.brand}
        </span>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
          {device.model}
        </h3>
        
        <div className="space-y-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Cpu size={16} className="mr-2 opacity-70 flex-shrink-0" />
            <span className="truncate">{device.chipset || 'Unknown Chipset'}</span>
          </div>
          <div className="flex items-center text-sm font-semibold text-gray-900 dark:text-white">
            <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs mr-2">RAM</span>
            {device.ram_rom}
          </div>
        </div>
        
        <div className="mt-4 pt-2 flex items-center justify-between">
          <span className="text-lg font-black text-gray-900 dark:text-white">
            {device.price}
          </span>
          <span className="text-xs text-blue-500 font-medium bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
            Detail &rarr;
          </span>
        </div>
      </div>
    </motion.div>
  );
}
