Blockly.Blocks['yolobit_extension3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("dht sensor"), "SENSOR")
        .appendField("update");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Update sensor value");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['yolobit_extension4'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": Blockly.Msg.DHT_CREATE_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "dht_sensor",
            "variable": Blockly.Msg.DHT_CREATE_MESSAGE1
          },
          {
            "type": "field_dropdown",
            "name": "TYPE",
            "options": [
              [
                "DHT11",
                "DHT11"
              ],
              [
                "DHT22",
                "DHT22"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "PIN",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ],
              [
                "P19",
                "pin19"
              ],
              [
                "P20",
                "pin20"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": '#ff8f3f',
        "tooltip": Blockly.Msg.DHT_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.DHT_CREAT_HELPURL
      }
    );
  }
};