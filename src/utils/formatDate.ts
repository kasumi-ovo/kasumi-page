import dayjs from "dayjs";

export default function formatDate(date: Date | dayjs.Dayjs) {
    const template = "MMMM, DD, YYYY"
    return dayjs.isDayjs(date) ? date.format(template) : dayjs(date).format(template)
}