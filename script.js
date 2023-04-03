const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const months = ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

// last 7 days
function last7Days() {
  return [...Array(7).keys()].map(function (n) {
    var d = new Date();
    d.setDate(d.getDate() - n - 1);

    return (function (date, month, year, day) {
      return [date < 10 ? '0' + date : date, month < 10 ? '0' + month : month, year, day];
    })(d.getDate(), d.getMonth() + 1, d.getFullYear(), days[d.getDay()]);
  });
}

//Current day
function currentDay() {
  var d = new Date();
  return [
    (function (date, month, year, day) {
      return [date < 10 ? '0' + date : date, month < 10 ? '0' + month : month, year, day];
    })(d.getDate(), d.getMonth() + 1, d.getFullYear(), days[d.getDay()]),
  ];
}

//Next 30 days
function next30Days() {
  return [...Array(30).keys()].map(function (i) {
    var dd = new Date();

    dd.setDate(dd.getDate() + i + 1);

    return (function (date, month, year, day) {
      return [date < 10 ? '0' + date : date, month < 10 ? '0' + month : month, year, day];
    })(dd.getDate(), dd.getMonth() + 1, dd.getFullYear(), days[dd.getDay()]);
  });
}
const arr1 = last7Days().reverse();
const arr2 = currentDay();
const arr3 = next30Days();
const datepickerData = arr1.concat(arr2, arr3);

// Dynamically generating HTML
var datePickerItems = '';
for (var i = 0; i < datepickerData.length; i++) {
  datePickerItems += `<div class="swiper-slide"><div class="datepicker-item"  data-date="${datepickerData[i][2]}-${datepickerData[i][1]}-${datepickerData[i][0]}">
            <div class="datepicker__day">${datepickerData[i][3]}</div>
            <div class="datepicker__month">${months[parseInt(datepickerData[i][1])]}</div>
            <div class="datepicker__date">${datepickerData[i][0]}</div>
            <div class="datepicker__year">${datepickerData[i][2]}</div>
        </div></div>`;
}
var container = document.querySelector('.swiper-wrapper');
container.innerHTML += datePickerItems;

//Default selected date

var selectDateInput = document.getElementById('selecteddate');
var d = new Date();
const [today] = d.toISOString().split('T');
selectDateInput.value = today;

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 5,
  centeredSlides: false,
  centeredSlidesBounds: true,
  initialSlide: 7,
  breakpointsBase: 'container',
  grabCursor: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    260: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    370: {
      slidesPerView: 3,
      centeredSlides: true,
    },
    510: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    800: {
      slidesPerView: 5,
      centeredSlides: true,
    },
    960: {
      slidesPerView: 6,
      centeredSlides: false,
    },
    1120: {
      slidesPerView: 7,
      centeredSlides: true,
    },
    1280: {
      slidesPerView: 8,
      centeredSlides: false,
    },
    1440: {
      slidesPerView: 9,
      centeredSlides: true,
    },
    1600: {
      slidesPerView: 10,
      centeredSlides: false,
    },
    1760: {
      slidesPerView: 7,
      centeredSlides: true,
    },
    1920: {
      slidesPerView: 8,
      centeredSlides: false,
    },
    2080: {
      slidesPerView: 9,
      centeredSlides: true,
    },
    2240: {
      slidesPerView: 10,
      centeredSlides: true,
    },
    2400: {
      slidesPerView: 11,
      centeredSlides: true,
    },
    2560: {
      slidesPerView: 'auto',
      spaceBetween: 20,
      centeredSlides: true,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
//Change active element color to green
let activeElement = document.querySelector('.swiper-slide-active .datepicker-item');
activeElement.classList.add('activated');

//User selected Date

function selectDate() {
  let datesContainer = document.querySelector('.swiper-wrapper');

  datesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('datepicker-item')) {
      selectDateInput.value = e.target.dataset.date;
      activeElement = document.querySelector('.activated');
      activeElement.classList.remove('activated');
      e.target.classList.add('activated');
      console.log('Selected date is: ', e.target.dataset.date);
    }
  });
}
selectDate();
