// Define a function to fetch word definitions
async function fetchDefinitions(word) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching definitions:', error);
        return null;
    }
}

// Define a function to display the definitions or error message
function displayDefinitions(definitions) {
    const definitionsContainer = document.getElementById('definitions');
    definitionsContainer.innerHTML = ''; // Clear previous content

    if (!definitions || definitions.length === 0) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'No definitions found for the entered word.';
        errorMessage.classList.add('error');
        definitionsContainer.appendChild(errorMessage);
        return;
    }

    definitions.forEach((entry, index) => {
        const { word, meanings } = entry;
        const wordElement = document.createElement('h3');
        wordElement.textContent = `${index + 1}. ${word}`;
        definitionsContainer.appendChild(wordElement);

        meanings.forEach(meaning => {
            const { partOfSpeech, definitions: defs } = meaning;
            const partOfSpeechElement = document.createElement('p');
            partOfSpeechElement.textContent = `Part of speech: ${partOfSpeech}`;
            definitionsContainer.appendChild(partOfSpeechElement);

            defs.forEach((definition, index) => {
                const definitionElement = document.createElement('p');
                definitionElement.textContent = `${index + 1}. ${definition.definition}`;
                definitionsContainer.appendChild(definitionElement);
            });
        });
    });
}

// Define a function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const word = document.getElementById('search').value.trim();
    if (word === '') {
        alert('Please enter a word to search');
        return;
    }
    fetchDefinitions(word)
        .then(definitions => displayDefinitions(definitions))
        .catch(error => console.error('Error:', error));
}

// Attach event listener to form submit
const form = document.getElementById('searchForm');
form.addEventListener('submit', handleFormSubmit);
