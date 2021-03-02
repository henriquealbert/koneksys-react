import { parse } from 'papaparse';

export const parseCsv = async (file) => {
  if (!file.name.includes('.csv')) return;

  const text = await file.text();
  const result = parse(text);

  Object.entries(result.data).forEach(([, array]) => {
    Object.entries(array).forEach(([, value]) => {
      if (!value) {
        result.errors.push('missing field');
      }
    });
  });

  return result;
};
