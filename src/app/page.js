'use client';

import { useState, useMemo } from 'react';
import devicesData from '@/data/devices.json';
import { Device } from '@/types/device';
import { Check, ArrowRightLeft, X, Smartphone, Battery, Cpu, Camera } from 'lucide-react';

export default function HomePage() {
  const [selectedDevices, setSelectedDevices] = useState<Device[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedPrice, setSelectedPrice] = useState<string>('Semua');
  const [search, setSearch] = useState<string>('');

  const devices: Device[] = devicesData;

  const priceRanges = useMemo(() => {
    return ['Semua', ...Array.from(new Set(devices.map(d => d.priceRange)))];
  }, [devices]);

  const categories = [
    'Semua',
    '🎮 Gaming',
    '📱 Daily Use',
    '🎬 Entertainment',
    '📸 Photography',
    '💼 Work / Productivity',
    '🛡️ Long-term Use',
    '🔋 Battery / Heavy Use ⭐',
    '✨ Style / Brand / Experience ⭐'
  ];

  const filteredDevices = useMemo(() => {
    return devices.filter(d => {
      const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.chipset.toLowerCase().includes(search.toLowerCase());
      const matchPrice = selectedPrice === 'Semua' || d.priceRange === selectedPrice;
      const matchCategory = selectedCategory === 'Semua' || d.bestFor.some(bf => bf.includes(selectedCategory.replace(/^[^\w\s]/, '').trim()));
      return matchSearch && matchPrice && matchCategory;
    });
  }, [devices, search, selectedPrice, selectedCategory]);

  const toggleSelect = (dev: Device) => {
    if (selectedDevices.some(d => d.id === dev.id)) {
      setSelectedDevices(selectedDevices.filter(d => d.id !== dev.id));
    } else {
      if (selectedDevices.length >= 3) {
        alert('Maksimal membandingkan 3 perangkat sekaligus.');
        return;
      }
      setSelectedDevices([...selectedDevices, dev]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-28">
      {/* Header */}
      <header className="bg-indigo-900 text-white py-8 px-6 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold tracking-tight">Android Smart Choice & Comparison</h1>
          <p className="text-indigo-200 mt-2 text-sm md:text-base">
            Panduan cerdas memilih smartphone Android sesuai kebutuhan, spesifikasi, dan budget Anda.
          </p>
        </div>
      </header>

      {/* Filter & Search Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 space-y-4">
          <input
            type="text"
            placeholder="Cari tipe device, chipset (misal: S26, Redmi, Dimensity, Snapdragon)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          {/* Filter Kategori */}
          <div>
            <label className="text-xs font-semibold uppercase text-slate-500 mb-2 block">Kategori Kebutuhan</label>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition ${
                    selectedCategory === cat
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Rentang Harga */}
          <div>
            <label className="text-xs font-semibold uppercase text-slate-500 mb-2 block">Rentang Budget</label>
            <div className="flex flex-wrap gap-2">
              {priceRanges.map(p => (
                <button
                  key={p}
                  onClick={() => setSelectedPrice(p)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                    selectedPrice === p
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid Katalog Device */}
      <main className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-800">Daftar Perangkat ({filteredDevices.length})</h2>
          <span className="text-xs text-slate-500">Pilih hingga 3 perangkat untuk dibandingkan</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDevices.map(device => {
            const isSelected = selectedDevices.some(d => d.id === device.id);
            return (
              <div
                key={device.id}
                className={`bg-white rounded-xl border p-5 shadow-sm transition flex flex-col justify-between ${
                  isSelected ? 'border-indigo-600 ring-2 ring-indigo-500/20' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                        {device.priceRange}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-1">{device.name}</h3>
                    </div>
                    <button
                      onClick={() => toggleSelect(device)}
                      className={`p-2 rounded-lg border text-xs font-medium flex items-center gap-1 transition ${
                        isSelected
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                      }`}
                    >
                      {isSelected ? <Check size={14} /> : <ArrowRightLeft size={14} />}
                      {isSelected ? 'Dipilih' : 'Bandingkan'}
                    </button>
                  </div>

                  <ul className="mt-4 space-y-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2"><Cpu size={14} className="text-slate-400 shrink-0" /> {device.chipset}</li>
                    <li className="flex items-center gap-2"><Smartphone size={14} className="text-slate-400 shrink-0" /> {device.display}</li>
                    <li className="flex items-center gap-2"><Camera size={14} className="text-slate-400 shrink-0" /> {device.mainCam}</li>
                    <li className="flex items-center gap-2"><Battery size={14} className="text-slate-400 shrink-0" /> {device.battery} ({device.charging})</li>
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                  {device.bestFor.map((bf, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px]">
                      {bf}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Comparison Drawer / Side-by-Side Floating Bar */}
      {selectedDevices.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-300 shadow-2xl p-4 z-50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-slate-800">Komparasi ({selectedDevices.length}/3):</span>
              <div className="flex flex-wrap gap-2">
                {selectedDevices.map(d => (
                  <span key={d.id} className="bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs px-2.5 py-1 rounded-md flex items-center gap-1">
                    {d.name}
                    <button onClick={() => toggleSelect(d)} className="hover:text-red-600"><X size={12} /></button>
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('comparison-matrix');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-semibold shadow"
            >
              Lihat Perbandingan Lengkap ↓
            </button>
          </div>
        </div>
      )}

      {/* Tabel Komparasi Matriks Berdampingan */}
      {selectedDevices.length >= 2 && (
        <section id="comparison-matrix" className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t-2 border-indigo-200">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Perbandingan Spesifikasi Detail</h2>
          <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-4 w-44 font-semibold text-slate-500">Parameter</th>
                  {selectedDevices.map(d => (
                    <th key={d.id} className="p-4 font-bold text-indigo-900 border-l border-slate-200 min-w-[220px]">
                      {d.name}
                      <span className="block text-xs font-normal text-slate-500">{d.priceRange}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="p-4 font-medium text-slate-500 bg-slate-50">Layar</td>{selectedDevices.map(d => <td key={d.id} className="p-4 border-l">{d.display}</td>)}</tr>
                <tr><td className="p-4 font-medium text-slate-500 bg-slate-50">Chipset</td>{selectedDevices.map(d => <td key={d.id} className="p-4 border-l font-semibold">{d.chipset}</td>)}</tr>
                <tr><td className="p-4 font-medium text-slate-500 bg-slate-50">RAM & Storage</td>{selectedDevices.map(d => <td key={d.id} className="p-4 border-l">{d.ram} / {d.memory}</td>)}</tr>
                <tr><td className="p-4 font-medium text-slate-500 bg-slate-50">Kamera Utama</td>{selectedDevices.map(d => <td key={d.id} className="p-4 border-l">{d.mainCam}</td>)}</tr>
                <tr><td className="p-4 font-medium text-slate-500 bg-slate-50">Kamera Depan</td>{selectedDevices.map(d => <td key={d.id} className="p-4 border-l">{d.frontCam}</td>)}</tr>
                <tr><td className="p-4 font-medium text-slate-500 bg-slate-50">Baterai & Charging</td>{selectedDevices.map(d => <td key={d.id} className="p-4 border-l">{d.battery} ({d.charging})</td>)}</tr>
                <tr><td className="p-4 font-medium text-slate-500 bg-slate-50">Ketahanan & Body</td>{selectedDevices.map(d => <td key={d.id} className="p-4 border-l">{d.durability}<br/><span className="text-slate-400">{d.materials}</span></td>)}</tr>
                <tr><td className="p-4 font-medium text-slate-500 bg-slate-50">Jaminan Update</td>{selectedDevices.map(d => <td key={d.id} className="p-4 border-l">{d.updateSupport}</td>)}</tr>
                <tr>
                  <td className="p-4 font-medium text-slate-500 bg-slate-50">Keunggulan Kunci</td>
                  {selectedDevices.map(d => (
                    <td key={d.id} className="p-4 border-l">
                      <ul className="list-disc pl-4 space-y-1">
                        {d.keyFeatures.map((f, i) => <li key={i}>{f}</li>)}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
