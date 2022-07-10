function handleSubmit()
{
    alert(`Your Name: ${document.forms["registerForm"]["fname"].value}\n` + 
    `No of people: ${document.forms["registerForm"]["people"].value}\n` + 
    `Date: ${document.forms["registerForm"]["date"].value}\n` +
    `Message: ${document.forms["registerForm"]["msg"].value}`);
}