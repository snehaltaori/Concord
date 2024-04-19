export default function DateDecorator(date) {
    // const date = "14/02/2024";
    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    date = date.split("/");
    let day = date[0];
    let monthIndex = date[1];
    let year = date[2];
    return `${day} ${monthNames[monthIndex - 1]} ${year}`;
}
