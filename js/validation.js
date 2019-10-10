function validate() {
    /* formoje, on submit:
        - issitraukiame visa info
        - validuojame
        - if:
            - true -> duomenis perduodame kitai funkcijai
            - false -> rodome error'us 
    */
   let formData = {};
    const fields = document.querySelectorAll('form > .form-row');

    fields.forEach( formRow => {
        const name = formRow.querySelector('input').name;
        formData[name] = formRow.querySelector('input').value;
    });

    console.log(formData);
    
    
}