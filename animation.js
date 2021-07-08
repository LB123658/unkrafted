// embed this script in your site to show the day and night animation used in the game
<!DOCTYPE html>
<html>
<head>
<title>Unkrafted Animation</title>
<style>
body {
font-family: sans-serif;
}
#background {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: lightblue;
}
#ground {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  background: green;
}
#sun {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100px;
  height: 100px;
  background: #ffc000;
  border-radius: 50%;
  z-index: -1;
  animation: cycle 120s infinite;
}
@keyframes cycle {
  0% {bottom: 0px; left: 0px;}
  9% {bottom: 10%; left: 10%}
  18% {bottom: 20%; left: 20%}
  27% {bottom: 30%; left: 30%}
  36% {bottom: 40%; left: 40%}
  54% {bottom: 50%; left: 50%}
  63% {bottom: 40%; left: 60%}
  72% {bottom: 30%; left: 70%}
  81% {bottom: 20%; left: 80%}
  90% {bottom: 10%; left: 90%}
  99% {bottom: 0px; left: 100%}
  100% {bottom: 0px; left: 0px;}
}
#shade {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: black;
  animation: night 120s infinite;
}
@keyframes night {
  0% {opacity: 1;}
  20% {opacity: 0;}
  80% {opacity: 0;}
  100% {opacity: 1;}
}
</style>
</head>
<body>
  <div id="background"></div>
  <div id="ground"></div>
  <div id="sun"></div>
  <div id="shade"></div>

</body>
</html>
