radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    radio.receivedPacket(RadioPacketProperty.SignalStrength) + 128,
    86
    )
})
radio.setFrequencyBand(1)
