import { contacts } from "./DATA/contacts.js"
import { getCurrentTime } from "./UTILS/time.js"

const navItems = document.querySelectorAll('.nav-item')
const sideBar = document.querySelector('aside')

const contactList = document.querySelector('.chat-list')
contactList.addEventListener('click',(e)=>{
        let chat = e.target.closest('.chat-container')
        if(!e.target.closest('.chat-container')){
           return 
        }
        contacts.forEach(contact=>{
            if(contact.id === chat.dataset.id){
                setActiveContact(contact)
                setActiveChat(contact)
        }
    })
})

sideBar.addEventListener('click',(e)=>{
    if(!e.target.closest('.nav-item')){
        return
    }
    let navItem = e.target.closest('.nav-item')
    let section = navItem.dataset.section;
    setActiveNavItem(section)
})


function updateNumberOfUnreadChats(){
    let numberOfUnreadChats = 0
    let unreadChatsElem = document.querySelector('#chat-unread-flag')
    for(let index =0; index<contacts.length; index++){
        let contact = contacts[index]
            if(contact.state === 'unread'){
                numberOfUnreadChats+=1
            }
    }
    if(numberOfUnreadChats === 0){
        unreadChatsElem.style.display = 'none'
        return
    }
    unreadChatsElem.textContent = numberOfUnreadChats
}
updateNumberOfUnreadChats()


function setActiveNavItem(section){
    navItems.forEach(item=>{
            item.classList.toggle('active-nav-item',
                item.dataset.section === section
            )
    })
    saveActiveNavItem(section)
}
function saveActiveNavItem(section){
    localStorage.setItem('active-nav-item', section)
}
function loadActiveNavItem(){
    return localStorage.getItem('active-nav-item') || 'chats'
}

/*Run function once page loads to get and load active nav item*/
setActiveNavItem(loadActiveNavItem())




function renderContacts(){
    contactList.innerHTML = `
    <div class = "archived-chats-link">
        <div class = "archived-chats-link-left">
            <i class = "fas fa-download"></i>
            <span>Archived</span>
        </div>
        <span class = "no-of-unread-archived-chats">1<span>
    <div>
    `
    let contactsHtmlContainer = ''
    contacts.forEach((contact,index)=>{
        /*Code for last message attributes, [text,time,status[sent/recieved]]*/
        let lastMessageTime; 
        let lastMessage;
        let lastMessageStatus;

        if(contact.messages.length === 0){
            lastMessageTime = ''
            lastMessage = 'Click here to send a new message'
            lastMessageStatus = ''
        }
        else{
            lastMessageTime = contact.messages[contact.messages.length-1].time
            lastMessage = contact.messages[contact.messages.length-1].text 

            if(contact.messages[contact.messages.length-1].type === 'recieved'){
                lastMessageStatus = ''
            }
            else{
                lastMessageStatus = '✓✓'
            }
        }


        /*Code for message and contact state management*/
        let numberOfUnreadMessages = 0
        contact.messages.forEach(message=>{
            if(message.type === 'sent'){
                numberOfUnreadMessages=0
            }
            else if(message.state && message.state === 'unread'){
                    numberOfUnreadMessages+=1
            }
        })


        let contactHtml = `
            <div class="chat-container" data-index = "${index}" data-id="${contact.id}">
                <div class="profile-picture-container">
                    <img src="${contact.image}">
                </div>
                <div class="chat-container-top">
                    <div class="chat-container-top-info">
                        <span class="contact-name">${contact.name}</span>
                        <span class="last-message-sent-time">${lastMessageTime}</span>
                    </div>
                    <div class="chat-container-bottom">
                        <div class="chat-container-bottom-info">
                            <i class="message-status-icon">${lastMessageStatus}</i>
                            <div class="last-message">${lastMessage}</div>
                        </div>
                        <div class="number-of-unread-chats">${numberOfUnreadMessages}</div>
                    </div>
                </div>
            </div>
    `
    contactsHtmlContainer+=contactHtml
    })
    contactList.innerHTML += contactsHtmlContainer
    const activeContact = JSON.parse(localStorage.getItem('active-contact'))
    if(activeContact){
        setActiveContact(activeContact)
    }
    let chats = document.querySelectorAll('.chat-container');
    chats.forEach(chat=>{
        let lastMessageTime = chat.children[1].children[0].children[1]
        let unreadCount = chat.children[1].children[1].children[1]
        if(unreadCount.textContent === '0'){
            unreadCount.style.display = 'none'
            lastMessageTime.style.color = 'rgba(122, 118, 118, 1)'
        }
        let icon = chat.children[1].children[1].children[0].children[0]
        if(icon.textContent === ''){
            icon.style.display = 'none'
        }
    })
}
renderContacts()

