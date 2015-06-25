var dungeonMap = {
  name: "26 Room",
  rooms:
  {
    A:
    {
      name: "A",
      type: "root",
      level: "root",
      access: false,
      access_key: null,
      item: null,
      children:
      {
        B:
        {
          name: "B",
          type: "filler",
          level: "level1",
          access: false,
          access_key: null,
          item: null,
          children:
          {
            C:
            {
              name: "C",
              type: "filler",
              level: "level2",
              access: false,
              access_key: null,
              item: null,
              children:
              {
                D:
                {
                  name: "D",
                  type: "filler",
                  level: "level3",
                  access: false,
                  access_key: null,
                  item: null,
                  children:
                  {
                    E:
                    {
                      name: "E",
                      type: "puzzle",
                      level: "level4",
                      access: false,
                      access_key: null,
                      item: "compass",
                    }
                  }
                },
                F:
                {
                  name: "F",
                  type: "filler",
                  level: "level3",
                  access: false,
                  access_key: null,
                  item: null,
                  children:
                  {
                    G:
                    {
                      name: "G",
                      type: "filler",
                      level: "level4",
                      access: false,
                      access_key: null,
                      item: null
                    },
                    H:
                    {
                      name: "H",
                      type: "filler",
                      level: "level4",
                      access: false,
                      access_key: null,
                      item: null
                    }
                  }
                }
              }
            },
            I:
            {
              name: "I",
              type: "filler",
              level: "level2",
              access: false,
              access_key: null,
              item: null,
              children:
              {
                J:
                {
                  name: "J",
                  type: "filler",
                  level: "level3",
                  access: false,
                  access_key: null,
                  item: null,
                  children:
                  {
                    K:
                    {
                      name: "K",
                      type: "puzzle",
                      level: "level4",
                      access: false,
                      access_key: null,
                      item: "key1"
                    },
                    L:
                    {
                      name: "L",
                      type: "filler",
                      level: "level4",
                      access: false,
                      access_key: null,
                      item: null
                    }
                  }
                }
              }
            }
          }
        },
        M:
        {
          name: "M",
          type: "filler",
          level: "level1",
          access: false,
          access_key: null,
          item: null,
          children:
          {
            N:
            {
              name: "N",
              type: "filler",
              level: "level2",
              access: false,
              access_key: null,
              item: null,
              children:
              {
                O:
                {
                  name: "O",
                  type: "filler",
                  level: "level3",
                  access: false,
                  access_key: null,
                  item: null,
                  children:
                  {
                    P:
                    {
                      name: "P",
                      type: "filler",
                      level: "level4",
                      access: true,
                      access_key: "key3",
                      item: null,
                      children:
                      {
                        Q:
                        {
                          name: "Q",
                          type: "safe",
                          level: "level5",
                          access: false,
                          access_key: null,
                          item: null,
                          children:
                          {
                            R:
                            {
                              name: "R",
                              type: "boss",
                              level: "level6",
                              access: false,
                              access_key: null,
                              item: null
                            }
                          }
                        },
                        S:
                        {
                          name: "S",
                          type: "trap",
                          level: "level5",
                          access: false,
                          access_key: null,
                          item: null
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        T:
        {
          name: "T",
          type: "filler",
          level: "level1",
          access: true,
          access_key: "key1",
          item: null,
          children:
          {
            U:
            {
              name: "U",
              type: "filler",
              level: "level2",
              access: false,
              access_key: null,
              item: null,
              children:
              {
                V:
                {
                  name: "V",
                  type: "filler",
                  level: "level3",
                  access: false,
                  access_key: null,
                  item: null,
                  children:
                  {
                    W:
                    {
                      name: "W",
                      type: "puzzle",
                      level: "level4",
                      access: false,
                      access_key: null,
                      item: "map"
                    },
                    X:
                    {
                      name: "X",
                      type: "puzzle",
                      level: "level4",
                      access: false,
                      access_key: null,
                      item: "key2"
                    }
                  }
                }
              }
            },
            Y:
            {
              name: "Y",
              type: "filler",
              level: "level2",
              access: true,
              access_key: "key2",
              item: null,
              children:
              {
                Z:
                {
                  name: "Z",
                  type: "filler",
                  level: "level3",
                  access: false,
                  access_key: null,
                  item: null
                },
                AA:
                {
                  name: "AA",
                  type: "filler",
                  level: "level3",
                  access: false,
                  access_key: null,
                  item: null,
                  children:
                  {
                    AB:
                    {
                      name: "AB",
                      type: "puzzle",
                      level: "level4",
                      access: false,
                      access_key: null,
                      item: "key3",
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

/* Dungeon Map Tree
var dungeonMap = {
  name: "Dungeon 1",
  level: "1",
  rooms: {
    A: {
      name: "A",
      type: "root",
      access: "false",
      access_item: null,
      reward: null,
      children: {
        B: {
          name: "B",
          type: "filler",
          access: "false",
          access_item: null,
          reward: null,
          children: {
            D: {
              name: "D",
              type: "filler",
              access: "false",
              access_item: null,
              reward: null,
              children: {
                I: {
                  name: "I",
                  type: "filler",
                  access: "false",
                  access_item: null,
                  reward: null,
                  children: {
                    K: {
                      name: "K",
                      type: "puzzle",
                      access: "false",
                      reward: "Key1",
                      access_item: null,
                    },
                    M: {
                      name: "M",
                      access: "false",
                      type: "trap",
                      access_item: null,
                      reward: null
                    }
                  }
                },
                F: {
                  name: "F",
                  access: "true",
                  access_item: "Key2",
                  type: "puzzle",
                  reward: "Key3"
                }
              }
            }
          }
        },
        C: {
          name: "C",
          type: "filler",
          access: "false",
          access_item: null,
          reward: null,
          children: {
            E: {
              name: "E",
              type: "filler",
              access: "true",
              access_item: "Key3",
              reward: null,
              children: {
                G: {
                  name: "G",
                  type: "safe",
                  access: "false",
                  access_item: null,
                  reward: null,
                  children: {
                    N: {
                      name: "N",
                      type: "boss",
                      access: "false",
                      access_item: null,
                      reward: null
                    }
                  }
                }
              }
            },
            H: {
              name: "H",
              type: "filler",
              access: "true",
              access_item: "Key1",
              reward: null,
              children: {
                J: {
                  name: "J",
                  type: "filler",
                  access: "false",
                  access_item: null,
                  reward: null,
                  children: {
                    L: {
                      name: "L",
                      type: "trap",
                      access: "false",
                      access_item: null,
                      reward: null,
                    },
                    O: {
                      name: "O",
                      type: "item",
                      access: "false",
                      access_item: null,
                      reward: null
                    }
                  }
                },
                P: {
                  name: "P",
                  type: "puzzle",
                  reward: "Key2",
                  access: "false",
                  access_item: null
                }
              }
            }
          }
        }
      }
    }
  }
};*/
