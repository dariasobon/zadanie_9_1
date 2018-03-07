//set variables 

var triangle1Area,
	triangle2Area,
	triangle3Area;


//set function getTriangleArea(a,h)

function getTriangleArea(a, h) {

	if (a<=0 || h<=0) { 

		return Nieprawidłowe dane;

	else {
		return a*h/2; 
	}
}

triangle1Area = getTriangleArea(10,6); // set value triangle1Area

console.log("Wartość zmiennej triangle1Area wynosi: " + triangle1Area + " cm²"); //call following order

triangle2Area =  getTriangleArea(10, -15);

console.log("Wartość zmiennej triangle2Area wynosi: " + triangle2Area + " cm²");

triangle3Area = getTriangleArea(50,0);

console.log("Wartość zmiennej triangle3Area wynosi: " + triangle3Area + " cm²");