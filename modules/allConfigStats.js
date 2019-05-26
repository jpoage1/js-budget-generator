import configStats from './configStats';
export default function allConfigStats(config, staff) {
    return config.map(config => configStats(config, staff));
};