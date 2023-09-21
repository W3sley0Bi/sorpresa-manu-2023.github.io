var HTML = '<div class="article"><div class="box closedDoor"><h2>@@@</h2></div><div class="present"><div class="bauble">?</div></div></div>';
var startDate = new Date(2023, 8, 21); // September is 8 (0-based index)
var currentDate = new Date();
var adventBoxesHTML = '';
var newHTML = '';
var daysPassed = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24)); // Calculate days passed

for (var vv = 1; vv <= 25; vv++) {
  newHTML = HTML.replace('@@@', vv);

  if (vv <= Math.ceil(daysPassed / 7)) {
    newHTML = newHTML.replace('closedDoor', 'openDoor');
    newHTML = newHTML.link('./riddles/' + vv + ".html");
  } else {
    newHTML = newHTML.replace('closedDoor', 'closedDoor'); // Keep unopened boxes closed
  }

  adventBoxesHTML += newHTML;
}

document.getElementById("adventBoxes").innerHTML = adventBoxesHTML;
