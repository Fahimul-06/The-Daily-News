import React from 'react';
import { Cloud, Sun, CloudRain } from 'lucide-react';

const WeatherWidget: React.FC = () => {
  // In a real app, this would be fetched from an API
  const weather = {
    temperature: 72,
    condition: 'sunny',
    location: 'New York',
  };

  const getWeatherIcon = () => {
    switch (weather.condition) {
      case 'sunny':
        return <Sun size={16} className="text-yellow-500" />;
      case 'cloudy':
        return <Cloud size={16} className="text-gray-500" />;
      case 'rainy':
        return <CloudRain size={16} className="text-blue-500" />;
      default:
        return <Sun size={16} className="text-yellow-500" />;
    }
  };

  return (
    <div className="flex items-center space-x-1 text-sm">
      {getWeatherIcon()}
      <span className="font-medium">{weather.temperature}°F</span>
      <span className="text-slate-600">{weather.location}</span>
    </div>
  );
};

export default WeatherWidget;