   // https://bkuperberg.gitbook.io/chataigne-docs/scripting/scripting-reference/module-scripts
  var led_par_bri='win&A';
  var led_par_master_toogle='win&T';
  var led_par_R='win&R';
  var led_par_G='win&G';
  var led_par_B='win&B';
  var led_par_effect_index='win&FX';
  var led_par_effect_speed='win&SX';
  var led_par_effect_intentsy='win&IX';
  var led_par_fastled='win&FP';

function fullBri()
{
  sendValue(led_par_master_toogle+"="+255);
}

function noBri()
{
  sendValue(led_par_master_toogle+"="+0);
}
function masterMaker(mode)
{
  sendValue(led_par_master_toogle+"="+mode);
}

function setBri(value)
{
sendValue(led_par_bri+"="+parseInt(value*255));
}

function LightsOut()
{
  sendValue(0,led_par_bri);
}

function setRGB(valR,valG,valB)
{
  sendValue(led_par_R+"="+parseInt(valR*255));
  sendValue(led_par_G+"="+parseInt(valG*255));
  sendValue(led_par_B+"="+parseInt(valB*255)); 
}

function setEffect(valIndex,valSpeed,valIntensity)
{ 
  sendValue(led_par_effect_index+"="+valIndex);
  sendValue(led_par_effect_speed+"="+parseInt(valSpeed*255));
  sendValue(led_par_effect_intentsy+"="+parseInt(valIntensity*255)); 
}

function setFastLed(valfstIndex)
{
  sendValue(led_par_fastled+"="+valfstIndex); 
}

function sendValue(value)
{   
  local.sendGET(value);
}



   

  