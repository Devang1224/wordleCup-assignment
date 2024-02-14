const userColor = [
  '#DD322F',
'#859802',
 '#B48900',
  '#258BD2',
  '#D33682',
'#2BA198',
]
export default function getRandomColor(){
  const randomIndex = Math.floor(Math.random() * userColor.length);
  return userColor[randomIndex];
}