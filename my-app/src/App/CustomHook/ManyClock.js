import React from "react";

function useFormatUTCString(name) {
  return ['2022-09-21', name] //回Array
}

const Clock = () => {
  var [time, name] = useFormatUTCString('clock') //接Array
  // 一個時鐘的樣子
  return (
    <h1>{name} {time}</h1>
  )
}

const DigitalClock = () => {
  var [time, name] = useFormatUTCString('digitalClock')
  // 數位時鐘的樣子
  return (
    <h2>{name} {time}</h2>
  )

}

const Hourglass = () => {
  var [time, name] = useFormatUTCString('hourglass')
  // 沙漏樣子
  return (
    <h3>{name} {time}</h3>
  )
}


export {Clock, DigitalClock, Hourglass} ;

