// Wait to run script until document loads:
document.addEventListener('DOMContentLoaded', () => {
    // Select both the pre and post click containers
    const onloadSection = document.querySelector('.container-onload');
    const postclickSection = document.querySelector('.container-postclick');

    // Convert a dollar amount to written words for check display
    const numberToWords = (amount) => {
        const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
            'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
            'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty',
            'sixty', 'seventy', 'eighty', 'ninety'];

        // Round dollars and cents down to nearest integer
        const dollars = Math.floor(amount);
        const cents = Math.round((amount - dollars) * 100);

        // Convert argument value to text value using the above arrays
        const convert = (n) => {
            if (n === 0) return '';
            if (n < 20) return ones[n];
            if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? '-' + ones[n % 10] : '');
            if (n < 1000) return ones[Math.floor(n / 100)] + ' hundred' + (n % 100 ? ' ' + convert(n % 100) : '');
            return convert(Math.floor(n / 1000)) + ' thousand' + (n % 1000 ? ' ' + convert(n % 1000) : '');
        };

        // Check to see if dollars is equivalent to zero or not
        let words = dollars === 0 ? 'zero' : convert(dollars);
        // Capitalize the first character in converted value
        words = words.charAt(0).toUpperCase() + words.slice(1);
        // Interpolate converted values to written worm
        return `${words} dollars and ${cents.toString().padStart(2, '0')} cents`;
    };

    const calculatePaycheck = () => {
        // Starting calculation variables
        const regularHours = 40;
        const overtimeHours = 12;
        const hourlyRate = 20;
        const overtimeRate = hourlyRate * 1.5;

        // Deduction rates
        const insurancePercentage = 0.1;
        const taxPercentage = 0.125;

        // Calculated Gross values
        const regularPay = regularHours * hourlyRate;
        const overtimePay = overtimeHours * overtimeRate;
        const grossPay = regularPay + overtimePay;

        // Calculated Net Values
        const insuranceDeduction = grossPay * insurancePercentage;
        const taxDeduction = grossPay * taxPercentage;
        const netPay = grossPay - (insuranceDeduction + taxDeduction);

        // Populate pay stub
        document.getElementById('regPay').textContent = regularPay.toFixed(2);
        document.getElementById('otPay').textContent = overtimePay.toFixed(2);
        document.getElementById('grossPay').textContent = grossPay.toFixed(2);
        document.getElementById('taxAmount').textContent = taxDeduction.toFixed(2);
        document.getElementById('insuranceAmount').textContent = insuranceDeduction.toFixed(2);
        document.getElementById('netPay').textContent = `$${netPay.toFixed(2)}`;

        // Populate check
        const writtenAmount = numberToWords(netPay);
        document.getElementById('checkWritten').textContent = `***${writtenAmount}***`;
        document.getElementById('checkAmount').textContent = `$${netPay.toFixed(2)}`;
    };

    // Fade transition handler
    const handleClick = () => {
        // Check to see if onload container is using the 'hidden' class
        if (!onloadSection.classList.contains('hidden')) {
            // Calculate values before transition
            calculatePaycheck();
            // Fade out onload section
            onloadSection.classList.add('fade-out');
            onloadSection.addEventListener('animationend', () => {
                onloadSection.classList.add('hidden');
                onloadSection.classList.remove('fade-out');
                // Fade in postclick section
                postclickSection.classList.remove('hidden');
                postclickSection.classList.add('fade-in');
                postclickSection.addEventListener('animationend', () => {
                    postclickSection.classList.remove('fade-in');
                }, { once: true });
            }, { once: true });
        } 
        else {
            // Fade out postclick section
            postclickSection.classList.add('fade-out');
            postclickSection.addEventListener('animationend', () => {
                postclickSection.classList.add('hidden');
                postclickSection.classList.remove('fade-out');
                // Fade in onload section
                onloadSection.classList.remove('hidden');
                onloadSection.classList.add('fade-in');
                onloadSection.addEventListener('animationend', () => {
                    onloadSection.classList.remove('fade-in');
                }, { once: true });
            }, { once: true });
        }
    };

    // Attach click listeners to both toggle buttons
    const buttons = document.querySelectorAll('.toggleButton');
    buttons.forEach((button) => {
        button.addEventListener('click', handleClick);
    });
});
