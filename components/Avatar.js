function Avatar({url, myClass}){
    return (
        <img loading="lazy" className={`rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110 ${myClass}`} src={url} alt="profile picture" />
    )
}

export default Avatar;