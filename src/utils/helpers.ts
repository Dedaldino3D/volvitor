// @param - timeStamp - Javascript Date object or date string
// @usage - timeSince(new Date().setFullYear(2020))
export function timeSince(timeStamp: Date | string) {
  if (!(timeStamp instanceof Date)) {
    timeStamp = new Date(timeStamp);
  }

  if (isNaN(timeStamp.getDate())) {
    return "Invalid date";
  }

  let now = new Date(),
    secondsPast: number = (now.getTime() - timeStamp.getTime()) / 1000;

  const formatDate = function (date: Date, format: string, utc: any = "") {
    let MMMM: string[] = [
      "\x00",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let MMM: string[] = [
      "\x01",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let dddd: string[] = [
      "\x02",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let ddd: string[] = [
      "\x03",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];

    function ii(i: number, len: number = 0) {
      let s = i + "";
      len = len || 2;
      while (s.length < len) s = "0" + s;
      return s;
    }

    let y = utc ? date.getUTCFullYear() : date.getFullYear();
    format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
    format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
    format = format.replace(/(^|[^\\])y/g, "$1" + y);

    let M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
    format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
    format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
    format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
    format = format.replace(/(^|[^\\])M/g, "$1" + M);

    let d = utc ? date.getUTCDate() : date.getDate();
    format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
    format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
    format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
    format = format.replace(/(^|[^\\])d/g, "$1" + d);

    let H = utc ? date.getUTCHours() : date.getHours();
    format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
    format = format.replace(/(^|[^\\])H/g, "$1" + H);

    let h = H > 12 ? H - 12 : H == 0 ? 12 : H;
    format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
    format = format.replace(/(^|[^\\])h/g, "$1" + h);

    let m = utc ? date.getUTCMinutes() : date.getMinutes();
    format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
    format = format.replace(/(^|[^\\])m/g, "$1" + m);

    let s = utc ? date.getUTCSeconds() : date.getSeconds();
    format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
    format = format.replace(/(^|[^\\])s/g, "$1" + s);

    let f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
    format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])f/g, "$1" + f);

    let T = H < 12 ? "AM" : "PM";
    format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
    format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));

    let t = T.toLowerCase();
    format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
    format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));

    let tz = -date.getTimezoneOffset();
    let K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
    if (!utc) {
      tz = Math.abs(tz);
      let tzHrs = Math.floor(tz / 60);
      let tzMin = tz % 60;
      K += ii(tzHrs) + ":" + ii(tzMin);
    }
    format = format.replace(/(^|[^\\])K/g, "$1" + K);

    let day = (utc ? date.getUTCDay() : date.getDay()) + 1;
    format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
    format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);

    format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
    format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);

    format = format.replace(/\\(.)/g, "$1");

    return format;
  };

  if (secondsPast < 0) {
    // Future date
    return timeStamp;
  }
  if (secondsPast < 60) {
    // Less than a minute
    return parseInt(String(secondsPast)) + "secs";
  }
  if (secondsPast < 3600) {
    // Less than an hour
    return parseInt(String(secondsPast / 60)) + "mins";
  }
  if (secondsPast <= 86400) {
    // Less than a day
    return parseInt(String(secondsPast / 3600)) + "hrs";
  }
  if (secondsPast <= 172800) {
    // Less than 2 days
    return "Yesderday at " + formatDate(timeStamp, "h:mmtt");
  }
  if (secondsPast > 172800) {
    // After two days
    let timeString: string;

    if (secondsPast <= 604800)
      timeString =
        formatDate(timeStamp, "dddd") +
        " at " +
        formatDate(timeStamp, "h:mmtt");
    // with in a week
    else if (now.getFullYear() > timeStamp.getFullYear())
      timeString = formatDate(timeStamp, "MMMM d, yyyy");
    // a year ago
    else if (now.getMonth() > timeStamp.getMonth())
      timeString = formatDate(timeStamp, "MMMM d");
    // months ago
    else
      timeString =
        formatDate(timeStamp, "MMMM d") +
        " at " +
        formatDate(timeStamp, "h:mmtt"); // with in a month

    return timeString;
  }
}