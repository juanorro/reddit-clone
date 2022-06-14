import TimeAgo from "javascript-time-ago";
import es from 'javascript-time-ago/locale/es';

TimeAgo.addLocale(es);

const timeago = new TimeAgo('es-ES');

export default timeago;