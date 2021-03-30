let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.937032, lng: 4.467052 },
    zoom: 15,
  });
}

var workout = []
workout [0] = "<h3>15 min AMRAP</h3> <p>20 Double unders</p> <p>10 Burpees</p> <p>5 Situps</p>"
workout [1] = "<h3>14 min EMOM</h3><p>5 Push-ups</p> <p>10 Walking lunges</p> <p>15 Hip bridge extensions</p>"
workout [2] = "<h3>4 RFT</h3> <p>12 Burpees</p> <p>10 Pull-ups</p> <p>10 Shoulder to overhead</p> <p>10 Kettlebell snatch (elke kant)</p>"
workout [3] = "<h3>4 RFT</h3> <p>40 Walking lunges</p> <p>5 Handstand push-ups</p> <p> 7 Knees to elbows</p> <p>7 Burpees</p>"
workout [4] = "<h3>14 min EMOM</h3> <p>5 Sit-ups</p> <p>5 Push-ups</p> <p>5 Squats</p>"
workout [5] = "<h3>21-15-9</h3> <p>Burpees</p> <p>Pull-ups</p> <p>Squats</p>"
workout [6] = "<h3>4 RFT</h3> <p>12 Burpees</p> <p>10 Pull-ups</p> <p>15 Push-ups</p> <p>40 Double Unders</p>"
workout [7] = "<h3>12 min AMRAP</h3> <p>20 calorie row</p> <p>20 Box jumps</p> <p>20 Double-unders</p>"
workout [8] = "<h3>4 RFT</h3> <p>800m run</p> <p>10 Pull-ups</p> <p>20 Kettlebell Swings</p> <p>40 Double-unders</p><p>20 Wall-balls</p>"
workout [9] = "<h3>Angie for time</h3> <p>100 Pull-ups</p> <p>100 Push-ups</p> <p>100 Sit-ups</p> <p>100 Air sqauts</p>"

function workOut () {
  var randomWorkout = Math.floor(Math.random()*(workout.length));
  document.getElementById('rworkout').innerHTML = workout [randomWorkout];
}