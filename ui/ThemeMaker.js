const chest_form_data = require('./chest_server_form.json')
let theme = {
    char: "h",
    id: "garbage",
    folder: "Garbage"
}
let flag5 = `§${theme.char}§h§t§h§i§s§i§s§b§r§o§k§e§n§e§s§t§0§5`;
let flag9 = `§${theme.char}§h§t§h§i§s§i§s§b§r§o§k§e§n§e§s§t§0§9`;
let flag18 = `§${theme.char}§h§t§h§i§s§i§s§b§r§o§k§e§n§e§s§t§1§8`;
let flag27 = `§${theme.char}§h§t§h§i§s§i§s§b§r§o§k§e§n§e§s§t§2§7`;
let flag36 = `§${theme.char}§h§t§h§i§s§i§s§b§r§o§k§e§n§e§s§t§3§6`;
let flag45 = `§${theme.char}§h§t§h§i§s§i§s§b§r§o§k§e§n§e§s§t§4§5`;
let flag54 = `§${theme.char}§h§t§h§i§s§i§s§b§r§o§k§e§n§e§s§t§5§4`;
let add = [{
    ["tiny_chest_grid_image_"+theme.id]: {
        "type": "image",
        "size": [
            176,
            130
        ],
        "texture": `textures/ui/ChestGUIThemes/${theme.folder}/generic_5`,
        "$tiny_chest_flag": flag5,
        "layer": 0,
        "controls": [
            {
                "title_label@chest_ui.chest_label": {}
            },
            {
                "close_button@common.close_button": {
                    "$close_button_offset": [
                        -2,
                        2
                    ]
                }
            },
            {
                "chest_grid": {
                    "type": "grid",
                    "grid_dimensions": [
                        5,
                        1
                    ],
                    "size": [
                        "100% - 86px",
                        "100% - 112px"
                    ],
                    "offset": [
                        43,
                        21
                    ],
                    "anchor_from": "top_left",
                    "anchor_to": "top_left",
                    "grid_item_template": "chest_ui.inventory_item",
                    "collection_name": "form_buttons",
                    "layer": 1
                }
            },
            {
                "inventory_text": {
                    "type": "label",
                    "anchor_from": "top_left",
                    "anchor_to": "top_left",
                    "offset": [
                        7,
                        "100% - 90px"
                    ],
                    "size": [
                        "90%",
                        "default"
                    ],
                    "layer": 2,
                    "color": "$title_text_color",
                    "text": "container.inventory"
                }
            }
        ],
        "bindings": [
            {
                "binding_name": "#title_text"
            },
            {
                "binding_type": "view",
                "source_property_name": "(not ((#title_text - $tiny_chest_flag) = #title_text))",
                "target_property_name": "#visible"
            }
        ]
    }
},
{
    ["nine_chest_grid_image_"+theme.id]: {
        "type": "image",
        "size": [
            176,
            130
        ],
        "texture": `textures/ui/ChestGUIThemes/${theme.folder}/generic_9`,
        "$nine_chest_flag": flag9,
        "layer": 0,
        "controls": [
            {
                "title_label@chest_ui.chest_label": {}
            },
            {
                "close_button@common.close_button": {
                    "$close_button_offset": [
                        -2,
                        2
                    ]
                }
            },
            {
                "chest_grid": {
                    "type": "grid",
                    "grid_dimensions": [
                        9,
                        1
                    ],
                    "size": [
                        "100% - 14px",
                        "100% - 112px"
                    ],
                    "offset": [
                        7,
                        21
                    ],
                    "anchor_from": "top_left",
                    "anchor_to": "top_left",
                    "grid_item_template": "chest_ui.inventory_item",
                    "collection_name": "form_buttons",
                    "layer": 1
                }
            },
            {
                "inventory_text": {
                    "type": "label",
                    "anchor_from": "top_left",
                    "anchor_to": "top_left",
                    "offset": [
                        7,
                        "100% - 90px"
                    ],
                    "size": [
                        "90%",
                        "default"
                    ],
                    "layer": 2,
                    "color": "$title_text_color",
                    "text": "container.inventory"
                }
            }
        ],
        "bindings": [
            {
                "binding_name": "#title_text"
            },
            {
                "binding_type": "view",
                "source_property_name": "(not ((#title_text - $nine_chest_flag) = #title_text))",
                "target_property_name": "#visible"
            }
        ]
    }
},
{
    ["eighteen_chest_grid_image_"+theme.id]: {
        "type": "image",
        "size": [
            176,
            148
        ],
        "texture": `textures/ui/ChestGUIThemes/${theme.folder}/generic_18`,
        "$eighteen_chest_flag": flag18,
        "layer": 0,
        "controls": [
            {
                "title_label@chest_ui.chest_label": {}
            },
            {
                "close_button@common.close_button": {
                    "$close_button_offset": [
                        -2,
                        2
                    ]
                }
            },
            {
                "chest_grid": {
                    "type": "grid",
                    "grid_dimensions": [
                        9,
                        2
                    ],
                    "size": [
                        "100% - 14px",
                        "100% - 112px"
                    ],
                    "offset": [
                        7,
                        21
                    ],
                    "anchor_from": "top_left",
                    "anchor_to": "top_left",
                    "grid_item_template": "chest_ui.inventory_item",
                    "collection_name": "form_buttons",
                    "layer": 1
                }
            },
            {
                "inventory_text": {
                    "type": "label",
                    "anchor_from": "top_left",
                    "anchor_to": "top_left",
                    "offset": [
                        7,
                        "100% - 90px"
                    ],
                    "size": [
                        "90%",
                        "default"
                    ],
                    "layer": 2,
                    "color": "$title_text_color",
                    "text": "container.inventory"
                }
            }
        ],
        "bindings": [
            {
                "binding_name": "#title_text"
            },
            {
                "binding_type": "view",
                "source_property_name": "(not ((#title_text - $eighteen_chest_flag) = #title_text))",
                "target_property_name": "#visible"
            }
        ]
    }
},
{
    ["small_chest_grid_image_"+theme.id]: {
        "type": "image",
        "size": [
            176,
            166
        ],
        "texture": `textures/ui/ChestGUIThemes/${theme.folder}/generic_27`,
        "$small_chest_flag": flag27,
        "layer": 0,
        "controls": [
            {
                "title_label@chest_ui.chest_label": {}
            },
            {
                "close_button@common.close_button": {
                    "$close_button_offset": [
                        -2,
                        2
                    ]
                }
            },
            {
                "chest_grid": {
                    "type": "grid",
                    "grid_dimensions": [
                        9,
                        3
                    ],
                    "size": [
                        "100% - 14px",
                        "100% - 112px"
                    ],
                    "offset": [
                        7,
                        21
                    ],
                    "anchor_from": "top_left",
                    "anchor_to": "top_left",
                    "grid_item_template": "chest_ui.inventory_item",
                    "collection_name": "form_buttons",
                    "layer": 1
                }
            },
            {
                "inventory_text": {
                    "type": "label",
                    "anchor_from": "top_left",
                    "anchor_to": "top_left",
                    "offset": [
                        7,
                        "100% - 90px"
                    ],
                    "size": [
                        "90%",
                        "default"
                    ],
                    "layer": 2,
                    "color": "$title_text_color",
                    "text": "container.inventory"
                }
            }
        ],
        "bindings": [
            {
                "binding_name": "#title_text"
            },
            {
                "binding_type": "view",
                "source_property_name": "(not ((#title_text - $small_chest_flag) = #title_text))",
                "target_property_name": "#visible"
            }
        ]
    }
},
{
    ["thirtysix_chest_grid_image_"+theme.id]: {
        "type": "image",
        "size": [
            176,
            184
        ],
        "texture": `textures/ui/ChestGUIThemes/${theme.folder}/generic_36`,
        "$thirtysix_chest_flag": flag36,
        "layer": 0,
        "controls": [
            {
                "title_label@chest_ui.chest_label": {}
            },
            {
                "close_button@common.close_button": {
                    "$close_button_offset": [
                        -2,
                        2
                    ]
                }
            },
            {
                "chest_grid": {
                    "type": "grid",
                    "grid_dimensions": [
                        9,
                        4
                    ],
                    "size": [
                        "100% - 14px",
                        "100% - 112px"
                    ],
                    "offset": [
                        7,
                        21
                    ],
                    "anchor_from": "top_left",
                    "anchor_to": "top_left",
                    "grid_item_template": "chest_ui.inventory_item",
                    "collection_name": "form_buttons",
                    "layer": 1
                }
            },
            {
                "inventory_text": {
                    "type": "label",
                    "anchor_from": "top_left",
                    "anchor_to": "top_left",
                    "offset": [
                        7,
                        "100% - 90px"
                    ],
                    "size": [
                        "90%",
                        "default"
                    ],
                    "layer": 2,
                    "color": "$title_text_color",
                    "text": "container.inventory"
                }
            }
        ],
        "bindings": [
            {
                "binding_name": "#title_text"
            },
            {
                "binding_type": "view",
                "source_property_name": "(not ((#title_text - $thirtysix_chest_flag) = #title_text))",
                "target_property_name": "#visible"
            }
        ]
    }
},
{
    ["fourtyfive_chest_grid_image_"+theme.id]: {
        "type": "image",
        "size": [
            176,
            202
        ],
        "texture": `textures/ui/ChestGUIThemes/${theme.folder}/generic_45`,
        "$fourtyfive_chest_flag": flag45,
        "layer": 0,
        "controls": [
            {
                "title_label@chest_ui.chest_label": {}
            },
            {
                "close_button@common.close_button": {
                    "$close_button_offset": [
                        -2,
                        2
                    ]
                }
            },
            {
                "chest_grid": {
                    "type": "grid",
                    "grid_dimensions": [
                        9,
                        5
                    ],
                    "size": [
                        "100% - 14px",
                        "100% - 112px"
                    ],
                    "offset": [
                        7,
                        21
                    ],
                    "anchor_from": "top_left",
                    "anchor_to": "top_left",
                    "grid_item_template": "chest_ui.inventory_item",
                    "collection_name": "form_buttons",
                    "layer": 1
                }
            },
            {
                "inventory_text": {
                    "type": "label",
                    "anchor_from": "top_left",
                    "anchor_to": "top_left",
                    "offset": [
                        7,
                        "100% - 90px"
                    ],
                    "size": [
                        "90%",
                        "default"
                    ],
                    "layer": 2,
                    "color": "$title_text_color",
                    "text": "container.inventory"
                }
            }
        ],
        "bindings": [
            {
                "binding_name": "#title_text"
            },
            {
                "binding_type": "view",
                "source_property_name": "(not ((#title_text - $fourtyfive_chest_flag) = #title_text))",
                "target_property_name": "#visible"
            }
        ]
    }
},
{
    ["large_chest_grid_image_"+theme.id]: {
        "type": "image",
        "size": [
            176,
            220
        ],
        "texture": `textures/ui/ChestGUIThemes/${theme.folder}/generic_54`,
        "$large_chest_flag": flag54,
        "layer": 0,
        "controls": [
            {
                "chest_label@chest_ui.chest_label": {}
            },
            {
                "close_button@common.close_button": {
                    "$close_button_offset": [
                        -2,
                        2
                    ]
                }
            },
            {
                "chest_grid": {
                    "type": "grid",
                    "grid_dimensions": [
                        9,
                        6
                    ],
                    "size": [
                        "100% - 14px",
                        "100% - 112px"
                    ],
                    "offset": [
                        7,
                        21
                    ],
                    "anchor_from": "top_left",
                    "anchor_to": "top_left",
                    "grid_item_template": "chest_ui.inventory_item",
                    "collection_name": "form_buttons",
                    "layer": 1
                }
            },
            {
                "inventory_text": {
                    "type": "label",
                    "anchor_from": "top_left",
                    "anchor_to": "top_left",
                    "offset": [
                        7,
                        "100% - 90px"
                    ],
                    "size": [
                        "90%",
                        "default"
                    ],
                    "layer": 2,
                    "color": "$title_text_color",
                    "text": "container.inventory"
                }
            }
        ],
        "bindings": [
            {
                "binding_name": "#title_text"
            },
            {
                "binding_type": "view",
                "source_property_name": "(not ((#title_text - $large_chest_flag) = #title_text))",
                "target_property_name": "#visible"
            }
        ]
    }
}];
console.log(add)
chest_form_data.chest_panel.controls.push(...add);
const fs = require('fs');
fs.writeFile('chest_server_form.json', JSON.stringify(chest_form_data, null, 2), err=>{})