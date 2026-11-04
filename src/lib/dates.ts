// Month names as the résumé abbreviates them.
export const monthNames = [
  'Jan.',
  'Fev.',
  'Mar.',
  'Abr.',
  'Mai.',
  'Jun.',
  'Jul.',
  'Ago.',
  'Set.',
  'Out.',
  'Nov.',
  'Dez.',
] as const;

/** The current month in São Paulo, as "YYYY-MM". */
export function currentMonth(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
  }).format(now);
}

function monthIndex(isoMonth: string) {
  const [year, month] = isoMonth.split('-').map(Number);
  return year * 12 + (month - 1);
}

/** "2021-11" becomes "Nov. 2021". */
export function formatMonth(isoMonth: string) {
  const [year, month] = isoMonth.split('-').map(Number);
  return `${monthNames[month - 1]} ${year}`;
}

/**
 * How long a period lasted, counting both of its months: September 2024 to
 * November 2026 is "2 anos e 3 meses".
 */
export function formatDuration(start: string, end: string) {
  const total = Math.max(1, monthIndex(end) - monthIndex(start) + 1);
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? 'ano' : 'anos'}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? 'mês' : 'meses'}`);
  return parts.join(' e ');
}
