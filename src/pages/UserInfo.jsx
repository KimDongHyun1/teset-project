import React, { useState, useEffect  } from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import PrevButton from '../components/PrevButton';
import RadioGroup from '../components/RadioGroup';
import { genderList, infoContentList } from './../data/common';
import { initialUserInfo } from './../data/initialState';
import Input from '../components/Input';


const UserInfo = ({handleUserInfo}) => {
  // logic
  const history = useNavigate();
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const handleClick = () => {
    history('/partner-info')
    handleUserInfo(userInfo)
  };

  const handleGenderData = (gender) => {
    const resultData = {...userInfo, gender}
    setUserInfo(resultData);
  }

  const handleInfoContent = (label, value) => {
    const resultData = {...userInfo, [label]: value}
    setUserInfo(resultData);
  }
  
  // view
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      <i className="w-168 h-168 rounded-full bg-date-pink-500 fixed -z-10 -left-60 -top-104"></i>
      <PrevButton />

      <div className="h-full flex flex-col">
        <Title mainTitle={'당신을 알려주세요'} />

        {/* START:info 영역 */}
        <form className="pt-20">

          {/* Radio Group 영역 */}
          <RadioGroup 
            items={genderList} 
            defaultCheckedData={userInfo.gender}
            onChange={handleGenderData}
          />

          {/* Input 영역 */}
          {infoContentList.map((infoContent) => (
            <Input 
              key={infoContent.id}
              label={infoContent.label} 
              inputType={infoContent.inputType}
              text={infoContent.text} 
              placeholder={infoContent.placeHolder} 
              onChange={handleInfoContent}
            />
          ))}


        </form>
        {/* END:info 영역 */}

          <Button text={'Next'} onClick={handleClick} />
      </div>
    </div>
  );
};

export default UserInfo;
