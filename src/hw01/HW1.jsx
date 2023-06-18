import Message from './message/Message';
import MessageSender from './message-sender/MessageSender';
import s2 from './App.module.css';
import FriendMessage from './friend-message/FriendMessage';
import avatar1 from './avatar1.png';
import avatar2 from './avatar2.png';

export const message0 = {
  id: 0,
  user: {
    avatar: avatar1,
    name: 'Zheka',
  },
  message: {
    text: 'Hello bro, how are you?',
    time: '22:00',
  },
};

export const friendMessage0 = {
  id: 100,
  user: {
    avatar: avatar2,
    name: 'Antoha',
  },
  message: {
    text: 'Дружище, я тебя не понимаю',
    time: '22:01',
  },
};

const HW1 = () => {
  return (
    <div id={'hw1'}>
      <div id={'hwTitle'} className={s2.hwTitle}>
        Homework #1
      </div>
      <div className={s2.hw}>
        <div>
          <Message message={message0}/>
          <FriendMessage message={friendMessage0}/>
        </div>
        <MessageSender M={Message}/>
      </div>
    </div>
  );
};

export default HW1;
