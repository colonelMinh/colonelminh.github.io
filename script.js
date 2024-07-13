const chatInput = document.querySelector('.chat-input textarea');
const sendChatBtn = document.querySelector('.chat-input span');
const chatbox = document.querySelector('.chatbox');
const chatbotToggler = document.querySelector('.chatbot-toggler');

let userMessage;
const API_KEY = "sk-proj-NMdXvDORUNnmeMxt7IUMT3BlbkFJzyosiEDMiCYBm4npv5Il";

const createChatLi = (message, className) => {
    const chatLi = document.createElement('li');
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">🤖</span><p>${message}</p><span></span>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector('p');

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}]
        })
    };

    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        if (data.error) {
            messageElement.textContent = `Error: ${data.error.message}`;
        } else {
            messageElement.textContent = data.choices[0].message.content;
        }
    }).catch(err =>  {
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
        console.error(err); // Log lỗi vào console
   });
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        generateResponse(incomingChatLi);
    }, 600);
}
chatbotToggler.addEventListener('click', () => document.body.classList.toggle('show-chatbot'));
sendChatBtn.addEventListener('click', handleChat);
