function setCookie(Name, value, expDays) {
  let date = new Date();

  //   console.log(date); Wed Jul 09 2025 16:12:37 GMT+0530 (India Standard Time)
  //                          24days || 60min || 60sec || 1000mil-Sec
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  //   console.log(expires); expires=Fri, 08 Aug 2025 10:43:37 GMT
  document.cookie = Name + "=" + value + "; " + expires + "; path=C:/";
}

setCookie("username", "Person2", 30);
