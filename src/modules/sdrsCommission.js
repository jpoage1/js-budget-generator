export default function sdrsCommission(sdrs) {
    const wages = sdrs.reduce( sdr => sdr.commission * revenue);
    // Commission is percentage of revenue
    // revenue = Deals * AverageDeal
    // add all the sdr hours together
    // revHour = revenue / hours
    // revenuePerSDR = revHour * sdrHours
    const revenue = sdrs.reduce( sdr => revenue);
    return wages/revenue;
}
