'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const stations = [
  ["岐阜", "長森", "那加", "薮原", "各務ヶ原", "鵜沼", "美濃太田", "古井", "中川辺", "下麻生", "上麻生", "白川口", "下油井",
    "飛騨金山", "焼石", "下呂", "禅昌寺", "飛騨萩原", "上呂", "飛騨宮田", "飛騨小坂", "渚", "久々野", "飛騨一ノ宮", "高山",
    "上枝", "飛騨国府", "飛騨古川", "杉崎", "飛騨細江", "角川", "坂上", "打保", "杉原"],
  ["美濃太田", "美濃川合", "可児", "下切", "姫", "根本", "小泉", "多治見"],
  ["名古屋", "金山", "鶴舞", "千種", "大曽根", "新守山", "勝川", "春日井", "神領", "高蔵寺", "定光寺", "古虎渓", "多治見", "土岐市",
    "瑞浪", "釜戸", "武並", "恵那", "美乃坂本", "中津川", "落合川", "坂下", "田立", "南木曽", "十二兼", "野尻", "大桑", "須原", "倉本",
    "上松", "木曽福島", "原野", "宮ノ越", "薮原", "奈良井", "木曽平沢", "贄川駅", "日出塩", "洗馬"],
  ["醒ヶ井", "近江長岡", "柏原", "関ケ原", "垂井", "大垣", "穂積", "西岐阜", "岐阜", "木曽川", "尾張一宮", "稲沢",
    "清洲", "枇杷島", "名古屋", "尾頭橋", "金山", "熱田", "笠寺", "大高", "南大高", "共和", "大府", "逢妻", "刈谷", "野田新町",
    "東刈谷", "三河安城", "安城", "西岡崎", "岡崎", "相見", "幸田", "三ヶ根", "三河塩津", "蒲郡", "三河三谷", "三河大塚",
    "愛知御津", "西小坂井", "豊橋", "二川", "新所原", "鷲津", "新居町", "弁天島", "舞阪", "高塚", "浜松"],
  ["亀山", "井田川", "加佐登", "河曲", "河原田", "南四日市", "四日市", "富田浜", "富田", "朝日", "桑名", "長島", "弥富", "永和",
    "蟹江", "春田", "八田", "名古屋"],
  ["大府", "尾張森岡", "諸川", "石浜", "東浦", "亀崎", "乙川", "半田", "東岩成", "武豊"],
  ["豊橋", "船町", "下地", "小坂井", "牛久保", "豊川", "三河一宮", "永山", "江島", "東上", "野田城", "新城", "東新町", "茶臼山",
    "三河東郷", "大海", "鳥居", "長篠城", "本長篠", "三河大野", "湯谷温泉", "三河槙原", "柿平", "三河川合", "池場", "東栄", "出馬",
    "上市場", "浦川", "早瀬", "下川合", "中部天竜", "佐久間", "相月", "城西", "向市場", "水窪", "大嵐", "小和田", "中井侍", "伊那小沢",
    "鶯巣駅", "平岡", "為栗", "温田", "田本", "門島", "唐笠", "金野", "千代", "天竜峡", "川路", "時又", "駄科", "毛賀", "伊那八幡", "下山村",
    "鼎", "切石", "飯田", "桜山", "伊那上郷", "元善光寺", "下市田", "市田", "下平", "山吹", "伊那大島", "上片桐", "伊那田島", "高遠原",
    "七久保", "伊那本郷", "飯島", "田切", "伊那福岡", "小町屋", "駒ヶ根", "大田切", "宮田", "赤木", "沢渡", "下島", "伊那市", "伊那北",
    "田畑", "北殿", "木ノ下", "伊那松島", "沢", "羽場", "伊那新町", "宮木"],
  ["新宮", "鵜殿", "紀伊井田", "阿田和", "紀伊市木", "神志山", "有井", "熊野市", "大泊", "波田須", "新鹿", "二木島", "賀田",
    "三木里", "九鬼", "大曽根浦", "尾鷲", "相賀", "船津", "三野瀬", "紀伊長島", "梅ケ谷", "大内山", "伊勢柏崎", "阿曽", "滝原",
    "三瀬谷", "川添", "栃原", "佐奈", "相可", "多気", "徳和", "松坂", "六軒", "高茶屋", "阿漕", "津", "一身田", "下庄", "亀山"],
  ["伊勢奥津", "比津", "伊勢八知", "伊勢鎌倉", "伊勢竹原", "家城", "関ノ宮", "伊勢川口", "伊勢大井", "井関", "一志", "伊勢八太", "権現前", "上ノ庄", "松坂"],
  ["多気", "外城田", "田丸", "宮川", "山田上口", "伊勢市h", "五十鈴ヶ丘", "二見浦", "松下", "鳥羽"]  
];

