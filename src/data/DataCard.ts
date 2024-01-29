import facebookSvg from "../assets/images/icon-facebook.svg";
import twitterSvg from "../assets/images/icon-twitter.svg";
import instagramSvg from "../assets/images/icon-instagram.svg";
import youtubeSvg from "../assets/images/icon-youtube.svg";

type Card = {
    id: number,
    increase: boolean,
    svg: string,
    user: string,
    followers: string | number,
    today: number,
    title: string
}

const dataCard : Card[] = [
    {   
        id:1,
        increase: true,
        svg: facebookSvg,
        user: "@nathanf",
        followers: 1987,
        today: 12,
        title: "followers",
    },
    {
        id:2,
        increase: true,
        svg: twitterSvg,
        user: "@nathanf",
        followers: 1044,
        today: 99,
        title: "followers",
    },
    {
        id:3,
        increase: true,
        svg: instagramSvg,
        user: "@realnathanf",
        followers: "11K",
        today: 1099,
        title: "followers",
    },
    {
        id:4,
        increase: false,
        svg: youtubeSvg,
        user: "Nathan F",
        followers: 8239,
        today: 144,
        title: "subscribes",
    }
]

export default dataCard;