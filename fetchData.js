// src/utils/fetchData.js
import Papa from 'papaparse';

const SHEET_ID = '1ZI_H6nuuGYXmDvq9Tp2XUbYeWIIK66hwnZK9tSzB89k';
const GID = '1972237477';
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/pub?gid=${GID}&single=true&output=csv`;

export const fetchDevices = async () => {
  try {
    const response = await fetch(CSV_URL);
    if (!response.ok) {
      throw new Error(`Gagal mengambil data: ${response.statusText}`);
    }
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          resolve(results.data);
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
