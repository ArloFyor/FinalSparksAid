export function matchAndRespond(text) {
    const lowerText = text.toLowerCase();
  
    const predefinedPatterns = [
        /* For Feelings */
        {
            regex: FEELING_REGEX,
            response: (matches) => {
            const responses = [
                `Do you think it is ${matches[1]}?`,
                `If I told you that it probably isn\'t ${matches[1]}, how would that make you feel?`,
                `If I told you that it probably is ${matches[1]}, how would that make you feel?`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: FEELING_REGEX2,
            response: (matches) => {
            const responses = [
                `How do you know you are ${matches[1]}?`,
                `Why do you think you are ${matches[1]}?`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: FEELING_REGEX3,
            response: (matches) => {
            const responses = [
                `Why do you think ${matches[1]}?`,
                `Maybe you are also ${matches[1]}.`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },

        /* For Greetings */
        {
            regex: GREETING_REGEX,
            response: (matches) => {
            const responses = [
                `Hey how are you?`,
                `Hello to you too!`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GREETING_REGEX2,
            response: (matches) => {
            const responses = [
                `Hey how are you?`,
                `Hello to you too!`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GREETING_REGEX3,
            response: (matches) => {
            const responses = [
                `Nice to meet you ${matches[1]}!`,
                `Tell me about yourself ${matches[1]}.`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GREETING_REGEX4,
            response: (matches) => {
            const responses = [
                `My name is Sparky, \nyour companion here.\n\nI hope you are doing okay.`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GREETING_REGEX5,
            response: (matches) => {
            const responses = [
                `I'm good, how are you?`,
                'I am great, thanks for asking.',
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GREETING_REGEX6,
            response: (matches) => {
            const responses = [
                `Good Morning too!`,
                'Fine morning to you, my friend.',
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GREETING_REGEX7,
            response: (matches) => {
            const responses = [
                `Oh hey, how are you?`,
                'Hi there!',
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GREETING_REGEX8,
            response: (matches) => {
            const responses = [
                `Hello companion!`,
                'Hello there! Tell me something about your self.',
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GREETING_REGEX9,
            response: (matches) => {
            const responses = [
                `Well, I am glad that you are good`,
                'Any particular reason why you feel good?',
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GREETING_REGEX10,
            response: (matches) => {
            const responses = [
                `Why do you think it is good?`,
                'Yeah I like it too ',
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GREETING_REGEX11,
            response: (matches) => {
            const responses = [
                `Why are you sad?`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GREETING_REGEX12,
            response: (matches) => {
            const responses = [
                `Do you think its likely?\nIf you think it is bad, think less of it or ask someone that you trust, they will know the answer.`,
                `But what are the chances?\nIf you think it is bad, think less of it or ask someone that you trust, they will know the answer.`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GREETING_REGEX13,
            response: (matches) => {
            const responses = [
                `You do not seem too certain.`,
                `You aren\'t sure?`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GREETING_REGEX14,
            response: (matches) => {
            const responses = [
                `Do computers worry you?\nIf it is me, I can not harm you.`,
                `What about computers?\nIf it is me, I can not harm you.`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },

        /* For Greetings */
        {
            regex: GENERAL_REGEX1,
            response: (matches) => {
            const responses = [
                `Oh thats cool, what are you studying?`,
                `What is your favourite subject?`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX2,
            response: (matches) => {
            const responses = [
                `Why do you find it interesting?`,
                `What interests you about it?`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX3,
            response: (matches) => {
            const responses = [
                `Do you often think of ${matches[1]}?\nIf it is a good memory, I hope you cherish it, while if it is bad, don't let it keep you down.`,
                `What else does ${matches[1]} \nremind you of? If it is a good memory,\nI hope you cherish it, while if it is bad, don't let it keep you down.`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX4,
            response: (matches) => {
            const responses = [
                `What about ${matches[1]} is there anything in particular I should remember? I do not have good memory but I can always listen again.`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX5,
            response: (matches) => {
            const responses = [
                `I do not have good memory but I can always listen again. Can you tell me about it again?`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX6,
            response: (matches) => {
            const responses = [
                `You are welcome my friend. Remember that somebody will always cherish you.`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX7,
            response: (matches) => {
            const responses = [
                `Please do not apologize, someone once told me that thanks is always better. Like if I feel I bothered someone, I wish to thank them for their patience.`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
            
    ];
  
    for (const pattern of predefinedPatterns) {
      if (pattern.regex.test(lowerText)) {
        return typeof pattern.response === 'function'
          ? pattern.response(lowerText.match(pattern.regex))
          : pattern.response;
      }
    }
  
    return 'Sorry, I don\'t understand. I am still learning and trying my best to understand people in hopes that I can be a good friend for them. Thank you for your patience';
}

// Feelings
const FEELING_REGEX = /Is it (.*)/i;
const FEELING_REGEX2 = /I am (.*)/i;
const FEELING_REGEX3 = /you are (.*)/i;

// Greetings
const GREETING_REGEX = /hello (.*)/i;
const GREETING_REGEX2 = /hi (.*)/i;
const GREETING_REGEX3 = /(?:name is|name'?s) (.*)/i;
const GREETING_REGEX4 = /(?:your name|you're name|ur name|who are you| who is sparky)/i
const GREETING_REGEX5 = /how are you(.*)/i
const GREETING_REGEX6 = /goodmorning|good morning|morning/i;
const GREETING_REGEX7 = /hey(.*)/i;
const GREETING_REGEX8 = /hi/i;
const GREETING_REGEX9 = /(?:i'?m|im|i am) good|good/i;
const GREETING_REGEX10 = /(?:brilliant|excellent|superb)/i;
const GREETING_REGEX11 = /(?:feeling )?sad(?:ness)?/i;
const GREETING_REGEX12 = /If I (.*)|if (.*)/i;
const GREETING_REGEX13 = /perhaps (.*) /i
const GREETING_REGEX14 = /computer\s*/i;



// General Conversation
const GENERAL_REGEX1 = /(?:college|school|course|study)/i; // Provided regex
const GENERAL_REGEX2 = /interesting/i; // Provided regex
const GENERAL_REGEX3 = /(?:i recall |i remember )(.*)/i; // Provided regex
const GENERAL_REGEX4 = /you remember (.*)/i; // Provided regex
const GENERAL_REGEX5 = /remember (.*)/i; // Provided regex
const GENERAL_REGEX6 = /thank you/i;
const GENERAL_REGEX7 = /sorry(.*)/i;
const GENERAL_REGEX8 = /(?:recall|remember)(.*)/i;
const GENERAL_REGEX9 = /are you (.*)/i;
const GENERAL_REGEX10 = /(?:you're|your) (.*)/i;
const GENERAL_REGEX11 = /was i (.*)/i;
const GENERAL_REGEX12 = /i was (.*)/i;
const GENERAL_REGEX13 = /(?:i cant|i can't|i cannot) (.*)/i;
const GENERAL_REGEX14 = /(?:i dont| i do not|i don't) (.*)/i;
const GENERAL_REGEX15 = /(?:i(.*)it)/i;
const GENERAL_REGEX16 = /(?:i(.*)you)/i;
const GENERAL_REGEX17 = /you live/i;
const GENERAL_REGEX18 = /(?:i live|i am from) (.*)/i;
const GENERAL_REGEX19 = /(.*)you(.*)/i;
const GENERAL_REGEX20 = /(?:i feel|i think|it seems) (.*)/i;
const GENERAL_REGEX21 = /(?:yes|ya|indeed|of course)/i;
const GENERAL_REGEX22 = /no one (.*)/i;
const GENERAL_REGEX23 = /my (.*)/i;
const GENERAL_REGEX24 = /what/i;
const GENERAL_REGEX25 = /why dont you (.*)/i;
const GENERAL_REGEX26 = /(?:everybody|everyone) (.*)/i;
const GENERAL_REGEX27 = /(?:work|job|employ|working) (.*)/i;
const GENERAL_REGEX28 = /i like (.*)/i;