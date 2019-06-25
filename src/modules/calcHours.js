export default  function calcHours(config, hours, overtime = false) {
    const overTimeHours = hours > config.fullTime ? fullTime: 0;
    const regularHours = hours-overTimeHours;
    const halfTime = overTimeHours/2;
    const totalHours = overtime ? halfTime+hours : regularHours;
    return totalHours;
};