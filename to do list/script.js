document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('number-input');
    const printButton = document.getElementById('print-button');
    const output = document.getElementById('output');

    printButton.addEventListener('click', () => {
        const number = numberInput.value;
        output.textContent = `You entered: ${number}`;
    });
});
