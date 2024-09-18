document.addEventListener('DOMContentLoaded', function () {
    const chatLog = document.getElementById('chat-log');

    const ticketPriceAdult = 150;
    const ticketPriceChild = 120;

    const holidays = [
        "01/26", // Republic Day
        "08/15", // Independence Day
        "10/02", // Mahatma Gandhiji’s Birthday
        "03/08", // Holi Festival (Example date for 2024)
        "10/12", // Dussehra or Vijaya Dashami (Example date for 2024)
        "11/12", // Diwali (Example date for 2024)
        "04/10"  // Id-ul-fitr (Example date for 2024)
    ];

    // Start the process automatically
    startTicketBookingProcess();

    function startTicketBookingProcess() {
        showMessage("Welcome to The Indian Museum! Before we proceed with your ticket booking, please provide some details.", 'bot');
        
        // Show the user detail fields
        showUserDetailsForm();
    }

    function showUserDetailsForm() {
        showMessage('Please enter your details:', 'bot');

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.id = 'user-name';
        nameInput.placeholder = 'Full Name';
        applyInputStyles(nameInput);

        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.id = 'user-email';
        emailInput.placeholder = 'Email Address';
        applyInputStyles(emailInput);

        const phoneInput = document.createElement('input');
        phoneInput.type = 'tel';
        phoneInput.id = 'user-phone';
        phoneInput.placeholder = 'Phone Number';
        applyInputStyles(phoneInput);

        const submitDetailsBtn = document.createElement('button');
        submitDetailsBtn.textContent = 'Submit Details';
        submitDetailsBtn.addEventListener('click', function () {
            const name = document.getElementById('user-name').value;
            const email = document.getElementById('user-email').value;
            const phone = document.getElementById('user-phone').value;

            if (name && email && phone) {
                // Store or process user details as needed
                // For simplicity, we'll just log them here
                console.log(`User Details - Name: ${name}, Email: ${email}, Phone: ${phone}`);

                // Continue with the ticket booking process
                setTimeout(() => {
                    showDateSelection();
                }, 2000); // 2 seconds delay
            } else {
                showMessage("Please fill in all the details before proceeding.", 'bot');
            }
        });

        // Append the input fields and submit button to the chat log
        chatLog.appendChild(nameInput);
        chatLog.appendChild(emailInput);
        chatLog.appendChild(phoneInput);
        chatLog.appendChild(submitDetailsBtn);
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
    }

    function applyInputStyles(inputElement) {
        inputElement.style.border = '2px solid #ff9933'; /* Saffron */
        inputElement.style.borderRadius = '10px';
        inputElement.style.padding = '10px';
        inputElement.style.width = '80%';
        inputElement.style.outlineColor = '#138808'; /* Green */
        inputElement.style.borderImage = 'linear-gradient(to right, #ff9933, #ffffff, #138808) 1';
        inputElement.style.background = 'transparent'; /* Make the input background transparent */
        inputElement.style.color = 'black'; /* Make text black for better contrast */
        inputElement.style.position = 'relative'; /* Position relative for the dropdown to position correctly */
    }

    function showMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = sender;
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
    }

    function showDateSelection() {
        showMessage('Please select your preferred date for the visit (MM/DD/YYYY):', 'bot');
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.id = 'date-input';
        dateInput.addEventListener('change', handleDateSelection);

        // Append the date input to the chat log
        chatLog.appendChild(dateInput);
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
    }

    function handleDateSelection() {
        const selectedDate = new Date(this.value);
        const day = selectedDate.getDay();
        const monthDay = `${(selectedDate.getMonth() + 1).toString().padStart(2, '0')}/${selectedDate.getDate().toString().padStart(2, '0')}`;

        if (day === 1 || holidays.includes(monthDay)) {
            showMessage("The museum is closed on Mondays and public holidays. Please select another date.", 'bot');
        } else {
            showTimeSlotSelection();
        }
    }

    function showTimeSlotSelection() {
        showMessage('Please select your preferred time slot:', 'bot');
        const timeDropdown = document.createElement('select');
        timeDropdown.id = 'time-dropdown';

        const timeSlots = [
            "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", 
            "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
        ];

        timeSlots.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeDropdown.appendChild(option);
        });

        timeDropdown.addEventListener('change', showTicketQuantitySelection);

        // Append the time dropdown to the chat log
        chatLog.appendChild(timeDropdown);
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
    }

    function showTicketQuantitySelection() {
        showMessage('Please enter the number of tickets for adults and children:', 'bot');

        const adultInput = document.createElement('input');
        adultInput.type = 'number';
        adultInput.id = 'adult-tickets';
        adultInput.placeholder = 'Adults';

        const childInput = document.createElement('input');
        childInput.type = 'number';
        childInput.id = 'child-tickets';
        childInput.placeholder = 'Children';

        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Submit';
        submitBtn.addEventListener('click', calculateTotalPrice);

        // Append the inputs and submit button to the chat log
        chatLog.appendChild(adultInput);
        chatLog.appendChild(childInput);
        chatLog.appendChild(submitBtn);
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
    }

    function calculateTotalPrice() {
        const adultTickets = parseInt(document.getElementById('adult-tickets').value) || 0;
        const childTickets = parseInt(document.getElementById('child-tickets').value) || 0;

        const totalPrice = (adultTickets * ticketPriceAdult) + (childTickets * ticketPriceChild);
        showMessage(`Total Price: ₹${totalPrice}`, 'bot');

        showPaymentOption();
    }

    function showPaymentOption() {
        showMessage('Please click "Pay Now" to proceed with payment:', 'bot');

        const payButton = document.createElement('button');
        payButton.textContent = 'Pay Now';
        payButton.addEventListener('click', completeBooking);

        chatLog.appendChild(payButton);
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
    }

    function completeBooking() {
        showMessage('Payment successful! Your ticket has been booked successfully.', 'bot');

        const qrCode = document.createElement('img');
        qrCode.src = 'path_to_qr_code_image.png'; // Replace with the actual path to the QR code image
        qrCode.alt = 'QR Code';

        // Append the QR code to the chat log
        chatLog.appendChild(qrCode);
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to the bottom
    }
});
