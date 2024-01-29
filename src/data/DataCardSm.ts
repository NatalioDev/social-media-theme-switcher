import facebookSvg from "../assets/images/icon-facebook.svg";
import twitterSvg from "../assets/images/icon-twitter.svg";
import instagramSvg from "../assets/images/icon-instagram.svg";
import youtubeSvg from "../assets/images/icon-youtube.svg";


type CardSm = {
    id: number,
    increase: boolean,
    title: string,
    icon: string,
    views: number | string,
    percentage: string,
}

const dataCardSm : CardSm[] = [
    {
        id: 1,
        increase: true,
        title: "Page Views",
        icon: facebookSvg,
        views: 87,
        percentage: "3%",
    },
    {
        id:2,
        increase: false,
        title: "Likes",
        icon: facebookSvg,
        views: 52,
        percentage: "2%",
    },
    {
        id:3,
        increase: true,
        title: "Likes",
        icon: instagramSvg,
        views: 5462,
        percentage: "2257%",
    },
    {
        id:4,
        increase: true,
        title: "Profile Views",
        icon: instagramSvg,
        views: "52k",
        percentage: "1375%",
    },
    {
        id:5,
        increase: true,
        title: "Retweets",
        icon: twitterSvg,
        views: 117,
        percentage: "303%",
    },
    {
        id:6,
        increase: true,
        title: "Likes",
        icon: twitterSvg,
        views: 507,
        percentage: "553%",
    },
    {
        id:7,
        increase: false,
        title: "Likes",
        icon: youtubeSvg,
        views: 107,
        percentage: "19%",
    },
    {
        id:8,
        increase: false,
        title: "Total Views",
        icon: youtubeSvg,
        views: 1407,
        percentage: "12%",
    }
]

export default dataCardSm;