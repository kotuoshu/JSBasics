function chatLogger(input) {
    let chat = [];
  
    for (let command of input) {
      let [action, ...content] = command.split(' ');
  
      switch (action) {
        case 'Chat':
          let message = content.join(' ');
          chat.push(message);
          break;
  
        case 'Delete':
          let messageToDelete = content.join(' ');
          let indexToDelete = chat.indexOf(messageToDelete);
          if (indexToDelete !== -1) {
            chat.splice(indexToDelete, 1);
          }
          break;
  
        case 'Edit':
          let messageToEdit = content[0];
          let editedVersion = content.slice(1).join(' ');
          let indexToEdit = chat.indexOf(messageToEdit);
          if (indexToEdit !== -1) {
            chat[indexToEdit] = editedVersion;
          }
          break;
  
        case 'Pin':
          let messageToPin = content.join(' ');
          let indexToPin = chat.indexOf(messageToPin);
          if (indexToPin !== -1) {
            chat.splice(indexToPin, 1);
            chat.push(messageToPin);
          }
          break;
  
        case 'Spam':
          let messagesToAdd = content.join(' ');
          let newMessages = messagesToAdd.split(' ');
          chat.push(...newMessages);
          break;
  
        case 'end':
          return chat.join('\n');
          
        default:
          break;
      }
    }
  }
  
  // Example usage:
  const commands = [
    'Chat Hello!',
    'Chat How are you?',
    'Edit Hello! Hi there!',
    'Pin How are you?',
    'Delete Hi there!',
    'Spam This is a spam message.',
    'end'
  ];
  
  const chatHistory = chatLogger(commands);
  console.log(chatHistory);