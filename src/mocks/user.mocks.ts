import { User } from "../models/user.interface";

const userList: User[] = [
    {
        name: 'Sean Knowles',
        company: 'Target Alpha',
        location: 'Bali',
        bio: 'I make wicked phone apps, digital logbooks yada yada',
        avatar_url: 'https://randomuser.me/api/portraits/men/32.jpg',
        email: 'sean@targetalphatrading.com'
    },
    {
        name: 'JohnDoe',
        company: 'Born to Run',
        location: 'Bangkok',
        bio: 'I frikken love Ionic',
        avatar_url: 'https://randomuser.me/api/portraits/men/44.jpg',
        email: 'borneo@runner.com'
    }
]

export const USER_LIST = userList;