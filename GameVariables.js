/**
 * Code Made by: Jonny
 * On 10/28/15
 */
function CreatePeriodicElementDictionary(x) {
if (x == 'chars'){
	var elements = new Array();
	elements['H'] = 1;elements['He'] = 2;elements['Li'] = 3;elements['Be'] = 4;elements['B'] = 5;elements['C'] = 6;
	elements['N'] = 7;elements['O'] = 8;elements['F'] = 9;elements['Ne'] = 10;elements['Na'] = 11;elements['Mg'] = 12;
	elements['Al'] = 13;elements['Si'] = 14;elements['P'] = 15;elements['S'] = 16;elements['Cl'] = 17;elements['Ar'] = 18;
	elements['K'] = 19;elements['Ca'] = 20;elements['Sc'] = 21;elements['Ti'] = 22;elements['V'] = 23;elements['Cr'] = 24;
	elements['Mn'] = 25;elements['Fe'] = 26;elements['Co'] = 27;elements['Ni'] = 28;elements['Cu'] = 29;elements['Zn'] = 30;
	elements['Ga'] = 31;elements['Ge'] = 32;elements['As'] = 33;elements['Se'] = 34;elements['Br'] = 35;elements['Kr'] = 36;
	elements['Rb'] = 37;elements['Sr'] = 38;elements['Y'] = 39;elements['Zr'] = 40;elements['Nb'] = 41;elements['Mo'] = 42;
	elements['Tc'] = 43;elements['Ru'] = 44;elements['Rh'] = 45;elements['Pd'] = 46;elements['Ag'] = 47;elements['Cd'] = 48;
	elements['In'] = 49;elements['Sn'] = 50;elements['Sb'] = 51;elements['Te'] = 52;elements['I'] = 53;elements['Xe'] = 54;
	elements['Cs'] = 55;elements['Ba'] = 56;elements['La'] = 57;elements['Ce'] = 58;elements['Pr'] = 59;elements['Nd'] = 60;
	elements['Pm'] = 61;elements['Sm'] = 62;elements['Eu'] = 63;elements['Gd'] = 64;elements['Tb'] = 65;elements['Dy'] = 66;
	elements['Ho'] = 67;elements['Er'] = 68;elements['Tm'] = 69;elements['Yb'] = 70;elements['Lu'] = 71;elements['Hf'] = 72;
	elements['Ta'] = 73;elements['W'] = 74;elements['Re'] = 75;elements['Os'] = 76;elements['Ir'] = 77;elements['Pt'] = 78;
	elements['Au'] = 79;elements['Hg'] = 80;elements['Tl'] = 81;elements['Pb'] = 82;elements['Bi'] = 83;elements['Po'] = 84;
	elements['At'] = 85;elements['Rn'] = 86;elements['Fr'] = 87;elements['Ra'] = 88;elements['Ac'] = 89;elements['Th'] = 90;
	elements['Pa'] = 91;elements['U'] = 92;elements['Np'] = 93;elements['Pu'] = 94;elements['Am'] = 95;elements['Cm'] = 96;
	elements['Bk'] = 97;elements['Cf'] = 98;elements['Es'] = 99;elements['Fm'] = 100;elements['Md'] = 101;elements['No'] = 102;
	elements['Lr'] = 103;elements['Rf'] = 104;elements['Db'] = 105;elements['Sg'] = 106;elements['Bh'] = 107;elements['Hs'] = 108;
	elements['Mt'] = 109;elements['Ds'] = 110;elements['Rg'] = 111;elements['Cn'] = 112;elements['Uut'] = 113;elements['Fl'] = 114;
	return elements
}
else if (x == 'numbers') {
	var elementsN = new Array();
	elementsN[1] = 'H';elementsN[2] = 'He';elementsN[3] = 'Li';elementsN[4] = 'Be';elementsN[5] = 'B';elementsN[6] = 'C';
	elementsN[7] = 'N';elementsN[8] = 'O';elementsN[9] = 'F';elementsN[10] = 'Ne';elementsN[11] = 'Na';elementsN[12] = 'Mg';
	elementsN[13] = 'Al';elementsN[14] = 'Si';elementsN[15] = 'P';elementsN[16] = 'S';elementsN[17] = 'Cl';elementsN[18] = 'Ar';
	elementsN[19] = 'K';elementsN[20] = 'Ca';elementsN[21] = 'Sc';elementsN[22] = 'Ti';elementsN[23] = 'V';elementsN[24] = 'Cr';
	elementsN[25] = 'Mn';elementsN[26] = 'Fe';elementsN[27] = 'Co';elementsN[28] = 'Ni';elementsN[29] = 'Cu';elementsN[30] = 'Zn';
	elementsN[31] = 'Ga';elementsN[32] = 'Ge';elementsN[33] = 'As';elementsN[34] = 'Se';elementsN[35] = 'Br';elementsN[36] = 'Kr';
	elementsN[37] = 'Rb';elementsN[38] = 'Sr';elementsN[39] = 'Y';elementsN[40] = 'Zr';elementsN[41] = 'Nb';elementsN[42] = 'Mo';
	elementsN[43] = 'Tc';elementsN[44] = 'Ru';elementsN[45] = 'Rh';elementsN[46] = 'Pd';elementsN[47] = 'Ag';elementsN[48] = 'Cd';
	elementsN[49] = 'In';elementsN[50] = 'Sn';elementsN[51] = 'Sb';elementsN[52] = 'Te';elementsN[53] = 'I';elementsN[54] = 'Xe';
	elementsN[55] = 'Cs';elementsN[56] = 'Ba';elementsN[57] = 'La';elementsN[58] = 'Ce';elementsN[59] = 'Pr';elementsN[60] = 'Nd';
	elementsN[61] = 'Pm';elementsN[62] = 'Sm';elementsN[63] = 'Eu';elementsN[64] = 'Gd';elementsN[65] = 'Tb';elementsN[66] = 'Dy';
	elementsN[67] = 'Ho';elementsN[68] = 'Er';elementsN[69] = 'Tm';elementsN[70] = 'Yb';elementsN[71] = 'Lu';elementsN[72] = 'Hf';
	elementsN[73] = 'Ta';elementsN[74] = 'W';elementsN[75] = 'Re';elementsN[76] = 'Os';elementsN[77] = 'Ir';elementsN[78] = 'Pt';
	elementsN[79] = 'Au';elementsN[80] = 'Hg';elementsN[81] = 'Tl';elementsN[82] = 'Tb';elementsN[83] = 'Pb';elementsN[84] = 'Bi';
	elementsN[85] = 'Po';elementsN[86] = 'At';elementsN[87] = 'Rn';elementsN[88] = 'Fr';elementsN[89] = 'Ac';elementsN[90] = 'Th';
	elementsN[91] = 'Pa';elementsN[92] = 'U';elementsN[93] = 'Np';elementsN[94] = 'Pu';elementsN[95] = 'Am';elementsN[96] = 'Cm';
	elementsN[97] = 'Bk';elementsN[98] = 'Cf';elementsN[99] = 'Es';elementsN[100] = 'Fm';elementsN[101] = 'Md';elementsN[102] = 'No';
	elementsN[103] = 'Lr';elementsN[104] = 'Rf';elementsN[105] = 'Db';elementsN[106] = 'Sg';elementsN[107] = 'Bh';elementsN[108] = 'Hs';
	elementsN[109] = 'Mt';elementsN[110] = 'Ds';elementsN[111] = 'Rg';elementsN[112] = 'Cn';elementsN[113] = 'Uut';elementsN[114] = 'Fl';
	return elementsN
}
else if(x=='names'){
	var elementsMemes = new Array();
	elementsMemes['H'] = "Hydrogen";elementsMemes['He'] = "Heilum";elementsMemes['Li'] = "Lithium";elementsMemes['Be'] = "Beryllium";elementsMemes['B'] = "Boron";elementsMemes['C'] = "Carbon";
	elementsMemes['N'] = "Nitrogen";elementsMemes['O'] = "Oxygen";elementsMemes['F'] = "Fluorine";elementsMemes['Ne'] = "Neon";elementsMemes['Na'] = "Sodium";elementsMemes['Mg'] = "Magnesium";
	elementsMemes['Al'] = "Aluminium";elementsMemes['Si'] = "Silicon";elementsMemes['P'] = "Phosphorus";elementsMemes['S'] = "Sulfur";elementsMemes['Cl'] = "Chlorine";elementsMemes['Ar'] = "Argon";
	elementsMemes['K'] = "Potassium";elementsMemes['Ca'] = "Calcium";elementsMemes['Sc'] = "Scandium";elementsMemes['Ti'] = "Titanium";elementsMemes['V'] = "Vanadium";elementsMemes['Cr'] = "Chromium";
	elementsMemes['Mn'] = "Manganese";elementsMemes['Fe'] = "Iron";elementsMemes['Co'] = "Cobalt";elementsMemes['Ni'] = "Nickel";elementsMemes['Cu'] = "Copper";elementsMemes['Zn'] = "Zinc";
	elementsMemes['Ga'] = "Gallium";elementsMemes['Ge'] = "Germanium";elementsMemes['As'] = "Arsenic";elementsMemes['Se'] = "Selenium";elementsMemes['Br'] = "Bromine";elementsMemes['Kr'] = "Krypton";
	elementsMemes['Rb'] = "Rubidium";elementsMemes['Sr'] = "Strontium";elementsMemes['Y'] = "Yttrium";elementsMemes['Zr'] = "Zirconium";elementsMemes['Nb'] = "Niobium";elementsMemes['Mo'] = "Molybdenum";
	elementsMemes['Tc'] = "Technetium";elementsMemes['Ru'] = "Ruthenium";elementsMemes['Rh'] = "Rhodium";elementsMemes['Pd'] = "Palladium";elementsMemes['Ag'] = "Silver";elementsMemes['Cd'] = "Cadmium";
	elementsMemes['In'] = "Indium";elementsMemes['Sn'] = "Tin";elementsMemes['Sb'] = "Antimony";elementsMemes['Te'] = "Tellurium";elementsMemes['I'] = "Iodine";elementsMemes['Xe'] = "Xenon";
	elementsMemes['Cs'] = "Caesium";elementsMemes['Ba'] = "Barium";elementsMemes['La'] = "Lanthanum";elementsMemes['Ce'] = "Cerium";elementsMemes['Pr'] = "Praseodymium";elementsMemes['Nd'] = "Neodymium";
	elementsMemes['Pm'] = "Promethium";elementsMemes['Sm'] = "Samarium";elementsMemes['Eu'] = "Europium";elementsMemes['Gd'] = "Gadolinium";elementsMemes['Tb'] = "Terbium";elementsMemes['Dy'] = "Dysprosium";
	elementsMemes['Ho'] = "Holmium";elementsMemes['Er'] = "Erbium";elementsMemes['Tm'] = "Thulium";elementsMemes['Yb'] = "Ytterbium";elementsMemes['Lu'] = "Lutetium";elementsMemes['Hf'] = "Hafnium";
	elementsMemes['Ta'] = "Tantalum";elementsMemes['W'] = "Tungsten";elementsMemes['Re'] = "Rhenium";elementsMemes['Os'] = "Osmium";elementsMemes['Ir'] = "Irdium";elementsMemes['Pt'] = "Platinum";
	elementsMemes['Au'] = "Gold";elementsMemes['Hg'] = "Mercury";elementsMemes['Tl'] = "Thallium";elementsMemes['Pb'] = "Lead";elementsMemes['Bi'] = "Bismuth";elementsMemes['Po'] = "Polonium";
	elementsMemes['At'] = "Astatine";elementsMemes['Rn'] = "Radon";elementsMemes['Fr'] = "Francium";elementsMemes['Ra'] = "Radium";elementsMemes['Ac'] = "Actinium";elementsMemes['Th'] = "Thorium";
	elementsMemes['Pa'] = "Protactinium";elementsMemes['U'] = "Uranium";elementsMemes['Np'] = "Neptunium";elementsMemes['Pu'] = "Plutonium";elementsMemes['Am'] = "Americium";elementsMemes['Cm'] = "Curium";
	elementsMemes['Bk'] = "Berkelium";elementsMemes['Cf'] = "Californium";elementsMemes['Es'] = "Einsteinium";elementsMemes['Fm'] = "Fermium";elementsMemes['Md'] = "Mendelevium";elementsMemes['No'] = "Nobelium";
	elementsMemes['Lr'] = "Lawrencium";elementsMemes['Rf'] = "Rutherfordium";elementsMemes['Db'] = "Dubnium";elementsMemes['Sg'] = "Seaborgium";elementsMemes['Bh'] = "Bohrium";elementsMemes['Hs'] = "Hassium";
	elementsMemes['Mt'] = "Meitnerium";elementsMemes['Ds'] = "Darmstadtium";elementsMemes['Rg'] = "Roentgenium";elementsMemes['Cn'] = "Copernicium";elementsMemes['Uut'] = "Ununtrium";elementsMemes['Fl'] = "Flerovium";
	return elementsMemes
	
}
	
}
function RandomNumberOnPeriodicTable()
{
	var randominterger = Math.floor((Math.random() * 100) + 14);
	alert(randominterger)
	return randominterger
}
function CallRandomElement(x,y)
{
	alert(x[y]);
	return x[y];
}
function CallNameFromRandomElement(u,x,y,z,w)
{
	var h = u(x(y),w());
	alert(x(z)[h]);
	return x(z)[h];
}
CallNameFromRandomElement(CallRandomElement,CreatePeriodicElementDictionary,'numbers','names',RandomNumberOnPeriodicTable);


/* Ignore This For Now --->
<!DOCTYPE html>
<html>
<body>
<canvas id="myCanvas" width="300" height="150" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>
<script>
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.textAlign="center"; 
ctx.fillText("Hello World",100,75);
ctx.closePath();
ctx.stroke();
ctx.clear();
ctx.beginPath();
ctx.translate(50,0);
ctx.arc(100, 75, 50, 0,  2* Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();
ctx.stroke();
</script> 
</body>
</html>
*/
