const daily = document.getElementById('daily-link');
const weekly = document.getElementById('weekly-link');
const monthly = document.getElementById('monthly-link');
const lastHoursArr = document.querySelectorAll(".previous");
const arrayHoursText = document.querySelectorAll(".current");

        fetch('./data.json')
        .then(response => response.json())
        .then((data) => (finalData = data))
          .then(data => console.log(data))
          .catch(error => console.log(error))

daily.addEventListener("click", () => {
        document.querySelector("#workCurrent").innerHTML = finalData[0].timeframes.daily.current +"hrs";
        document.querySelector('#workPrevious').innerHTML =finalData[0].timeframes.daily.previous +"hrs";
        document.querySelector("#playCurrent").innerHTML = finalData[1].timeframes.daily.current +"hrs";
        document.querySelector('#playPrevious').innerHTML =finalData[1].timeframes.daily.previous +"hrs";
        document.querySelector("#studyCurrent").innerHTML = finalData[2].timeframes.daily.current +"hrs";
        document.querySelector('#studyPrevious').innerHTML =finalData[2].timeframes.daily.previous +"hrs";
        document.querySelector("#exerciseCurrent").innerHTML = finalData[3].timeframes.daily.current +"hrs";
        document.querySelector('#exercisePrevious').innerHTML =finalData[3].timeframes.daily.previous +"hrs";
        document.querySelector("#socialCurrent").innerHTML = finalData[4].timeframes.daily.current +"hrs";
        document.querySelector('#socialPrevious').innerHTML =finalData[4].timeframes.daily.previous +"hrs";
        document.querySelector("#selfCareCurrent").innerHTML = `${finalData[5].timeframes.daily.current}hrs`;
        document.querySelector('#selfCarePrevious').innerHTML =`${finalData[5].timeframes.daily.previous}hrs`;
    
  });

  weekly.addEventListener("click", () => {
    
    for (let index = 0; index <= 5; index++) {
      arrayHoursText[index].innerHTML = `${finalData[index].timeframes.weekly.current}hrs`;
      lastHoursArr[index].innerHTML = `Last week - ${finalData[index].timeframes.weekly.previous}hrs`;
    }
  });
  monthly.addEventListener("click", () => {
    
    for (let index = 0; index <= 5; index++) {
      arrayHoursText[index].innerHTML = `${finalData[index].timeframes.monthly.current}hrs`;
      lastHoursArr[index].innerHTML = `Last week - ${finalData[index].timeframes.monthly.previous}hrs`;
    }
  });