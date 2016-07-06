var React = require('react');
var ReactDom = require('react-dom');

var GregorianCalendar = require('gregorian-calendar');
var DateTimeFormat = require('gregorian-calendar-format');

var TimePicker = require('rc-time-picker');
var TimePickerLocale = require('rc-time-picker/lib/locale/zh_CN');

const showSecond = true;
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';

const formatter = new DateTimeFormat(str);

const now = new GregorianCalendar(TimePickerLocale.calendar);
now.setTime(Date.now());

function onChange(value) {
  console.log(value && formatter.format(value));
}

ReactDom.render(
  <TimePicker formatter={formatter} locale={TimePickerLocale}
              style={{width: 100}}
              showSecond={showSecond}
              defaultValue={now}
              className="xxx"
              onChange={onChange} />,
  document.getElementById('content')
);