let chatRightSection = document.querySelector('.chat-right-section')

const defaultActiveChatsTemplate = `
    <div class="default-active-chat-template">
        <img src="/IMAGES/AVATARS/WHATSAPP DP.jpg" alt="">
        <p><i class="fas fa-lock"></i>Your personal messages are<span> end to end encrypted</span></p>
    </div>
`

function setActiveContact(contact){
    const chats = document.querySelectorAll('.chat-container')
    chats.forEach(chat=>{
        chat.classList.remove('active-contact')
        if(chat.dataset.id === contact.id){
            chat.classList.add('active-contact') 
        }
    })
    localStorage.setItem('active-contact',JSON.stringify(contact))
}


function renderMessages(contact){
    if(contact === 'none'){
        return
    }
    const messagesContainer = document.querySelector('.messages-container')
    messagesContainer.innerHTML = ''
    let messagesHtmlContainer = ''
    contacts.forEach(c=>{
        if(c.id === contact.id){
            if(!c.messages){
                return
            }
            c.messages.forEach(message=>{
                let messageStatus;
                let messageStatusDiplayState;
                if(message.type === 'recieved'){
                    messageStatus = ''
                    messageStatusDiplayState = 'none'
                }
                else{
                    messageStatus = '✓✓'
                    messageStatusDiplayState = 'flex'
                }
                let messageHtml = `
                    <div class = "message ${message.type}-message">
                        ${message.text}
                        <div class = "message-info">
                            <span class="message-time">${message.time}</span>
                            <span class = "message-status" style="display: ${messageStatusDiplayState};">${messageStatus}</span>
                        </div>
                    </div>
                `
                message.state = 'read'
                c.state = 'read'
                messagesHtmlContainer+=messageHtml
            })
        }
    })


    messagesContainer.innerHTML+=messagesHtmlContainer
    messagesContainer.scrollTop = messagesContainer.scrollHeight /*Set chat behaviour so it always scrolls to bottom */
}


function setActiveChat(contact){
    if(contact === 'template'){
        chatRightSection.innerHTML = defaultActiveChatsTemplate
        return
    }
    let chatWallpaper = contact.wallpaper || "IMAGES/uwp4717127.jpg"

    chatRightSection.innerHTML = `
    <img src="${chatWallpaper}" alt="" class="chat-background-image">
        <div class="active-chat-header-grid">
            <div class="active-chat-header-image-container">
                <img src="${contact.image}" alt="">
            </div>
            <div class="active-chat-info-container">
                <div class="active-chat-name">${contact.name}</div>
                <div class="active-chat-description">Click here to view chat info</div>
            </div>
            <div class="active-chat-action-button">
                <i class="fas fa-video"></i>
                <i class="fas fa-search"></i>
                <i class="fas fa-ellipsis-v"></i>
            </div>
        </div>
        <div class="main-user-input-container-fixed">
            <div class="main-user-input-container">
                <div class="input-icons">
                    <i class="fas fa-plus"></i>
                    <i class="far fa-smile"></i>
                </div>
                <input type="text" name="" id="" class="main-user-input-field" placeholder="Type a message" data-id="${contact.id}">
                <i class="fas fa-microphone-alt " id="voice-note-icon" data-id="${contact.id}"></i>
            </div>
        </div>


        <div class = "messages-container">
        </div>
    `
    let chats = document.querySelectorAll('.chat-container')
    chats.forEach(chat=>{
        if(chat.dataset.id !== contact.id){
            return
        }
        let lastMessageTime = chat.children[1].children[0].children[1]
        let unreadCount = chat.children[1].children[1].children[1]

        lastMessageTime.style.color = 'rgba(122, 118, 118, 1)'
        unreadCount.style.display = 'none'
    })

    renderMessages(contact)
    updateChatUiElements()
    handleInputFieldListener()
    updateNumberOfUnreadChats()
    localStorage.setItem('active-chat', JSON.stringify(contact))
    localStorage.setItem('contacts',JSON.stringify(contacts))
}






