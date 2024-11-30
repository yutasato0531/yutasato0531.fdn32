'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const stations = [
  ["岐阜", "長森", "那加", "薮原", "各務ヶ原", "鵜沼", "美濃太田"],
  ["美濃太田", "美濃川合", "可児", "下切", "姫", "根本", "小泉", "多治見"],
  ["名古屋", "金山", "鶴舞", "千種", "大曽根", "新守山", "勝川", "春日井", "神領", "高蔵寺", "定光寺", "古虎渓", "多治見"],
  ["米原", "醒ヶ井", "近江長岡", "柏原", "関ケ原", "垂井", "大垣", "穂積", "西岐阜", "岐阜", "木曽川", "尾張一宮", "稲沢",
    "清洲", "枇杷島", "名古屋", "尾頭橋", "金山", "熱田", "笠寺", "大高", "南大高", "共和", "大府", "逢妻", "刈谷", "野田新町",
    "東刈谷", "三河安城", "安城", "西岡崎", "岡崎", "相見", "幸田", "三ヶ根", "三河塩津", "蒲郡", "三河三谷", "三河大塚",
    "愛知御津", "西小坂井", "豊橋", "二川", "新所原", "鷲津", "新居町", "弁天島", "舞阪", "高塚", "浜松"],
  ["亀山", "井田川", "加佐登", "河曲", "河原田", "南四日市", "四日市", "富田浜", "富田", "朝日", "桑名", "長島", "弥富",
    "永和", "蟹江", "春田", "八田", "名古屋"],
  ["大府", "尾張森岡", "諸川", "石浜", "東浦", "亀崎", "乙川", "半田", "東岩成", "武豊"],
  ["豊橋", "船町", "下地", "小坂井", "牛久保", "豊川"]
];

const lines = ["高山本線", "太田線", "中央本線", "東海道本線", "関西本線", "武豊線", "飯田線"]

const transitStations = [
  ["岐阜", "美濃太田"],
  ["美濃太田", "多治見"],
  ["名古屋", "金山", "多治見"],
  ["岐阜", "名古屋", "金山", "大府", "豊橋"],
  ["名古屋"],
  ["大府"],
  ["豊橋"]
]

const transitToLine = {
  "岐阜": [0, 3], "美濃太田": [0, 1], "多治見": [1, 2],
  "名古屋": [2, 3, 4], "金山": [2, 3], "大府": [3, 5], "豊橋": [3, 6]
};


let transits = [];


function selectLine(inputLineId) {
  let inputLine = document.getElementById(inputLineId);
  for (let i = 0; i < lines.length; i++) {
    let inputObj = document.createElement("option");
    inputObj.text = lines[i];
    inputObj.value = i;
    inputLine.appendChild(inputObj);
  }
  return inputLine;
}


let inputStartLine = selectLine("startLineSelect");
let inputGoalLine = selectLine("goalLineSelect");


function selectedLine() {
  let inputStation = document.getElementById(this.name);
  inputStation.disabled = false;
  let index;
  if (this.name === "startStationSelect") {
    index = inputStartLine.value;
  } else if (this.name === "goalStationSelect") {
    index = inputGoalLine.value;
  }

  while (inputStation.firstChild) {
    inputStation.removeChild(inputStation.firstChild);
  }

  let option = document.createElement("option");
  option.text = "選択してください";
  option.value = "";
  inputStation.appendChild(option);

  if (index === "") {
    inputStation.disabled = true;
    return;
  }

  for (let i = 0; i < stations[index].length; i++) {
    let inputObj = document.createElement("option");
    inputObj.text = stations[index][i];
    inputObj.value = stations[index][i];
    inputStation.appendChild(inputObj);
  }
}

let seachButton = document.getElementById("search");

function serchTransit() {

  let transitsText = document.getElementById("transit");
  transitsText.innerText = ""

  const startLine = document.getElementById("startLineSelect").value;
  const startStation = document.getElementById("startStationSelect").value;
  const goalLine = document.getElementById("goalLineSelect").value;
  const goalStation = document.getElementById("goalStationSelect").value;



  if ((startStation === "") || (goalStation === "")) {
    transitsText.innerText = "駅が選択されていません";
    console.log("駅が選択されていません");
    return "end";
  }

  console.log(startLine);
  console.log(startStation);
  console.log(goalLine);
  console.log(goalStation);

  let currentLines = statioToLines(startStation);
  console.log("startLines", currentLines);

  let goalLines = statioToLines(goalStation);
  console.log("goalLines", goalLines);

  let commonLines = transitCompair(currentLines, goalLines);
  if (commonLines.length !== 0) {
    console.log("直通の判定");
    let transitObj = document.createElement("li")
    transitObj.innerText = "直通です";
    transitsText.appendChild(transitObj);
    return "end";
  }

  transits = [];

  console.log(transits);

  seachTree(startStation, goalLine, goalStation);

  console.log(transits);

  for (const station of transits) {
    transitsText.innerText += station + "\n";
    // let transitObj = document.createElement("li")
    // transitObj.innerText = station;
    // transitsText.appendChild(transitObj);
  }
  return "end";

}


function seachTree(currentStation, goalLine, goalStation) {
  let goalLines = statioToLines(goalStation);
  console.log("goalLines", goalLines);

  let currentLines = [];
  let rerayStations;
  for (let i = 0; i < stations.length; i++) {
    if (stations[i].includes(currentStation)) {
      currentLines.push(i);
    }
  }
  console.log(currentLines);

  let station;
  rerayStations = [];
  for (const line of currentLines) {
    for (station of transitStations[line]) {
      console.log(transitStations[line]);
      let currentLines = statioToLines(station);
      console.log(currentLines, goalLines);
      let commonLines = transitCompair(currentLines, goalLines);
      if (commonLines.length !== 0) {
        transits.push(`・${station} => ${lines[goalLine]}`);
        transits[transits.length - 2] += " => " + lines[line];
        console.log(transits);
        return;
      }
      rerayStations.push(station);
    }
  }
  
  let lineDistance = 6;
  let line;
  for (const rerayStation of rerayStations) {
    for (line of transitToLine[rerayStation]) {
      if (lineDistance >= Math.abs(goalLine - line)) {
        lineDistance = Math.abs(goalLine - line);
        station = rerayStation;
      }
    }
  }
  transits.push("・" + station);
  if (transits.length >= 2) {
    transits[transits.length - 2] += " => " + lines[line];
    console.log(transits[transits.length-2]);
  }
  console.log(transits);
  seachTree(station, goalLine, goalStation);
}


function statioToLines(station) {
  const lines = [];
  for (let i = 0; i < stations.length; i++) {
    if (stations[i].includes(station)) {
      lines.push(i);
    }
  }
  return lines;
}


function transitCompair(currentlines, goalLines) {
  console.log(currentlines);
  console.log(goalLines);
  let commonLines = currentlines.filter(item => goalLines.includes(item));
  console.log(commonLines);
  return commonLines;
}


inputStartLine.addEventListener('change', { name: "startStationSelect", handleEvent: selectedLine });
inputGoalLine.addEventListener('change', { name: "goalStationSelect", handleEvent: selectedLine });
seachButton.addEventListener('click', serchTransit);

