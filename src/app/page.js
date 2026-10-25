// src/app/page.js
'use client';

import { useState, useEffect, useMemo } from 'react';
import { fetchDevices } from '@/utils/fetchData';
import DeviceCard from '@/components/DeviceCard';
import DeviceModal from '@/components/DeviceModal';
import { Search, Loader2, Smartphone } from 'lucide-react';

export default function Dashboard() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedDevice, setSelectedDevice] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchDevices();
      setDevices(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const brands = useMemo(() => {
    const uniqueBrands = new Set(devices.map(d => d.brand).filter(Boolean));
    return ['All', ...Array.from(uniqueBrands)];
  }, [devices]);

  const filteredDevices = useMemo(() => {
    return devices.filter(device => {
      const matchBrand = selectedBrand === 'All' || device.brand === selectedBrand;
      const matchSearch = device.model?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          device.brand?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchBrand && matchSearch;
    });
  }, [devices, searchQuery, selectedBrand]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Smartphone className="text-blue-600 dark:text-blue-500" size={28} />
            <h1 className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AndroidSpecs.
            </h1>
          </div>
          
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Cari model HP..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-gray-900 border border-transparent focus:border-blue-500 rounded-full focus:ring-2 focus:ring-blue-500/20 outline-none text-sm transition-all"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Brands */}
        <div className="flex overflow-x-auto pb-4 mb-6 gap-2 no-scrollbar">
          {brands.map(brand => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedBrand === brand 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Loading / Data Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2 className="animate-spin text-blue-500 mb-4" size={48} />
            <p className="text-gray-500 font-medium">Mengambil data dari Google Sheets...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {filteredDevices.length > 0 ? (
              filteredDevices.map((device, idx) => (
                <DeviceCard 
                  key={device.id || idx} 
                  device={device} 
                  onClick={(dev) => setSelectedDevice(dev)} 
                />
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
                <Smartphone size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                <p className="text-gray-500 font-medium text-lg">Pencarian "{searchQuery}" tidak ditemukan.</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Komponen Pop-up Modal */}
      <DeviceModal 
        device={selectedDevice} 
        isOpen={!!selectedDevice} 
        onClose={() => setSelectedDevice(null)} 
      />
    </div>
  );
}
