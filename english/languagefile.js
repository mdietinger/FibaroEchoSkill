module.exports.STATE_RESPONSES = {
    NoHelpYet:"There's no help yet",
    DoSomething:"Pleae tell me what to do or ask me a question.",
    Bye:"Goodbye",
    Welcome:"Welcome to your smart home",
    NoDeviceFound:"I couldn't find the device you requested",
    SceneNotFound:"I couldn't find the scene you requested",
    SceneStarted:"Scene $Szenename started",
    RoomNotFound:"I couldn't find the room $Room in the system",
    NoShuttersInRoom:"I couldn't find any blinds in the room $Room.",
    Temperature:"Temperature",
    Degrees:"Degrees",
    Luminance:"Luminance",
    Lux:"Lux",
    Percent:"Percent",
    Humidity:"Humidity",
    NoSensorFound:"I couldn't find any sensor in the room $Room!",
    SensorState:"The $SensorTyp value in the room $Room is $value $Unit.",
    SensorStateMinMax:"The $SensorTyp value in the room $Room is between $value1 $Unit and $value2 $Unit. The avarage value is $value3 $Unit.",
    ThermostatCurrent:"The thermostat is set to $value degrees.",
    SwitchOn:"$Device is turned on",
    SwitchOnPower:"$Device is turned on and consumes $value Watt.",
    SwitchIsOff:'$Device is turned off.',
    SwitchAskOn:"Do you want to turn it on? Say yes, no, or switch $Device on.",
    SwitchAskOff:"Do you want to turn it off? Say yes, no, or switch $Device off.",
    SwitchedOff:"Device switched off.",
    SwitchedOn:"Device switched on.",
    NewStateShutters:"Shutters set.",
    NewStateShuttersInRoom:"Shutters in the room $Room set.",
    NoNameGiven:"No name specified.",
    NoShutterFound:"I couldn't find any shutters named $Shutter.",
    NoLightsFound:"I couldn't find any lights.",
    NoLightsFoundInRoom:"I couldn't find any lights in the room $Room.",
    NoLightsFoundInRoomAndRoom2:"I couldn't find any lights in the rooms $Room1 and $Room2.",
    DimValueIncorrect:"Dim value is incorrect. Please try again",
    DimLight:"Lights dimmed to $value percent.",
    TemperatureSet:"Thermostat in the room $Room set to $value degrees.",
    ForTime:"For $value hours",
    LambdaError:"The Lambda service encountered an error: ",
    Warm:"Warm",
    Humid:"Humid",
    Bright:"Bright",
    AllInState:"All $Objects are $status.",
    NothingInState:"None of the $Objects is $status.",
    ObjectsInState:"The following $Objects is $status: ",
    LightsSwitchedOff:"Lights switched off",
    LightsSwitchedOn:"Lights switched on",
    On:"On",
    Off:"Off",
    All:"All",
    Up:"Up,Open",
    Down:"Down",
    OpenTyps:"Up,Open,Turned On",
    LightTyps:"Light,Lamp,Bulb",
    ShutterTyps:'Blinds,Shutters',
    Shutter:'Shutter',
    Shutter2:'Blinds',
    DoorTyps:"Door,Doors",
    Door:"Door",
    Window:"Window",
    Doors:"Doors",
    Windows:"Windows",
    Lights:"Lights",
    Shutters:"Shutters",
    DoorsAndWindows:"Doors and Windows",
    WindowTyps:"Window",
    DoorWindowTyps:"Windows Doors, Doors Windows, Windows and Doors, Doors and Windows, Door Window, Window Door",
    Lamp:"Lamp",
    Light:"Light",
    Dimmer:"Dimmer",
    NoGlobalVariableFound:"I couldn't find global variable $value.",
    PossibleGlobalValues:"Possible global values are:",
    GlobalValue:"The value of the variable $global is $value.",
    ChangeGlobalValue:"Do you want to change the value?",
    IllegalValueForGlobalVariable:"The $value is the invalid value for global variable $global!",
    GlobalVariableSet: "The global variable $global changed from $oldvalue to $newvalue",
    ValuesAreIdentical:"The values are the same. No changes made.",
    VirtualModuleNotFound:"Could not find the virtual module named $name.",
    PressedButton:"Button $button in module $name pressed",
    ButtonNotFound:"Button $name not found.",
    SliderNotFound:"Slider $name not found.",
    SetSlider:"Slider $slider in module $name set to $value.",
    DeviceState:"$name is $status",
    Open:"Open",
    Close:"Close",
    Yes:"Yes",
    No:"No",
    AllClosed:"All $Type are closed.",
    AllOpen:"All $Type are opened.",
    TemperatureInvalid:"Temperature could not be detected or has an invalid value.",
    InvalidValue:"An invalid value was detected",
    UnknownCommand:"The command has not been recognized.",
    NoThermostatFound:"I couldn't find any thermostat in the room $Room.",
    ErrorInAPI:"An error occurred while using the API.",
    DeviceInRoom:"$Device in the room $Room",
    DoorLock:"Door locked",
    RemovableWords:"the an a",
    IllegalPercentValue:"Invalid percentage value",
    DoorOpen:"Door opened.",
    DoorClosed:"Door closed.",
    AskDoorOpen:"Do you want to unlock the $Device?",
    AskDoorClose:"Do you want to lock the $Device?",
    PowerUsage:"The power consumption of the $Device is $value Watt.",
    RGBLight:"The colors are: $red red, $green green, $blue blue, and $white white.",
    RGBProgram:"The program number $value started.",
    RGBProgramRunning:"The program number $value is running.",
    RGBValueRedSet:"RGB value for red set.",
    RGBValueGreenSet:"RGB value for green set.",
    RGBValueBlueSet:"RGB value for blue set.",
    RGBValueWhiteSet:"RGB value for white set.",
    RGBValueBrightnessSet:"Brightness value set.",
    NoRGBProgramRunning:"Currently, no program is running.",
    Colors:"Colors",
    MovementInRoom:"Movement in the room $Room detected.",
    NoMovementInRoom:"No movement in the room $Room detected.",
    LastMovement:"The last movement detected at $Time $Unit.",
    NoMovementsFound:"No movement detected.",
    MovementsInRooms:"Movement detected in the following rooms:",
    SECONDS:"Seconds",
    MINUTES:"Minutes",
    HOURS:"Hours",
    DAYS:"Days",
    AlarmActive:"Alarm is active.",
    ArmedModules:"The following devices are armed:",
    AlarmInactive:"Alarm is inactive. Devices are unarmed.",
    SceneOutput:"Output of the scene is: $Output.",
    NoSceneOutput:"Scene $Name has no output."
};

module.exports.GLOBAL_TRANSLATE = {
    "living room temperature" : "CCLivingRoomTemp",
    "bedroom temperature" : "CCBedroomTemp"
};

module.exports.REPLACE_TEXT = {LR:"Living Room",DR:"Dining Room",OR:"Office Room",FL:"Floor",NU:"Nursery",GR:"Guest Room",GF:"Ground Floor", WG:"Winter Garden",BR:"Bedroom",HA:"Hall",TR:"Terrace",BA:"Balcony"};

