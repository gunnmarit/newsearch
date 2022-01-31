export default function FormattedDate(props) {
    const getCurrentTime = (props) => {
      const now = new Date();
      const options = { weekday: "long" };
      const day = new Intl.DateTimeFormat("en-US", options).format(now);
      const addZero = (i) => {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      };
      return day + " " + now.getHours() + ":" + addZero(now.getMinutes());
    };
  
    return <span className="time">{getCurrentTime()}</span>;
  }
  