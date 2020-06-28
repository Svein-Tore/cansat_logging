basic.forever(function () {
    IotLoRaNode.InitialiseRadio(
    "26011B21",
    "F700558E191AA00C8BF764C908273661",
    "F4E522420119B926D8BE466668EC7455",
    SpreadingFactors.Seven
    )
    IotLoRaNode.IotLoRaNode_chmask_eu(euFreqs.EU8681)
    basic.showIcon(IconNames.Happy)
    for (let index = 0; index < 14; index++) {
        IotLoRaNode.GPS(
        GPS.Latitude(),
        GPS.Longitude(),
        GPS.Altitude(),
        Channels.One
        )
        IotLoRaNode.loraTransmitPayload()
    }
    basic.pause(3000)
    control.reset()
})
