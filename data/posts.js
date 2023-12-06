import { USERS } from "./users";

export const POSTS = [
    {
        imageURL: require('../assets/SamplePicsAndPosts/Posts/Post_1.jpg'),
        user: USERS[1].user,
        likes: 7870,
        caption: 'This is post 1',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'Jess',
                comment: 'We love you all!',
            },
            {
                user: 'Jasper',
                comment: 'Great Photo!'
            },
        ]
    },

    {
        imageURL: require('../assets/SamplePicsAndPosts/Posts/Post_2.jpg'),
        user: USERS[2].user,
        likes: 500,
        caption: 'This is post 2',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: 'Jess',
                comment: 'Great going.',
            },
        ]
    },

    {
        imageURL: require('../assets/SamplePicsAndPosts/Posts/Post_3.jpg'),
        user: USERS[3].user,
        likes: 10,
        caption: 'This is post 3',
        profile_picture: USERS[3].image,
        comments: [
            {

            },
        ]
    },
]