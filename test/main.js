const si = require('systeminformation');
SystemInfo = {
  system:'manufacturer, model, version, serial,uuid',
  uuid:'*',
  bios:'*',
  baseboard:'*',
  chassis:'*'
}
CpuInfo = {
    cpu:'*',
    CpuCache:'*'
}
MemInfo = {
    mem:'total, free, used , active, available, buffcache, buffers, cached ',
    memLayout:'size, type, clockSpeed, manufacturer, serialNum, voltageConfigured'
}
BatteryInfo = {
    battery:'*'
}
OsInfo = {
    osInfo:'*',
    versions:'*',
    users:'*'

}
DiskInfo = {
    diskLayout:'device, type, name, vendor, size, serialNum, interfaceType, temperature',
    blockDevices:'*',
    fsSize:'*'
}
UsbInfo = {
    usb:'*'
}
PrinterInfo = {
    printer:'*'
}
AudioInfo = {
    audio:'*'
}
NetworkInfo = {
    networkInterfaces:'default, ip4, ip4.subnet, ip6, ip6subnet, mac, internal, virtual, operState, type, duplex, mtu, speed, dhcp, dnsSuffix',
    networkInterfaceDefault:'*',
    networkGatewayDefault:'*',

}
WifiInfo = {
    wifiNetworks:'ssid,bssid,mode,channel,frequency,signalLevel,quality,security',
    wifiInterfaces:'*',
    wifiConnections:'*'
}
BluetoothInfo = {
    bluetoothDevices:'*'
}
// si.get(SystemInfo).then(data => console.log(data))
si.get(CpuInfo).then(data => console.log(data))
// si.get(MemInfo).then(data => console.log(data))
// si.get(BatteryInfo).then(data => console.log(data))
// si.get(OsInfo).then(data => console.log(data))
// si.get(DiskInfo).then(data => console.log(data))
// si.get(UsbInfo).then(data => console.log(data))
// si.get(PrinterInfo).then(data => console.log(data))
// si.get(AudioInfo).then(data => console.log(data))
// si.get(NetworkInfo).then(data => console.log(data))
// si.get(WifiInfo).then(data => console.log(data))
// si.get(BluetoothInfo).then(data => console.log(data))
// si.graphics().then(data => console.log(data));