setActiveContact(JSON.parse(localStorage.getItem('active-contact')) || 'none')
setActiveChat(JSON.parse(localStorage.getItem('active-chat')) || 'template')



function restoreDefaultState(){
    localStorage.removeItem('active-contact')
    localStorage.removeItem('active-chat')
    localStorage.removeItem('contacts')
    setActiveContact('none')
    setActiveChat('template')
}


function updateChatUiElements(){
    const mainInputElem = document.querySelector('.main-user-input-field')
    mainInputElem.addEventListener('input',()=>{
        if(mainInputElem.value.trim() === ''){
            restoreSendBtnState()
            return
        }
        updateSendBtnState()
    })

    document.querySelector('.main-user-input-field').addEventListener('keydown',(e)=>{
        if(e.key === 'Enter'){
            let contactObject;
            contacts.forEach(contact=>{
                if(contact.id === e.target.dataset.id){
                contactObject = contact
                
            }
        })
        sendNewMessage(contactObject)   
    }
})
}




function restoreSendBtnState(){
    const sendBtn = document.querySelector('.send-message-btn')
    if(!sendBtn){
        return
    }
    sendBtn.classList.add('fa-microphone-alt')
    sendBtn.classList.add('fas')
    sendBtn.classList.remove('fab')
    sendBtn.classList.remove('fa-telegram')
    sendBtn.setAttribute('id','voice-note-icon')
    sendBtn.classList.remove('send-message-btn')
}
function updateSendBtnState(){
    let sendBtn = document.querySelector('.send-message-btn')
    if(!sendBtn){
        sendBtn = document.querySelector('#voice-note-icon')
    }
    sendBtn.classList.remove('fa-microphone-alt')
    sendBtn.classList.remove('fas')
    sendBtn.classList.add('fab')
    sendBtn.classList.add('fa-telegram')
    sendBtn.removeAttribute('id');
    sendBtn.classList.add('send-message-btn')
}



function handleInputFieldListener(){
    let inputFieldContainer = document.querySelector('.main-user-input-container')
    if(!inputFieldContainer){
        return
    }
    inputFieldContainer.addEventListener('click',(e)=>{
        if(!e.target.classList.contains('send-message-btn')){
            return
        }
        let contactObject;
        contacts.forEach(contact=>{
        if(contact.id === e.target.dataset.id){
            contactObject = contact
        }
    })
    sendNewMessage(contactObject)
})

}


handleInputFieldListener()

function sendNewMessage(contact){
    contacts.forEach((contactObject)=>{
        if(contact.id === contactObject.id){
            let newMessage = document.querySelector('.main-user-input-field').value.trim()
            if(newMessage === ''){
                return
            }
            const newMessageObject = {
                text:`${newMessage}`,
                time: getCurrentTime(),
                type: 'sent',
                status: 'sent'
            }
            contactObject.messages.push(newMessageObject)
            document.querySelector('.main-user-input-field').value = ''
            localStorage.setItem('contacts',JSON.stringify(contacts))
            restoreSendBtnState()
            renderContacts()
            renderMessages(contact)
            updateChatUiElements()
        }
    })
}

const searchElem = document.querySelector('.main-search-bar')
let searchTimeoutId;
searchElem.addEventListener('input',()=>{
    clearTimeout(searchTimeoutId)
    searchTimeoutId = setTimeout(()=>{
        handleSearch()
    },900)
})



function handleSearch(){
    console.log('coming soon');
}









restoreDefaultState()

