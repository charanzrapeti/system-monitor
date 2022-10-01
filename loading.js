const si = require('systeminformation');
SystemInfo = {
  system:'manufacturer, model, version, serial,uuid',
  uuid:'*',
  bios:'*',
  baseboard:'*',
  chassis:'*'
}

si.get(SystemInfo).then(data => console.log(data))