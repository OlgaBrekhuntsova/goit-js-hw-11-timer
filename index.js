// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2021'),
// });

const refs = {
  days:document.querySelector('.value[data-value="days"]'),
  hours:document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs:document.querySelector('.value[data-value="secs"]'),
        }
const targetDate = new Date('Jan 09, 2022');
const CountdownTimer = function () {
  const date = Date.now();
  const time = targetDate.getTime() - date;
  refs.days.textContent = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  refs.hours.textContent = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  refs.mins.textContent = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  refs.secs.textContent = pad(Math.floor((time % (1000 * 60)) / 1000));
};
function pad(value) { return String(value).padStart(2, '0') };

setInterval(CountdownTimer, 1000);
