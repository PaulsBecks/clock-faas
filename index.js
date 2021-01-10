const main = async (req, res) => {
    const d = new Date()
    const localDateString = d.toLocaleString('de-DE', { timeZone: 'Europe/Berlin', hour12: false })
    const [hours, minutes] = localDateString.split(", ")[1].split(":")
    text = " " + hours + ":" + minutes
    symbol = "0111111010001001100010011000100110010001101000011000000101111110"
    console.log("Current time " + text)
    res.json({ text, symbol })
}

module.exports = main

