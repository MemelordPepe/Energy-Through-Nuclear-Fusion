#pragma strict
/**
 * Code Made by: Jonny
 * On 10/28/15
 */
 import UnityEngine.UI;
 import PublicVariables;
 public static var startvalue = 1;
 public var name = "Hydrogen";
 private UI.GUIText name;

function CallNameOfElement(x)
{
	var placeholderinitials = PublicVariables.CreatePeriodicElementDictionary("numbers")[x];
	return PublicVariables.CreatePeriodicElementDictionary("names")[placeholderinitials];
}


function Start () {
	var name.text = PublicVariables.CreatePeriodicElementDictionary('names')['H'];
}

function Update () {
	var name = CallNameOfElement(startvalue);
}
