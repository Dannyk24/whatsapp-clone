import { getCurrentTime } from "../UTILS/time.js";
/*=====Contacts logic======*/


export let contacts = JSON.parse(localStorage.getItem('contacts')) || [
    {
        id: 'id1',
        image:'IMAGES/AVATARS/USER AVATAR.jpg',
        name:'You',
        phoneNumber: 9013151297,
        messages:[],
        wallpaper:'IMAGES/wp14352025-gojo-cool-wallpapers.jpg',
        state:'read'
    },
    {
        id: 'id2',
        image:'IMAGES/AVATARS/WHATSAPP DP.jpg',
        name:'Whatsapp ☑️',
        phoneNumber: 9013151297,
        wallpaper: 'IMAGES/AVATARS/WHATSAPP DP.jpg',
        state:'unread',
        messages:[
            {
                text:'Heyy there welcome to whatsapp😊🖐️',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'unread'
            },
        ],
    },
    {
        id: 'id3',
        image:'IMAGES/AVATARS/AVATAR 1.jpg',
        name:'Mark logan',
        phoneNumber: 8055924200,
        state:'unread',
        messages:[
            {
                text:'Heyy whats good',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'unread'
            },
            {
                text:'Bro u busy?',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'unread'
            },
        ]
    },
    {
        id: 'id4',
        image:'IMAGES/AVATARS/AVATAR 2.jpg',
        name:'Daniel Farke',
        phoneNumber: 9062165351,
        state:'unread',
        messages:[
            {
                text:'Yooo remember me daniel?',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'unread'
            },
            {
                text:'Michael?',
                time: getCurrentTime(),
                type: 'sent',
                status: 'delivered',
            },
            {
                text:'Yh from high school😅',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'unread'
            },
        ]
    },
    {
        id: 'id5',
        image:'IMAGES/AVATARS/AVATAR 3.jpg',
        name:'James',
        phoneNumber: 9075310126,
        state:'unread',
        messages:[
            {
                text:'X4BY67',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'unread'
            },
            {
                text:'Abegggg😭😭😂',
                time: getCurrentTime(),
                type: 'sent',
                status: 'delivered'
            },
            {
                text:'Shey time dey?',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'unread'
            },
        ]
    },
    {
        id: 'id6',
        image:'IMAGES/AVATARS/AVATAR 4.jpg',
        name:'Rico bamford',
        phoneNumber: 7005550324,
        state:'unread',
        messages:[
            {
                text:'Hwfr its rico',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'unread'
            },
            {
                text:'Rico lewis?',
                time: getCurrentTime(),
                type: 'sent',
                status: 'delivered'
            },
            {
                text:'No you cow😂',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'unread'
            },
        ]
    },
    {
        id: 'id7',
        image:'IMAGES/AVATARS/AVATAR 5.jpg',
        name:'Bamise',
        phoneNumber: 7068984457,
        state:'read',
        messages:[
            {
                text:'Youuuuuuuuuu',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'read'
            },
            {
                text:'Sir?',
                time: getCurrentTime(),
                type: 'sent',
                status: 'delivered'
            },
            {
                text:'Happy new year',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'read'
            },
            {
                text:'Mad man😂',
                time: getCurrentTime(),
                type: 'sent',
                status: 'delivered'
            },
        ]
    },
    {
        id: 'id8',
        image:'IMAGES/AVATARS/AVATAR 6.jpg',
        name:'Isaac',
        phoneNumber: 8017840115,
        state:'unread',
        messages:[
            {
                text:'Happy new year bro',
                time: getCurrentTime(),
                type: 'sent',
                status: 'delivered'
            },
            {
                text:'Samee',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'unread'
            },
            {
                text:'I never chop sha😭😂',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'unread'
            },
        ]
    },
    {
        id: 'id9',
        image:'IMAGES/AVATARS/AVATAR 7.jpg',
        name:'Mr Thomas',
        phoneNumber: 7039167404,
        state:'unread',
        messages:[
            {
                text:'Good afternoon sir',
                time: getCurrentTime(),
                type: 'sent',
                status: 'delivered'
            },
            {
                text:'Good afternoon daniel',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'unread'
            },
            {
                text:'Hope you are doing fine☺️',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'unread'
            },
        ]
    },
    {
        id: 'id10',
        image:'IMAGES/AVATARS/AVATAR 8.jpg',
        name:'SuperSimpleDev',
        phoneNumber: 8075932932,
        state:'unread',
        messages:[
            {
                text:'Heheheheh',
                time: getCurrentTime(),
                type: 'sent',
                status: 'delivered'
            },
            {
                text:'Ment?',
                time: getCurrentTime(),
                type: 'recieved',
                status: 'delivered',
                state: 'unread'
            },
        ]
    },

]
