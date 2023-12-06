import { USERS } from "../data/users";

export const POSTS = [
    {
        imageUrl: "https://media.discordapp.net/attachments/756789343086968903/1120195356416811088/kisses-for-the-birthday-boy.png?width=489&height=364",
        user: USERS[0].user,
        likes: 7870,
        caption: "Happiest Birthday to my dear Papa, we hope you had a great day. Your family loves you and hopes that you keep a good health",
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'Jess',
                comment: 'We love you!',
            },
            {
                user: 'Roger',
                comment: 'Happy Birthday Robert my good friend!',
            },
        ]
    },

    {
        imageUrl: "https://r7k2t3x9.rocketcdn.me/wp-content/uploads/2021/01/img-2570.jpg",
        user: USERS[3].user,
        likes: 65470,
        caption: "Live Movie on freemovies.com",
        profile_picture: USERS[3].image,
        comments: [
            {
                user: 'Lisa',
                comment: 'Woah awesome movie! This is the very best, I like it so much, when is the next part?',
            },
        ]
    },

    {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCDZoxKByUXOWAPbXWIQSztV15zWkuPU8IQ&usqp=CAU",
        user: USERS[4].user,
        likes: 70,
        caption: "Nice photo here",
        profile_picture: USERS[4].image,
        comments: [

        ]
    },
]