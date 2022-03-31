input.onButtonPressed(Button.A, function () {
    Time = (RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) * 3600 + RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE) * 60 + RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND)) * 1000
    radio.sendNumber(Time)
    basic.showNumber(Time)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE) + ":" + RTC_DS1307.getTime(RTC_DS1307.TimeType.SECOND))
})
let Time = 0
radio.setGroup(1)
basic.forever(function () {
	
})
