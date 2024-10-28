import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export interface TimeZoneConfig {
  zone: string;
  label: string;
}

export function useTimeDisplay(config: TimeZoneConfig) {
  const getFormattedTime = () => {
    return dayjs().tz(config.zone).format('HH:mm:ss');
  };

  return {
    getFormattedTime
  };
}