const distansLineToLine = [
  [0, 1, 2, 1, 2, 2, 2, 3, 4, 4],
  [1, 0, 1, 2, 2, 3, 3, 3, 4, 4],
  [2, 1, 0, 1, 1, 2, 2, 2, 3, 3],
  [1, 2, 1, 0, 1, 1, 1, 2, 3, 3],
  [2, 3, 1, 1, 0, 2, 2, 1, 2, 2],
  [2, 3, 2, 1, 2, 0, 2, 3, 4, 4],
  [2, 3, 2, 1, 2, 2, 0, 3, 4, 4],
  [3, 3, 2, 2, 1, 3, 3, 0, 1, 1],
  [4, 4, 3, 3, 2, 4, 4, 1, 0, 2],
  [4, 4, 3, 3, 2, 4, 4, 1, 2, 0]
]

const lines = ["高山本線", "太多線", "中央本線", "東海道本線", "関西本線", "武豊線", "飯田線", "伊勢本線", "名松線", "参宮線"]

const transitStations = [
  ["岐阜", "美濃太田"],
  ["美濃太田", "多治見"],
  ["名古屋", "金山", "多治見"],
  ["岐阜", "名古屋", "金山", "大府", "豊橋"],
  ["名古屋", "亀山"],
  ["大府"],
  ["豊橋"],
  ["亀山", "松坂", "多気"],
  ["松坂"],
  ["多気"]
]

const transitToLine = {
  "岐阜": [0, 3], "美濃太田": [0, 1], "多治見": [1, 2], "名古屋": [2, 3, 4], "金山": [2, 3], "大府": [3, 5], "豊橋": [3, 6],
  "亀山": [4, 7], "松坂": [7, 8], "多気": [7, 9]
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
    transitsText.innerText = "　駅が選択されていません";
    console.log("駅が選択されていません");
    return "end";
  }

  console.log(startLine);
  console.log(startStation);
  console.log(goalLine);
  console.log(goalStation);

  let currentLines = statioToLines(startStation);
  console.log("出発駅が所属する路線番号", currentLines);

  let goalLines = statioToLines(goalStation);
  console.log("到着駅が所属する路線番号", goalLines);

  let commonLines = transitCompair(currentLines, goalLines);
  if (commonLines.length !== 0) {
    console.log("直通の判定");
    transitsText.innerText = "　直通です";
    return "end";
  }

  transits = [];

  console.log("乗り換え駅一覧の初期状態", transits);

  seachTree(startStation, goalLine, goalStation);

  console.log("乗り換え駅一覧", transits);

  for (const station of transits) {
    transitsText.innerText += station + "\n";
  }
  return "end";

}


function seachTree(currentStation, goalLine, goalStation) {
  let goalLines = statioToLines(goalStation);
  console.log("到着駅が所属する路線番号", goalLines);

  let currentLines = [];
  let rerayStations;
  for (let i = 0; i < stations.length; i++) {
    if (stations[i].includes(currentStation)) {
      currentLines.push(i);
    }
  }
  console.log("探索中の路線番号",currentLines);

  let station = [];
  rerayStations = [];
  for (const line of currentLines) {
    for (station of transitStations[line]) {
      console.log("探索対象の乗換駅", transitStations[line]);
      let currentLines = statioToLines(station);
      console.log("探索中の路線番号と到着駅が所属する路線番号", currentLines, goalLines);
      let commonLines = transitCompair(currentLines, goalLines);
      if (commonLines.length !== 0) {
        transits.push(`・${station} => ${lines[goalLine]}`);
        return;
      }
      if (!rerayStations.includes(station)) {
        rerayStations.push(station);
        console.log("現在一から乗り換え可能なす全ての駅", rerayStations);
      }
    }
  }
  
  let lineDistance = 4;
  let line;
  let selectedLine;
  console.log("乗換駅候補一覧", rerayStations);
  for (const rerayStation of rerayStations) {
    for (line of transitToLine[rerayStation]) {
      console.log("乗換駅候補", rerayStation);
      console.log("乗り換え路線の候補", transitToLine[rerayStation]);
      console.log("goalLine", goalLine);
      console.log("line", line);
      console.log("到着路線との距離", distansLineToLine[line][goalLine]);
      if (lineDistance > distansLineToLine[line][goalLine]) {
        console.log("更新された路線", line)
        lineDistance = distansLineToLine[line][goalLine];
        console.log("更新された乗換駅候補", rerayStation);
        selectedLine = line;
        station = rerayStation;
      }
    }
  }
  transits.push(`・${station} => ${lines[selectedLine]}`);
  console.log("乗り換え駅一覧", transits);
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
  console.log("探索中の駅が所属する路線番号", currentlines);
  console.log("到着駅が所属する路線番号", goalLines);
  let commonLines = currentlines.filter(item => goalLines.includes(item));
  console.log("探索中の駅と到着駅で共通する路線番号", commonLines);
  return commonLines;
}


inputStartLine.addEventListener('change', { name: "startStationSelect", handleEvent: selectedLine });
inputGoalLine.addEventListener('change', { name: "goalStationSelect", handleEvent: selectedLine });
seachButton.addEventListener('click', serchTransit);