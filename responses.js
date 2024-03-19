export function matchAndRespond(text) {
    const lowerText = text.toLowerCase();
  
    const predefinedPatterns = [

        /* For Dementia Related */
        {
            regex: DEMENTIA_REGEX1,
            response: (matches) => {
            const responses = [
                `Sometimes our brains work a little differently as we get older. That can make it harder to remember things sometimes. Don't worry, I'm here to help. What would you like to do now?`,
                //`If you think it makes someone to be less of a person, it does not, and those people must be appreciated just the same.`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },

        {
            regex: DEMENTIA_REGEX2,
            response: (matches) => {
            const responses = [
                `You can seek professional help by contacting this number: (632) 731-3001, Dementia Society of the Philippines`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },

        {
            regex: DEMENTIA_REGEX3,
            response: (matches) => {
            const responses = [
                `You are not alone, I, Sparky am here.`,
                `You can always talk to me or anyone here in the SparksAid application. You are not alone.`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },

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
        {
            regex: GENERAL_REGEX8,
            response: (matches) => {
            const responses = [
                `Are you interested in whether I am ${matches[1]}`,
                `What if I were ${matches[1]}`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX9,
            response: (matches) => {
            const responses = [
                `Are you concerned over my ${matches[1]}?`,
                `Do you want my ${matches[1]}?`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX10,
            response: (matches) => {
            const responses = [
                `What if you were ${matches[1]}?`,
                `What would it mean if you were ${matches[1]}?`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX11,
            response: (matches) => {
            const responses = [
                `Were you really ${matches[1]}?`,
                `Perhaps you already know you were ${matches[1]}? But have you asked the people you trust whether that is true?`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX12,
            response: (matches) => {
            const responses = [
                `How do you know that you cannot ${matches[1]}?`,
                `Do you really want to be able to do ${matches[1]}? As long as you are not harming yourself.`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX13,
            response: (matches) => {
            const responses = [
                `Don't you really ${matches[1]}?`,
                `Do you wish to be able to ${matches[1]}?`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX14,
            response: (matches) => {
            const responses = [
                `Why do you ${matches[1]} it?`,
                `As long as you ${matches[1]} it thats all that matters`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX15,
            response: (matches) => {
            const responses = [
                `Do you wish to ${matches[1]} me?`,
                `Why do you ${matches[1]} me?`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX16,
            response: (matches) => {
            const responses = [
                `I live here in this app, this conversation, today.`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX17,
            response: (matches) => {
            const responses = [
                `Do you like to be ${matches[1]}`,
                `What is it like, over ${matches[1]}`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX18,
            response: (matches) => {
            const responses = [
                `Why do you think ${matches[1]}?`,
                `Why do you feel ${matches[1]}?`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX19,
            response: (matches) => {
            const responses = [
                `You seem quite certain`,
                `I understand`,
                `You are sure`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX20,
            response: (matches) => {
            const responses = [
                `Are you sure no one "${matches[1]}"?`,
                `Surely someone does`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX21,
            response: (matches) => {
            const responses = [
                `Are you just saying that to be negative?`,
                `Why not?`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX22,
            response: (matches) => {
            const responses = [
                `Your ${matches[1]}?`,
                `Why do you say your ${matches[1]}?`,
                `Is it important that your ${matches[1]}?`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX23,
            response: (matches) => {
            const responses = [
                `Why do you ask?`,
                `Is that really important now?`,
                `What would you want to hear?`,
                `Have you asked anyone else?`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX24,
            response: (matches) => {
            const responses = [
                `Why would you want me to do ${matches[1]}?`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX25,
            response: (matches) => {
            const responses = [
                `Really everyone?`,
                `Who, for example?`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX26,
            response: (matches) => {
            const responses = [
                `And do you enjoy working at ${matches[1]}?`,
                `Do you get paid well working ${matches[1]}?`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: GENERAL_REGEX27,
            response: (matches) => {
            const responses = [
                `Why do you like ${matches[1]}?`,
                `What makes you like ${matches[1]}?`,
                `It is great to like something. As long as it does not bring harm.`
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },

        /* Extra Interactions */

        {
            regex: EXTRA_REGEX1,
            response: (matches) => {
            const responses = [
                `♫ This is Yellow, by Coldplay ♫\n\nLook at the stars\nLook how they shine for you\n\nAnd everything you do\n\nYeah, they were all yellow\n\nI came along\nI wrote a song for you\nAnd all the things you do\n\nAnd it was called Yellow\n\nSo then I took my turn\nOh, what a thing to have done\nAnd it was all yellow\n\nYour skin, oh yeah, your skin and bones\nTurn into something beautiful\nAnd you know, you know I love you so\n\n♫ You know I love you so ♫`,
            ];
            return responses[Math.floor(Math.random() * responses.length)];
            },
        },
        {
            regex: EXTRA_REGEX2,
            response: (matches) => {
            const responses = [
                `In a sunny meadow lived a speedy hare, known for his effortless bursts of incredible speed. He constantly bragged about his prowess, looking down on everyone else, especially the small, brown rabbit who lived nearby. The rabbit, with his steady hops, couldn't compete in a quick sprint, but he never complained. One day, the hare, full of hot air, challenged the rabbit to a race across the meadow. The other animals gathered, excited by the unexpected competition.\n\nThe race began! The hare tore off like a furry blur, leaving the rabbit far behind in a cloud of dust. Confident in his lead, the hare decided to take a nap under a shady tree. "Plenty of time to rest before that slowpoke catches up," he chuckled to himself. Meanwhile, the rabbit, using his smaller size to his advantage, kept a steady pace, hopping tirelessly. He navigated around obstacles the hare had simply leaped over in his haste.`
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

// Dementia Related
const DEMENTIA_REGEX1 = /\bdementia\b/i;
const DEMENTIA_REGEX2 = /\bneed\s+professional\s+help\b/i;
const DEMENTIA_REGEX3 = /\bam\s+alone\b/i;



// Feelings
const FEELING_REGEX = /Is it (.*)/i;
const FEELING_REGEX2 = /I am (.*)/i;
const FEELING_REGEX3 = /you are (.*)/i;

// Greetings
const GREETING_REGEX = /^(?:hello\b|(hello\s+.*))/i;
const GREETING_REGEX2 = /hi (.*)/i;
const GREETING_REGEX3 = /(?:name is|name'?s) (.*)/i;
const GREETING_REGEX4 = /(?:your name|you're name|ur name|who are you| who is sparky)/i
const GREETING_REGEX5 = /how are you(.*)/i
const GREETING_REGEX6 = /goodmorning|good morning|morning/i;
const GREETING_REGEX7 = /hey(.*)/i;
const GREETING_REGEX8 = /\bhi\b/i;
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
const GENERAL_REGEX8 = /are you (.*)/i;
const GENERAL_REGEX9 = /(?:you're|your) (.*)/i;
const GENERAL_REGEX10 = /was i (.*)/i;
const GENERAL_REGEX11 = /i was (.*)/i;
const GENERAL_REGEX12 = /(?:i cant|i can't|i cannot) (.*)/i;
const GENERAL_REGEX13 = /(?:i dont| i do not|i don't) (.*)/i;
const GENERAL_REGEX14 = /(?:i(.*)it)/i;
const GENERAL_REGEX15 = /(?:i(.*)you)/i;
const GENERAL_REGEX16 = /you live/i;
const GENERAL_REGEX17 = /(?:i live|i am from) (.*)/i;
const GENERAL_REGEX18 = /(?:i feel|i think|it seems) (.*)/i;
const GENERAL_REGEX19 = /(?:yes|ya|indeed|of course)/i;
const GENERAL_REGEX20 = /no one (.*)/i;
const GENERAL_REGEX21 = /^\s*No\b(.*)/i;
const GENERAL_REGEX22 = /my (.*)/i;
const GENERAL_REGEX23 = /what/i;
const GENERAL_REGEX24 = /why dont you (.*)/i;
const GENERAL_REGEX25 = /(?:everybody|everyone) (.*)/i;
const GENERAL_REGEX26 = /(?:work|job|employ|working) (.*)/i;
const GENERAL_REGEX27 = /i like (.*)/i;

// Extra Commands
const EXTRA_REGEX1 = /sing(.*?)song/i;
const EXTRA_REGEX2 = /(?:tell\s+a\s+story|tell\s+(.*?)\s+a\s+story)\b/i;







