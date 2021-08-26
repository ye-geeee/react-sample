import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  useEffect(() => {
    console.log('rendering ready');
    console.log({ name, nickName });
  });

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickName = e => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <div>
        <input onChange={onChangeName}></input>
        <input onChange={onChangeNickName}></input>
      </div>
      <div>
        <div>
          <b>이름 : </b>{name}
        </div>
        <div>
          <b>닉네임 : </b>{nickName}
        </div>
      </div>
    </div >
  );
};

export default Info;