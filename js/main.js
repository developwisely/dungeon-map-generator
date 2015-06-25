// Size of the dungeon grid rows/columns (multiple of 5)
var dungeonGridSize = 10;

// Generate the dungeon grid array
var dungeonGridArray = [];
var cellCount = 0;

for (var i = 0; i < dungeonGridSize; i++)
{
  var thisRow = [];

  for (var j = 0; j < dungeonGridSize; j++)
  {
    thisRow[j] = cellCount;
    cellCount++;
  }

  dungeonGridArray[i] = thisRow;
}



// Constraints for the Root room to be placed
// 1 row of padding for every 5 cells in a row/column
var constraint = dungeonGridSize / 5;

// Get entrance node coordinates based on constraints
var constraintGridSize = dungeonGridSize - constraint * 2;
var entranceCell = Math.floor(Math.random() * Math.pow(constraintGridSize, 2));

var entranceColumn = (entranceCell % constraintGridSize) + constraint;
var entranceRow = Math.floor(entranceCell / constraintGridSize) + constraint;



/** BUILDING THE DUNGEON **/

var _roomsToPlace = [];

RoomRecursion(dungeonMap.rooms, null);
PlaceRooms(_roomsToPlace);

function RoomRecursion(rooms, parent)
{
  for (var k in rooms)
  {
    var thisRoom = rooms[k];

    thisRoom.parent = parent;
    thisRoom.placed = false;

    _roomsToPlace.push(thisRoom);

    if (thisRoom.children != "undefined" && thisRoom.children !== null)
    {
      RoomRecursion(thisRoom.children, thisRoom);
    }
  }
}

function PlaceRooms(roomStack)
{
  for (var l = 0; l < roomStack.length; l++)
  {
    var thisRoom = roomStack[l];

    // Set the possible directions for this room, if they aren't already set
    if (thisRoom.type != "root" && (typeof thisRoom.possibleDirectionStack === "undefined"))
      thisRoom.possibleDirectionStack = [0, 1, 2, 3];

    while (!thisRoom.placed)
    {
      if (thisRoom.type == "root")
      {
        thisRoom.placed = SetRoom(thisRoom, null);
      }
      else if (thisRoom.possibleDirectionStack.length)
      {
        var direction = thisRoom.possibleDirectionStack.splice(Math.floor(Math.random() * thisRoom.possibleDirectionStack.length), 1)[0];
        thisRoom.placed = SetRoom(thisRoom, direction);
      }
      else
      {
        if (l == 0)
          return;

        thisRoom.possibleDirectionStack = [0, 1, 2, 3];
        UnsetRoom(roomStack[l - 1]);
        l -= 2;
        break;
      }
    }
  }
}

function SetRoom(room, direction)
{
  var parent = room.parent;

  var x = parent ? parent.x : 0;
  var y = parent ? parent.y : 0;

  if (direction == 0) // up
    y -= 1;
  else if (direction == 1) // right
    x += 1;
  else if (direction == 2) // down
    y += 1;
  else if (direction == 3) // left
    x -= 1;
  else if (direction == null)
  {
    x = entranceColumn;
    y = entranceRow;
  }

  if (!CheckRoom(x, y))
    return false;

  room.x = x;
  room.y = y;
  dungeonGridArray[y][x] = room;

  return true;
}

function UnsetRoom(room)
{
  room.placed = false;
  dungeonGridArray[room.y][room.x] = room.y * dungeonGridSize + room.x;
}

function CheckRoom(x, y)
{
  if (x >= dungeonGridSize || x < 0 || y >= dungeonGridSize || y < 0)
    return false;

  if (typeof dungeonGridArray[y][x] == "object")
    return false;

  return true;
}

/** END BUILDING DUNGEON **/


// display the dungeon map
$(function() {
  var dungeonGrid = document.createElement('table');

  for (var i = 0, tr; i < dungeonGridArray.length; i++)
  {
    tr = document.createElement('tr');

    for (var j = 0, td; j < dungeonGridArray[i].length; j++)
    {
      td = document.createElement('td');

      if (typeof dungeonGridArray[i][j] == "object")
      {
        td.className = dungeonGridArray[i][j]['level'];

        td.appendChild(document.createTextNode(dungeonGridArray[i][j]['name']));
        td.appendChild(document.createElement('br'));
        td.appendChild(document.createTextNode("StackLvl: " + dungeonGridArray[i][j]['level']));
        td.appendChild(document.createElement('br'));
        td.appendChild(document.createTextNode("Room Type: " + dungeonGridArray[i][j]['type']));

        if (dungeonGridArray[i][j]['access'])
        {
          td.appendChild(document.createElement('br'));
          td.appendChild(document.createTextNode("Requires: " + dungeonGridArray[i][j]['access_key']));
        }

        if (dungeonGridArray[i][j]['type'] == "puzzle")
        {
          td.appendChild(document.createElement('br'));
          td.appendChild(document.createTextNode("Item: " + dungeonGridArray[i][j]['item']));
        }
      }
      else
      {
        td.appendChild(document.createTextNode(dungeonGridArray[i][j]));
      }

      tr.appendChild(td);
    }

    dungeonGrid.appendChild(tr);
  }

  document.getElementById('test').appendChild(dungeonGrid);
});
