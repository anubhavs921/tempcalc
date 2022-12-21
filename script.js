const temprature = ()=>{
  let inp = document.getElementById('inputDegree').value;
  // console.log(inp);
  
  const tempSelect = document.getElementById('unit');
  const valueTemp = unit.options[tempSelect.selectedIndex].value;
  // console.log(valueTemp);
  const celToFah = (cel)=>{
    let fahrenheit = Math.round((cel * 9/5) + 32);
    return fahrenheit;
  }
  const fahToCel = (fahr) => {
    let celsious = Math.round((fahr - 32) * 5/9);
    return celsious;
  }
  const kelToCel = (kel) => {
    let celsious = Math.round(kel -273.15);
    return celsious;
  }
  let result;

  if(valueTemp == 'Celsious'){
    result = celToFah(inp);
    document.getElementById('resultContainer').innerHTML = `${result}&deg;Fahrenheit`;
  }else if(valueTemp == 'Fahrenheit'){
    result = fahToCel(inp);
    document.getElementById('resultContainer').innerHTML = `${result}&deg;Celsious`;
  }
  else{
    result = kelToCel(inp);
    document.getElementById('resultContainer').innerHTML = `${result}&deg;Celsious`;
  }

}