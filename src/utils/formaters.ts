function formatAmount(amount: any, addSign: Boolean = true) {
    return `${addSign && '₦'}${Number.parseInt(amount).toLocaleString("en-US")}`;
}

function formatDate(rawDate: string) {
    const date = new Date(rawDate);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }
    return new Intl.DateTimeFormat('en-US', options).format(date);
}
export { formatAmount, formatDate };