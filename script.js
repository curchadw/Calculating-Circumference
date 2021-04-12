
const calcGeometry = n =>{
  const pi = 3.14

  const getCircumference = n =>{
     let circum = 2*pi*n 
    
     return circum
  }

  const getArea = n =>{
    let area = pi*(Math.pow(n,2))
    
    return area
  }

  return[ `Area: ${getArea(n)}`,`Circum: ${getCircumference(n)}`]
}


console.log(calcGeometry(5))

