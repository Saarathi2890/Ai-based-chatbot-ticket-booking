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
else if (userMessage.toLowerCase().includes('hai')) {
        response = 'Hello! How can I assist you today?';
    }

 else if (userMessage.toLowerCase().includes('book tickets')) {
        response = 'You can book tickets through the museum’s official website <a href="booking.html">BOOK NOW</a>  or at the museum entrance.';
    } 
 else if (userMessage.toLowerCase().includes('book ticket')) {
        response = 'You can book tickets through the museum’s official website <a href="booking.html">BOOK NOW</a>  or at the museum entrance.';
    } 
else if (userMessage.toLowerCase().includes('book')) {
        response = 'You can book tickets through the museum’s official website <a href="booking.html">BOOK NOW</a>  or at the museum entrance.';
    } 

else if (userMessage.toLowerCase().includes('rules')) {
        response = 'Some basic rules include wearing comfortable shoes, following photography restrictions, and setting aside enough time to explore.';
    }
else if (userMessage.toLowerCase().includes('rule')) {
        response = 'Some basic rules include wearing comfortable shoes, following photography restrictions, and setting aside enough time to explore.';
    }
else if (userMessage.toLowerCase().includes('restriction')) {
        response = 'Some basic rules include wearing comfortable shoes, following photography restrictions, and setting aside enough time to explore.';
    }
else if (userMessage.toLowerCase().includes('restrictions')) {
        response = 'Some basic rules include wearing comfortable shoes, following photography restrictions, and setting aside enough time to explore.';
    }


 else if (userMessage.toLowerCase().includes('hire')) {
        response = 'If you want to hire the museum, you must strictly adhere to the rules, or you may be fined Rs. 10,000.';
    }

 else if (userMessage.toLowerCase().includes('exhibit')) {
        response = 'To exhibit sales products, you must get permission from the authorities.';
    }
else if (userMessage.toLowerCase().includes('sale')) {
        response = 'To exhibit sales products, you must get permission from the authorities.';
    }
 else if (userMessage.toLowerCase().includes('photography')) {
        response = 'Photography may be restricted in some galleries, so please follow the guidelines provided by the museum authorities.';
    }
else if (userMessage.toLowerCase().includes('photos')) {
        response = 'Photography may be restricted in some galleries, so please follow the guidelines provided by the museum authorities.';
    }
else if (userMessage.toLowerCase().includes('photo')) {
        response = 'Photography may be restricted in some galleries, so please follow the guidelines provided by the museum authorities.';
    }


 else if (userMessage.toLowerCase().includes('musical program')) {
        response = 'To conduct a musical program, you must obtain a NOC from "The Indian Performing Right Society Ltd".';
    }
else if (userMessage.toLowerCase().includes('musical')) {
        response = 'To conduct a musical program, you must obtain a NOC from "The Indian Performing Right Society Ltd".';
    }
else if (userMessage.toLowerCase().includes('program')) {
        response = 'To conduct a musical program, you must obtain a NOC from "The Indian Performing Right Society Ltd".';
    }


 else if (userMessage.toLowerCase().includes('time')) {
        response = 'The museum is open from 9:30 AM to 5:00 PM. It’s closed on Fridays and national holidays.';
    } 
 else if (userMessage.toLowerCase().includes('times')) {
        response = 'The museum is open from 9:30 AM to 5:00 PM. It’s closed on Fridays and national holidays.';
    }
else if (userMessage.toLowerCase().includes('close')) {
        response = 'The museum is open from 9:30 AM to 5:00 PM. It’s closed on Fridays and national holidays.';
    } 
else if (userMessage.toLowerCase().includes('holidays')) {
        response = 'The museum is open from 9:30 AM to 5:00 PM. It’s closed on Fridays and national holidays.';
    } 
else if (userMessage.toLowerCase().includes('holiday')) {
        response = 'The museum is open from 9:30 AM to 5:00 PM. It’s closed on Fridays and national holidays.';
    } 


else if (userMessage.toLowerCase().includes('closed')) {
        response = 'The museum is closed on Fridays and national holidays.';
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