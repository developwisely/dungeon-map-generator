const DIRECTIONS = {
    UP: 0,
    RIGHT: 1,
    DOWN: 2,
    LEFT: 3
};

function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
};


export default class MapGenerator {
    constructor(map, { w, h, pad }) {
        this.width = w || 10;
        this.height = h || 10;
        this.padding = pad || 2;
        this.map = map;
    
        this.isGenerated = false;
        this.entrance = {};
        this.roomsToPlace = [];
        this.mapArray = [];
    }

    GetMap() {
        if (this.isGenerated) {
            return this.mapArray;
        } else {
            throw `Map isn't generated.`;
        }
    }

    // Generates the grid map
    GenerateMap() {
        this.SetUp();
        this.RecurseRooms(this.map.rooms, null);
        this.PlaceRooms();
        this.isGenerated = true;
    }


    // Prep to generate
    SetUp() {
        // Create the map array
        let count = 0;
        for (let h = 0; h < this.height; h++) {
            let row = [];
            for (let w = 0; w < this.width; w++) {
                row[w] = count;
                count++;
            }
            this.mapArray[h] = row;
        }

        // Set the entrance node
        const xConstraint = this.width - this.padding * 2;
        const xEntranceCell = Math.floor(Math.random() * Math.pow(xConstraint, 2));

        const yConstraint = this.height - this.padding * 2;
        const yEntranceCell = Math.floor(Math.random() * Math.pow(yConstraint, 2));

        this.entrance.x = (xEntranceCell % xConstraint) + this.padding;
        this.entrance.y = Math.floor(yEntranceCell / yConstraint) + this.padding;
    }


    // Recurse through the rooms and add to the stack with children
    RecurseRooms(rooms, parent) {
        for (let r in rooms) {
            let room = rooms[r];

            room.parent = parent;
            room.isPlaced = false;

            this.roomsToPlace.push(room);

            if (room.children && !isObjectEmpty(room.children)) {
                this.RecurseRooms(room.children, room);
            }
        }
    }


    // Try to place all the rooms on the grid
    PlaceRooms() {
        if (!this.roomsToPlace) throw `No rooms to place.`;

        for (let r = 0; r < this.roomsToPlace.length; r++) {
            let room = this.roomsToPlace[r];

            // Set room direction stack
            if (room.type !== 'root' && (typeof room.possibleDirectionStack === 'undefined')) {
                room.possibleDirectionStack = [
                    DIRECTIONS.UP,
                    DIRECTIONS.RIGHT,
                    DIRECTIONS.DOWN,
                    DIRECTIONS.LEFT
                ];
            }

            // Place the room
            while (!room.isPlaced) {
                // Place the root room
                if (room.type === 'root') {
                    room.isPlaced = this.SetRoom(room, null);
                
                // Check direction stack to place the room randomly
                } else if (room.possibleDirectionStack.length) {
                    // get random direction
                    let randDir = room.possibleDirectionStack.splice(Math.floor(Math.random() * room.possibleDirectionStack.length), 1)[0];
                    room.isPlaced = this.SetRoom(room, randDir);
                
                // unset the parent room
                } else {
                    if (r === 0) return;

                    room.possibleDirectionStack = [
                        DIRECTIONS.UP,
                        DIRECTIONS.RIGHT,
                        DIRECTIONS.DOWN,
                        DIRECTIONS.LEFT
                    ];

                    // Unset previous room
                    this.UnsetRoom(this.roomsToPlace[r - 1]);
                    r -= 2;
                    break;
                }
            }
        }
    }


    // Sets a room to the map array
    SetRoom(room, direction) {
        let parent = room.parent;

        let x = parent ? parent.x : 0;
        let y = parent ? parent.y : 0;

        switch (direction) {
            case DIRECTIONS.UP:
                y--;
            break;

            case DIRECTIONS.RIGHT:
                x++;
            break;

            case DIRECTIONS.DOWN:
                y++;
            break;

            case DIRECTIONS.LEFT:
                x--;
            break;

            default:
                x = this.entrance.x;
                y = this.entrance.y;
            break;
        }

        // Failed check room, can't place the room at this coordinate
        if (!this.CheckRoom(x, y)) return false;

        // Set the room at this coordinate
        room.x = x;
        room.y = y;
        this.mapArray[y][x] = room;
        return true;
    }


    // Unsets a room from the map array
    UnsetRoom(room) {
        room.isPlaced = false;
        this.mapArray[room.y][room.x] = room.y * this.height + room.x;
    }


    // Checks if a room can be placed at given coordinates
    CheckRoom(x, y) {
        // If constraints, check the bounds
        if (x >= this.width || x < 0 || y >= this.height || y < 0)
            return false;

        // Make sure another room is not placed already
        if (typeof this.mapArray[y][x] === 'object')
            return false;

        // Passed.
        return true;
    }
}