const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const userMessage = document.getElementById('user-message');
const botMessage = document.getElementById('bot-message');

chatForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const message = userInput.value;
  userMessage.textContent = message;

  const response = await fetch('/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  });

  const data = await response.json();
  botMessage.textContent = data.message;

  userInput.value = '';
  chatForm.scrollIntoView({ behavior: 'smooth' });
});