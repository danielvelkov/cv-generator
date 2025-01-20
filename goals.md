Create an app that allows you to create a CV.

The main page will have two parts:
- input: this is where editing of the different sections happens
- display: this is where the changes will be displayed after the user submits them

3 sections, where each section info will be displayed if the field is filled and correct:

- General info: things like First and Last name(required), 
email, phone, github or linkedin, profile image(all optional)
- Educational accomplishments: list of all graduated schools/universities. Info about them will include name, title of study and date of study(all required)
- Work experience: list of all companies the user has worked for. Info about each will include: company title (required), position title (required), list of responsibilities(optional) and the date from and until they worked there (required)

In the section each field will be marked if its required or not.
Each section will have a submit and edit button.
When they submit, the section will be displayed appropriately in the CV
A section's submission can be skipped but the order of the CV should remain like this:

1. General info
2. Eduction
3. Work

When the page is loaded, Each available section for adding will be presented in a list next to the empty CV.
To add a section the user will click 'Add'. This will expand the selected item section like an accordion and show the input fields and the submit button.
After adding it, the 'Add' button  will be hidden and the user will have the option to 'Remove' the section entirely.

Each section will remember its fields after being submitted. To edit a section after being added, the user will be able to click the 'Edit' button which will appear next to 'Remove'.

Only 1 section will be expanded at a time. When you click 'Add' or 'Edit' the focus will be changed and the appropriate section expanded.