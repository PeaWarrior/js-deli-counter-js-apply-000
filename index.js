function takeANumber(line, joined){
  line.push(joined)
  return "Welcome, " + joined + ". You are number " + line.length + " in line."
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    let serving = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + serving + "!"
  }
}
