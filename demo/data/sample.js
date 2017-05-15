var SAMPLE = '[{"stencilId":"StartTask","displayName":"Start","indicators":[],"inboundConnections":[],"outboundConnections":[{"fromComponentId":"cmp_0","fromPlacement":"bottom","toComponentId":"cmp_1","toPlacement":"top","connectionType":"success","id":"con_cmp_0bottom_cmp_1top","type":"connection"}],"position":{"x":271,"y":30},"id":"cmp_0","type":"component"},{"stencilId":"FunctionTask","displayName":"Business Function","indicators":[],"inboundConnections":[{"fromComponentId":"cmp_0","fromPlacement":"bottom","toComponentId":"cmp_1","toPlacement":"top","connectionType":"success","id":"con_cmp_0bottom_cmp_1top","type":"connection"}],"outboundConnections":[{"fromComponentId":"cmp_1","fromPlacement":"right","toComponentId":"cmp_2","toPlacement":"left","connectionType":"success","id":"con_cmp_1right_cmp_2left","type":"connection"},{"fromComponentId":"cmp_1","fromPlacement":"bottom","toComponentId":"cmp_3","toPlacement":"top","connectionType":"fail","id":"con_cmp_1bottom_cmp_3top","type":"connection"}],"position":{"x":270,"y":120},"id":"cmp_1","type":"component"},{"stencilId":"UserTask","displayName":"The Dude","indicators":[],"inboundConnections":[{"fromComponentId":"cmp_1","fromPlacement":"right","toComponentId":"cmp_2","toPlacement":"left","connectionType":"success","id":"con_cmp_1right_cmp_2left","type":"connection"}],"outboundConnections":[{"fromComponentId":"cmp_2","fromPlacement":"bottom","toComponentId":"cmp_7","toPlacement":"top","connectionType":"success","id":"con_cmp_2bottom_cmp_7top","type":"connection"},{"fromComponentId":"cmp_2","fromPlacement":"right","toComponentId":"cmp_9","toPlacement":"left","connectionType":"fail","id":"con_cmp_2right_cmp_9left","type":"connection"}],"position":{"x":420,"y":120},"id":"cmp_2","type":"component"},{"stencilId":"IfTask","displayName":"If","indicators":[],"inboundConnections":[{"fromComponentId":"cmp_1","fromPlacement":"bottom","toComponentId":"cmp_3","toPlacement":"top","connectionType":"fail","id":"con_cmp_1bottom_cmp_3top","type":"connection"}],"outboundConnections":[{"fromComponentId":"cmp_3","fromPlacement":"bottomLeft","toComponentId":"cmp_4","toPlacement":"top","connectionType":"yes","id":"con_cmp_3bottomLeft_cmp_4top","type":"connection"},{"fromComponentId":"cmp_3","fromPlacement":"bottomRight","toComponentId":"cmp_5","toPlacement":"top","connectionType":"no","id":"con_cmp_3bottomRight_cmp_5top","type":"connection"}],"position":{"x":270,"y":240},"id":"cmp_3","type":"component"},{"stencilId":"custom_task","displayName":"Custom Task","indicators":[],"inboundConnections":[{"fromComponentId":"cmp_3","fromPlacement":"bottomLeft","toComponentId":"cmp_4","toPlacement":"top","connectionType":"yes","id":"con_cmp_3bottomLeft_cmp_4top","type":"connection"}],"outboundConnections":[{"fromComponentId":"cmp_4","fromPlacement":"bottom","toComponentId":"cmp_6","toPlacement":"topLeft","connectionType":"success","id":"con_cmp_4bottom_cmp_6topLeft","type":"connection"}],"position":{"x":211,"y":330},"id":"cmp_4","type":"component"},{"stencilId":"WorkflowTask","displayName":"WorkFlow","indicators":[],"inboundConnections":[{"fromComponentId":"cmp_3","fromPlacement":"bottomRight","toComponentId":"cmp_5","toPlacement":"top","connectionType":"no","id":"con_cmp_3bottomRight_cmp_5top","type":"connection"}],"outboundConnections":[{"fromComponentId":"cmp_5","fromPlacement":"bottom","toComponentId":"cmp_6","toPlacement":"topRight","connectionType":"success","id":"con_cmp_5bottom_cmp_6topRight","type":"connection"}],"position":{"x":330,"y":330},"id":"cmp_5","type":"component"},{"stencilId":"AnyTask","displayName":"Any","indicators":[],"inboundConnections":[{"fromComponentId":"cmp_4","fromPlacement":"bottom","toComponentId":"cmp_6","toPlacement":"topLeft","connectionType":"success","id":"con_cmp_4bottom_cmp_6topLeft","type":"connection"},{"fromComponentId":"cmp_5","fromPlacement":"bottom","toComponentId":"cmp_6","toPlacement":"topRight","connectionType":"success","id":"con_cmp_5bottom_cmp_6topRight","type":"connection"},{"fromComponentId":"cmp_7","fromPlacement":"left","toComponentId":"cmp_6","toPlacement":"right","connectionType":"success","id":"con_cmp_7left_cmp_6right","type":"connection"}],"outboundConnections":[{"fromComponentId":"cmp_6","fromPlacement":"bottom","toComponentId":"cmp_8","toPlacement":"top","connectionType":"success","id":"con_cmp_6bottom_cmp_8top","type":"connection"}],"position":{"x":270,"y":450},"id":"cmp_6","type":"component"},{"stencilId":"AnyTask","displayName":"Any","indicators":[],"inboundConnections":[{"fromComponentId":"cmp_2","fromPlacement":"bottom","toComponentId":"cmp_7","toPlacement":"top","connectionType":"success","id":"con_cmp_2bottom_cmp_7top","type":"connection"},{"fromComponentId":"cmp_11","fromPlacement":"left","toComponentId":"cmp_7","toPlacement":"right","connectionType":"success","id":"con_cmp_11left_cmp_7right","type":"connection"}],"outboundConnections":[{"fromComponentId":"cmp_7","fromPlacement":"left","toComponentId":"cmp_6","toPlacement":"right","connectionType":"success","id":"con_cmp_7left_cmp_6right","type":"connection"}],"position":{"x":420,"y":450},"id":"cmp_7","type":"component"},{"stencilId":"EndTask","displayName":"End","indicators":[],"inboundConnections":[{"fromComponentId":"cmp_6","fromPlacement":"bottom","toComponentId":"cmp_8","toPlacement":"top","connectionType":"success","id":"con_cmp_6bottom_cmp_8top","type":"connection"}],"outboundConnections":[],"position":{"x":269,"y":537},"id":"cmp_8","type":"component"},{"stencilId":"TriggerTask","displayName":"Trigger","indicators":[],"inboundConnections":[{"fromComponentId":"cmp_2","fromPlacement":"right","toComponentId":"cmp_9","toPlacement":"left","connectionType":"fail","id":"con_cmp_2right_cmp_9left","type":"connection"}],"outboundConnections":[{"fromComponentId":"cmp_9","fromPlacement":"bottom","toComponentId":"cmp_11","toPlacement":"top","connectionType":"trigger","id":"con_cmp_9bottom_cmp_11top","type":"connection"}],"position":{"x":540,"y":120},"id":"cmp_9","type":"component"},{"stencilId":"AllTask","displayName":"All","indicators":[],"inboundConnections":[{"fromComponentId":"cmp_9","fromPlacement":"bottom","toComponentId":"cmp_11","toPlacement":"top","connectionType":"trigger","id":"con_cmp_9bottom_cmp_11top","type":"connection"}],"outboundConnections":[{"fromComponentId":"cmp_11","fromPlacement":"left","toComponentId":"cmp_7","toPlacement":"right","connectionType":"success","id":"con_cmp_11left_cmp_7right","type":"connection"}],"position":{"x":540,"y":450},"id":"cmp_11","type":"component"}]';    