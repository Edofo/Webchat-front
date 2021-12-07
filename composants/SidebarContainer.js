import ChatCard from "./ChatCard"

const SidebarContainer = () => {
    return (
        <div>
            <div>
                {/*IMAGE*/}
                <div>
                    <p className="blueText">LEBOUCHER Nolan</p>
                    <p className="subTitle">Developpeur FullStack</p>
                </div>
                {/*EDIT*/}
            </div>
            {/*SEARCH*/}
            <ChatCard />
        </div>
    )
}

export default SidebarContainer