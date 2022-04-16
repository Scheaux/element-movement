const goblin = document.getElementById('goblin');
const cells = document.getElementsByClassName('cell');

cells[0].appendChild(goblin);

let prevIdx;
function position() {
  let idx = Math.floor(Math.random() * cells.length);
  while (prevIdx === idx) {
    idx = Math.floor(Math.random() * cells.length);
  }
  cells[idx].appendChild(goblin);
  prevIdx = idx;
}

setInterval(position, 1000);
