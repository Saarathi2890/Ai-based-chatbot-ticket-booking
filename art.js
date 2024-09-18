function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
        chatbotContainer.style.display = 'block'; // Show the chatbot container
    } else {
        chatbotContainer.style.display = 'none'; // Hide the chatbot container
    }
}

document.getElementById('chatbot-button').addEventListener('click', toggleChatbot);

document.getElementById('chatbot-container').style.display = 'none'; // Initial state hidden

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

    if (userMessage.toLowerCase().includes('get to the national gallery')) {
        response = 'You can get to the National Gallery by metrorail, bus, or car. See the "Getting Here" section for more details.';
    } else if (userMessage.toLowerCase().includes('wheelchair accessible')) {
        response = 'Yes, the National Gallery is wheelchair accessible. Please see the Accessibility section for more information.';
    } else if (userMessage.toLowerCase().includes('open')) {
        response = 'The National Gallery of Art East Building, West Building, and Sculpture Garden are open daily from 10:00 a.m. to 5:00 p.m. Closed on December 25 and January 1.';
    } else if (userMessage.toLowerCase().includes('admission')) {
        response = 'Admission to the National Gallery of Art is free for all visitors.';
    } else if (userMessage.toLowerCase().includes('shop hours')) {
        response = 'The Gallery Shops are open daily from 10:00 a.m. to 5:00 p.m. Closed on December 25 and January 1.';
    } else if (userMessage.toLowerCase().includes('checkroom')) {
        response = 'Yes, there is a checkroom available. See the Visitor Policies for details.';
    } else if (userMessage.toLowerCase().includes('place to eat')) {
        response = 'Yes, there are four Gallery Cafés where you can purchase a meal or snack. Outside food is not allowed in the dining areas or galleries.';
    } else if (userMessage.toLowerCase().includes('school group visit')) {
        response = 'We offer both in-person and virtual school tours. Please arrange your visit in advance.';
    } else if (userMessage.toLowerCase().includes('adult group visit')) {
        response = 'For groups of 15 or more, please schedule a group tour using the online form.';
    } else if (userMessage.toLowerCase().includes('permanent collections')) {
        response = 'The National Gallery\'s permanent collections range from Byzantine altarpieces to pop art. All collections can be explored online.';
    } else if (userMessage.toLowerCase().includes('artwork on view')) {
        response = 'You can find out if a particular artwork is currently on view using our Collection Search tool.';
    } else if (userMessage.toLowerCase().includes('current exhibitions')) {
        response = 'Please visit our Current Exhibitions page for details on what\'s on display.';
    } else if (userMessage.toLowerCase().includes('object information')) {
        response = 'Use our Collection Search to find detailed information about objects in the National Gallery\'s collection.';
    } else if (userMessage.toLowerCase().includes('artist information')) {
        response = 'Our Collection Search allows you to find biographical information on artists in the collection.';
    } else if (userMessage.toLowerCase().includes('image of artwork')) {
        response = 'You can download Open Access images directly from the object pages on our website.';
    } else if (userMessage.toLowerCase().includes('link to site')) {
        response = 'You may link to our site as long as the link does not imply an endorsement by or affiliation with the National Gallery of Art.';
    } else if (userMessage.toLowerCase().includes('conservation efforts')) {
        response = 'Visit our Conservation pages for more information on the National Gallery\'s conservation efforts.';
    } else if (userMessage.toLowerCase().includes('monetary value of art')) {
        response = 'The National Gallery does not provide monetary information on artworks. Contact the Art Dealers Association of America or the American Society of Appraisers for assistance.';
    } else if (userMessage.toLowerCase().includes('become a member')) {
        response = 'You can become a member online or by calling the Development Office at (202) 842-6450.';
    } else if (userMessage.toLowerCase().includes('make a donation')) {
        response = 'Make a secure, tax-deductible donation online or by calling the Development Office at (202) 842-6372.';
    } else if (userMessage.toLowerCase().includes('donate artwork')) {
        response = 'All gifts of art must be formally accepted by the Board of Trustees. Learn more about donating artwork on our website.';
    } else if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
        response = 'Hello! How can I assist you today?';
    } else if (userMessage.toLowerCase().includes('book tickets') || userMessage.toLowerCase().includes('book')) {
        response = 'You can book tickets through <a href="booking.html">BOOK NOW</a>';
    } else if (userMessage.toLowerCase().includes('date') || userMessage.toLowerCase().includes('dates')) {
        response = 'Yes, you can choose a specific date for your visit during the booking process.';
    } else if (userMessage.toLowerCase().includes('prices') || userMessage.toLowerCase().includes('price') || userMessage.toLowerCase().includes('amount') || userMessage.toLowerCase().includes('cost')) {
        response = 'Adult tickets are ₹${ticketPriceAdult} and child tickets are ₹${ticketPriceChild}.';
    } else if (userMessage.toLowerCase().includes('weekends') || userMessage.toLowerCase().includes('weekend') || userMessage.toLowerCase().includes('saturday')) {
        response = 'Yes, the museum is open on weekends.';
    } else if (userMessage.toLowerCase().includes('holidays') || userMessage.toLowerCase().includes('holiday') || userMessage.toLowerCase().includes('closed')) {
        response = 'The museum will only be closed on Monday.';
    } else if (userMessage.toLowerCase().includes('time') || userMessage.toLowerCase().includes('times')) {
        response = 'Available time slots are 10:00 AM, 11:00 AM, 12:00 PM, 01:00 PM, 02:00 PM, 03:00 PM, 04:00 PM, 05:00 PM.';
    } else if (userMessage.toLowerCase().includes('how many tickets') || userMessage.toLowerCase().includes('how many ticket')) {
        response = 'You can book any number of tickets at once.';
    } else if (userMessage.toLowerCase().includes('discounts') || userMessage.toLowerCase().includes('discount')) {
        response = 'No, there are no discounts for bookings.';
    } else if (userMessage.toLowerCase().includes('cancel') || userMessage.toLowerCase().includes('change')) {
        response = 'Yes, you can cancel or reschedule your booking up to one hour before your booked time.';
    } else if (userMessage.toLowerCase().includes('guide') || userMessage.toLowerCase().includes('guided tour')) {
        response = 'Yes, a guided tour is included with the ticket.';
    } else if (userMessage.toLowerCase().includes('advance') || userMessage.toLowerCase().includes('prebooking')) {
        response = 'It is recommended to book tickets in advance to avoid any inconvenience.';
    } else {
        response = 'Sorry, I did not understand that. Can you please rephrase?';
    }

    conversation.push({ bot: response });
    displayConversation();
}

function displayConversation() {
    chatbotMessages.innerHTML = '';
    conversation.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.className = msg.user ? 'user-message' : 'bot-message';
        messageElement.innerHTML = msg.user ? msg.user : msg.bot;
        chatbotMessages.appendChild(messageElement);
    });
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to the bottom
}
