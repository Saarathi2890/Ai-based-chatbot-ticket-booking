


function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
        chatbotContainer.style.display = 'block'; // Show the chatbot container
    } else {
        chatbotContainer.style.display = 'none'; // Hide the chatbot container
    }
}


document.getElementById('chatbot-button').addEventListener('click', toggleChatbot);


document.getElementById('chatbot-container').style.display = 'none';


const chatbotContainer = document.getElementById('chatbot-container');
const chatbotMessages = document.getElementById('chatbot-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

let conversation = [];


sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage !== '') {
        conversation.push({ user: userMessage });
        userInput.value = '';
        respondToUser();
    }
});


function respondToUser() {
    const userMessage = conversation[conversation.length - 1].user;
    let response = '';

 if (userMessage.toLowerCase().includes('hello')) {
        response = 'Hello! How can I assist you today?';
    }

 
 else if (userMessage.toLowerCase().includes('hi')) {
        response = 'Hello! How can I assist you today?';
    }
 else if (userMessage.toLowerCase().includes('book tickets')) {
        response = 'You can book tickets through  <a href="booking.html">BOOK NOW</a> ';
    }
else if (userMessage.toLowerCase().includes('book')) {
        response = 'You can book tickets through <a href="booking.html">BOOK NOW</a>';
    }

else if (userMessage.toLowerCase().includes('date')) {
        response = 'Yes, you can choose a specific date for your visit during the booking process.';
    }
else if (userMessage.toLowerCase().includes('dates')) {
        response = 'Yes, you can choose a specific date for your visit during the booking process.';
    }
else if (userMessage.toLowerCase().includes('prices')) {
        response = 'Adult tickets are ₹${ticketPriceAdult} and child tickets are ₹${ticketPriceChild}.';
    }
else if (userMessage.toLowerCase().includes('price')) {
        response = 'Adult tickets are ₹${ticketPriceAdult} and child tickets are ₹${ticketPriceChild}.';
    }
else if (userMessage.toLowerCase().includes('amount')) {
        response = 'Adult tickets are ₹${ticketPriceAdult} and child tickets are ₹${ticketPriceChild}.';
    }
else if (userMessage.toLowerCase().includes('cost')) {
        response = 'Adult tickets are ₹${ticketPriceAdult} and child tickets are ₹${ticketPriceChild}.';
    }
else if (userMessage.toLowerCase().includes('weekends')) {
        response = 'Yes, the museum is open on weekends.';
    }
else if (userMessage.toLowerCase().includes('weekend')) {
        response = 'Yes, the museum is open on weekends.';
    }
else if (userMessage.toLowerCase().includes('saturday')) {
        response = 'Yes, the museum is open on weekends.';
    }
else if (userMessage.toLowerCase().includes('holidays')) {
        response = 'The museum will only be closed on monday.';
    }
else if (userMessage.toLowerCase().includes('holiday')) {
        response = 'The museum will only be closed on monday.';
    }
else if (userMessage.toLowerCase().includes('closed')) {
        response = 'The museum will only be closed on monday.';
    }





else if (userMessage.toLowerCase().includes('time')) {
        response = 'Available time slots are 10:00 AM, 11:00 AM, 12:00 PM, 01:00 PM, 02:00 PM, 03:00 PM, 04:00 PM, 05:00 PM.';
    }
else if (userMessage.toLowerCase().includes('times')) {
        response = 'Available time slots are 10:00 AM, 11:00 AM, 12:00 PM, 01:00 PM, 02:00 PM, 03:00 PM, 04:00 PM, 05:00 PM.';
    }

else if (userMessage.toLowerCase().includes('how many tickets')) {
        response = 'You can book any number of tickets at once.';
    }
else if (userMessage.toLowerCase().includes('how many ticket')) {
        response = 'You can book any number of tickets at once.';
    }

else if (userMessage.toLowerCase().includes('discounts')) {
        response = 'No, there are no discounts for bookings.';
    }
else if (userMessage.toLowerCase().includes('discount')) {
        response = 'No, there are no discounts for bookings.';
    }

else if (userMessage.toLowerCase().includes('cancel')) {
        response = 'Yes, you can cancel or reschedule your booking up to one hour before your booked time';
    }
else if (userMessage.toLowerCase().includes('change')) {
        response = 'Yes, you can cancel or reschedule your booking up to one hour before your booked time';
    }

else if (userMessage.toLowerCase().includes('guide')) {
        response = 'Yes, a guided tour is included with the ticket.';
    }
else if (userMessage.toLowerCase().includes('guided tour')) {
        response = 'Yes, a guided tour is included with the ticket.';
    }

else if (userMessage.toLowerCase().includes('advance')) {
        response = 'Yes, it is recommended to book tickets in advance.';
    }
else if (userMessage.toLowerCase().includes('prebooking')) {
        response = 'Yes, it is recommended to book tickets in advance.';
    }

else if (userMessage.toLowerCase().includes('display')) {
        response = 'No, there are no special exhibitions currently on display.';
    }
else if (userMessage.toLowerCase().includes('exhibitions')) {
        response = 'No, there are no special exhibitions currently on display.';
    }

else if (userMessage.toLowerCase().includes('accessible')) {
        response = 'Yes, the museum is accessible for people with disabilities.';
    }
else if (userMessage.toLowerCase().includes('opening hours')) {
        response = 'The museum is open from 10:00 AM to 5:00 PM.';
    }
else if (userMessage.toLowerCase().includes('opening hour')) {
        response = 'The museum is open from 10:00 AM to 5:00 PM.';
    }
else if (userMessage.toLowerCase().includes('timing')) {
        response = 'The museum is open from 10:00 AM to 5:00 PM.';
    }


else if (userMessage.toLowerCase().includes('different ticket price')) {
        response = 'Yes, child tickets are ₹${ticketPriceChild} and adult tickets are ₹${ticketPriceAdult}.';
    }
else if (userMessage.toLowerCase().includes('different')) {
        response = 'Yes, child tickets are ₹${ticketPriceChild} and adult tickets are ₹${ticketPriceAdult}.';
    }

else if (userMessage.toLowerCase().includes('multiple days')) {
        response = 'Yes, you can book tickets for multiple days, but each booking must be for a single day.';
    }
else if (userMessage.toLowerCase().includes('day')) {
        response = 'Yes, you can book tickets for multiple days, but each booking must be for a single day.';
    }

else if (userMessage.toLowerCase().includes('credit card')) {
        response = 'Yes, we accept credit card payments.';
    }
else if (userMessage.toLowerCase().includes('credit cards')) {
        response = 'Yes, we accept credit card payments.';
    }

else if (userMessage.toLowerCase().includes('late')) {
        response = 'If you’re late, unfortunately, you won’t be allowed to enter.';
    }
else if (userMessage.toLowerCase().includes('rules')) {
        response = 'Yes, some basic rules include no photography, maintaining silence, and no food or drinks inside the museum.';
    }
else if (userMessage.toLowerCase().includes('rule')) {
        response = 'Yes, some basic rules include no photography, maintaining silence, and no food or drinks inside the museum.';
    }
else if (userMessage.toLowerCase().includes('restrictions')) {
        response = 'Yes, some basic rules include no photography, maintaining silence, and no food or drinks inside the museum.';
    }
else if (userMessage.toLowerCase().includes('restriction')) {
        response = 'Yes, some basic rules include no photography, maintaining silence, and no food or drinks inside the museum.';
    }




else if (userMessage.toLowerCase().includes('print')) {
        response = 'You can show your ticket on your phone, no need to print it.';
    }
else if (userMessage.toLowerCase().includes('show')) {
        response = 'You can show your ticket on your phone, no need to print it.';
    }

else if (userMessage.toLowerCase().includes('parking')) {
        response = 'Yes, parking is available at the museum with a nominal charge.';
    }
else if (userMessage.toLowerCase().includes('photo')) {
        response = 'No, taking photo inside museum is restricted.';
    }
else if (userMessage.toLowerCase().includes('photos')) {
        response = 'No, taking photo inside museum is restricted.';
    }
else if (userMessage.toLowerCase().includes('photography')) {
        response = 'No, taking photo inside museum is restricted.';
    }





else {
        response = 'I didn\'t understand that. Can you please rephrase your question?';
    }

    conversation.push({ bot: response });
    displayConversation();
}


function displayConversation() {
    chatbotMessages.innerHTML = '';
    conversation.forEach((message) => {
        const messageHTML = `
            <div class="${message.user ? 'user-message' : 'bot-message'}">
                ${message.user ? message.user : message.bot}
            </div>
        `;
        chatbotMessages.innerHTML += messageHTML;
    });
}

