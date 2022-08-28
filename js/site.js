//Get the string from the user
function getString()
{
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}

//Reverse the string
function reverseString(userString)
{
    let revString = [];

    //reverse a string
    for(let i = userString.length - 1; i >= 0; i--)
    {
        revString += userString[i];
    }

    return revString;
}

//Display the reversed string to the user
function displayString(revString)
{
    //write to the page
    document.getElementById("msg").innerHTML = `Your string is: ${revString}`;

    //show alert box
    document.getElementById("alert").classList.remove("invisible");
}