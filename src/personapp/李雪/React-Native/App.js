import React, { useState, useEffect } from 'react';
import { Router, Scene, Tabs, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, BackHandler, ToastAndroid, AsyncStorage } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// 登录
import Login from './src/common/Login';
import SwiperPage from './src/common/SwiperPage';
import Signin from './src/common/Signin';
import Choosecollege from './src/common/Choosecollege';
import Forget from './src/common/Forget';

// 社区
import Community from './src/community/Community';
import Add from './src/community/Add';
import Details from './src/community/Details'

// 我的
import My from './src/my/My';
// import Shoucang from './src/my/Shoucang';
import Tongxun from './src/my/Tongxun';
import Guanyu from './src/my/Guanyu';
import Fankui from './src/my/Fankui';
import Tijiao from './src/my/Tijiao';
import Shezhi from './src/my/Shezhi';
import Mima from './src/my/Mima';
import Xuexidongtai from './src/my/Xuexidongtai'
import Touxiang from './src/my/Touxiang';
import Biji from './src/my/Biji';
import Myexperence from './src/my/Myexperence';

// 攻略
import Method from './src/method/Method';
// 一卡通
import Onecard from './src/method/onecard/OneCard';
import Activate from './src/method/onecard/Activate';
import Invest from './src/method/onecard/Invest';
import Loss from './src/method/onecard/Loss';
// 社团组织
import Organization from './src/method/organization/Organization';
import Schoolorg from './src/method/organization/Schoolorg';
import Practice from './src/method/organization/Practice';
import Physical from './src/method/organization/Physical';
import Academic from './src/method/organization/Academic';
import Art from './src/method/organization/Art';

// 学校
import School from './src/method/school/School';
import Synopsis from './src/method/school/Synopsis';
import Subject from './src/method/school/Subject';
import Schoollogo from './src/method/school/Schoollogo';
import Scenery from './src/method/school/Scenery';
import Personnel from './src/method/school/Personnel';
import Govern from './src/method/school/Govern';
import Science from './src/method/school/Science';
import Obtainemployment from './src/method/school/Obtainemployment';
import Shiziduiwu from './src/method/school/Shiziduiwu';
import Undergradute from './src/method/school/Undergradute';
import Gradute from './src/method/school/Gradute';
import Overseas from './src/method/school/Overseas';
import Continus from './src/method/school/Continus';
import Course from './src/method/school/Course';
import Practise from './src/method/school/Practise';
import Teaching from './src/method/school/Teaching';
import FamousTeachers from './src/method/school/FamousTeachers';
import Achievement from './src/method/school/Achievement';
import Terrace from './src/method/school/Terrace';
import Technology from './src/method/school/Technology';
import Human from './src/method/school/Human';
import Cooperate from './src/method/school/Cooperate';
import Learning from './src/method/school/Learning';

// 学习
import Study from './src/method/study/Study';
import Agrant from './src/method/study/Agrant';
import Scholarship from './src/method/study/Scholarship';
import Second from './src/method/study/Second';
import Zongheceping from './src/method/study/Zongheceping'

// 杰出校友
import Schoolmaths from './src/method/schoolmates/Schoolmates';
import Cailimin from './src/method/schoolmates/Cailimin';
import Caijiming from './src/method/schoolmates/Caijiming';
import Chaiguanjing from './src/method/schoolmates/Chaiguanjing';
import Chenshuzeng from './src/method/schoolmates/Chenshuzeng';
import Dengyingchao from './src/method/schoolmates/Dengyingchao';
import Fanqianwen from './src/method/schoolmates/Fanqianwen';
import Fengjiannan from './src/method/schoolmates/Fengjiannan';
import Fengshaohui from './src/method/schoolmates/Fengshaohui';
import Gesangdeji from './src/method/schoolmates/Gesangdeji';
import Haobolin from './src/method/schoolmates/Haobolin';
import Hehong from './src/method/schoolmates/Hehong';
import Houliang from './src/method/schoolmates/Houliang';
import Lishushen from './src/method/schoolmates/Lishushen';
import Liyimin from './src/method/schoolmates/Liyimin';
import Lizhanshu from './src/method/schoolmates/Lizhanshu';
import Liangxingjie from './src/method/schoolmates/Liangxingjie';
import Linwanli from './src/method/schoolmates/Linwanli';
import Liujianya from './src/method/schoolmates/Liujianya';
import Liuxiaojun from './src/method/schoolmates/Liuxiaojun';
import Liuyongrui from './src/method/schoolmates/Liuyongrui';
import Longzhuangwei from './src/method/schoolmates/Longzhuangwei';
import Luhongchang from './src/method/schoolmates/Luhongchang';
import Mayujun from './src/method/schoolmates/Mayujun';
import Panglaixing from './src/method/schoolmates/Panglaixing';
import Situlanfang from './src/method/schoolmates/Situlanfang';
import Suguoan from './src/method/schoolmates/Suguoan';
import Wangfengming from './src/method/schoolmates/Wangfengming';
import Wangjinjiang from './src/method/schoolmates/Wangjinjiang';
import Wangzhixin from './src/method/schoolmates/Wangzhixin';
import Xiachuancai from './src/method/schoolmates/Xiachuancai';
import Yanluguang from './src/method/schoolmates/Yanluguang';
import Yuanzhigang from './src/method/schoolmates/Yuanzhigang';
import Zhanghe from './src/method/schoolmates/Zhanghe';
import Zhangmeizhi from './src/method/schoolmates/Zhangmeizhi';
import Zhangwenmao from './src/method/schoolmates/Zhangwenmao';
import Zhangyanping from './src/method/schoolmates/Zhangyanping';
import Zhangzhiwei from './src/method/schoolmates/Zhangzhiwei';
// 学院 
import College from './src/method/college/College';
import CollegeHistory from './src/method/college/CollegeHistory';
import CollegeTeachers from './src/method/college/CollegeTeachers';
import CollegeMajor from './src/method/college/CollegeMajor';
import CollegeOther from './src/method/college/CollegeOther';

// 共享
import Share from './src/share/Share';
import Experience from './src/share/experience/Experience';
import ExpDetails from './src/share/experience/ExpDetails';
import AddExp from './src/share/experience/AddExp';
import Cet46 from './src/share/cet46/cet46';
import Cet41 from './src/share/cet46/Four/Cet41';
import Word from './src/share/cet46/Four/vocabulary/Word'
import Appear from './src/share/cet46/Four/frequency/Appear'
import Readone from './src/share/cet46/Four/read/Readone'
import One from './src/share/cet46/Four/read/readone/One'
import Selectten1 from './src/share/cet46/Four/selectTen/Selectten1'
import SelectFive1 from './src/share/cet46/Four/selectFive/SelectFive1'
import One1 from './src/share/cet46/Four/selectTen/selectten/One1'
import Two2 from './src/share/cet46/Four/selectTen/selectten/Two2'
import Three3 from './src/share/cet46/Four/selectTen/selectten/Three3'
import Four4 from './src/share/cet46/Four/selectTen/selectten/Four4'
import First from './src/share/cet46/Four/selectFive/selectfive/First';
import Second1 from './src/share/cet46/Four/selectFive/selectfive/Second1';
import Third from './src/share/cet46/Four/selectFive/selectfive/Third';
import Fourth from './src/share/cet46/Four/selectFive/selectfive/Fourth';
import Cet61 from './src/share/cet46/Six/Cet61';
import Word6 from './src/share/cet46/Six/src/Bibei';
import Gaopin6 from './src/share/cet46/Six/src/Gaopin';
import Shiwu6 from './src/share/cet46/Six/src/Shiwu';
import Yuedu6 from './src/share/cet46/Six/src/Yuedu';
import Shiwu61 from './src/share/cet46/Six/src/src/Shiwu1'
import Shiwu62 from './src/share/cet46/Six/src/src/Shiwu2'
import Shiwu63 from './src/share/cet46/Six/src/src/Shiwu3'
import Shiwu64 from './src/share/cet46/Six/src/src/Shiwu4'
import Yuedu61 from './src/share/cet46/Six/src/src/Yuedu1'
import Yuedu62 from './src/share/cet46/Six/src/src/Yuedu2'
import Yuedu63 from './src/share/cet46/Six/src/src/Yuedu3'
import Yuedu64 from './src/share/cet46/Six/src/src/Yuedu4'

import Notes from './src/share/notes/Notes';
import NotesDetails from './src/share/notes/NotesDetaile';
import AddNotes from './src/share/notes/AddNotes';
import Programme from './src/share/programme/programme';

//李雪 数学一
import Math1 from './src/share/programme/Math1/Math1';
import Choose from './src/share/programme/Math1/choose/Choose'
import Fill from './src/share/programme/Math1/fill/Fill'
import Answer from './src/share/programme/Math1/answer/Answer'
import Choose1 from './src/share/programme/Math1/choose/topics/Choose1'
import Choose2 from './src/share/programme/Math1/choose/topics/Choose2'
import Choose3 from './src/share/programme/Math1/choose/topics/Choose3'
import Choose4 from './src/share/programme/Math1/choose/topics/Choose4'
import Choose5 from './src/share/programme/Math1/choose/topics/Choose5'
import Choose6 from './src/share/programme/Math1/choose/topics/Choose6'
import Choose7 from './src/share/programme/Math1/choose/topics/Choose7'
import Choose8 from './src/share/programme/Math1/choose/topics/Choose8'
import Choose9 from './src/share/programme/Math1/choose/topics/Choose9'
import Choose10 from './src/share/programme/Math1/choose/topics/Choose10'
import Choose11 from './src/share/programme/Math1/choose/topics/Choose11'
import Choose12 from './src/share/programme/Math1/choose/topics/Choose12'
import Choose13 from './src/share/programme/Math1/choose/topics/Choose13'
import Choose14 from './src/share/programme/Math1/choose/topics/Choose14'
import Choose15 from './src/share/programme/Math1/choose/topics/Choose15'
import Choose16 from './src/share/programme/Math1/choose/topics/Choose16'
import Choose17 from './src/share/programme/Math1/choose/topics/Choose17'
import Choose18 from './src/share/programme/Math1/choose/topics/Choose18'
import Choose19 from './src/share/programme/Math1/choose/topics/Choose19'
import Choose20 from './src/share/programme/Math1/choose/topics/Choose20'

import Fill1 from './src/share/programme/Math1/fill/topics/Fill1'
import Fill2 from './src/share/programme/Math1/fill/topics/Fill2'
import Fill3 from './src/share/programme/Math1/fill/topics/Fill3'
import Fill4 from './src/share/programme/Math1/fill/topics/Fill4'
import Fill5 from './src/share/programme/Math1/fill/topics/Fill5'
import Fill6 from './src/share/programme/Math1/fill/topics/Fill6'
import Fill7 from './src/share/programme/Math1/fill/topics/Fill7'
import Fill8 from './src/share/programme/Math1/fill/topics/Fill8'
import Fill9 from './src/share/programme/Math1/fill/topics/Fill9'
import Fill10 from './src/share/programme/Math1/fill/topics/Fill10'
import Fill11 from './src/share/programme/Math1/fill/topics/Fill11'
import Fill12 from './src/share/programme/Math1/fill/topics/Fill12'
import Fill13 from './src/share/programme/Math1/fill/topics/Fill13'
import Fill14 from './src/share/programme/Math1/fill/topics/Fill14'
import Fill15 from './src/share/programme/Math1/fill/topics/Fill15'
import Fill16 from './src/share/programme/Math1/fill/topics/Fill16'
import Fill17 from './src/share/programme/Math1/fill/topics/Fill17'
import Fill18 from './src/share/programme/Math1/fill/topics/Fill18'
import Fill19 from './src/share/programme/Math1/fill/topics/Fill19'
import Fill20 from './src/share/programme/Math1/fill/topics/Fill20'

import Answer1 from './src/share/programme/Math1/answer/topics/Answer1'
import Answer2 from './src/share/programme/Math1/answer/topics/Answer2'
import Answer3 from './src/share/programme/Math1/answer/topics/Answer3'
import Answer4 from './src/share/programme/Math1/answer/topics/Answer4'
import Answer5 from './src/share/programme/Math1/answer/topics/Answer5'
import Answer6 from './src/share/programme/Math1/answer/topics/Answer6'
import Answer7 from './src/share/programme/Math1/answer/topics/Answer7'
import Answer8 from './src/share/programme/Math1/answer/topics/Answer8'
import Answer9 from './src/share/programme/Math1/answer/topics/Answer9'
import Answer10 from './src/share/programme/Math1/answer/topics/Answer10'
import Answer11 from './src/share/programme/Math1/answer/topics/Answer11'
import Answer12 from './src/share/programme/Math1/answer/topics/Answer12'
import Answer13 from './src/share/programme/Math1/answer/topics/Answer13'
import Answer14 from './src/share/programme/Math1/answer/topics/Answer14'
import Answer15 from './src/share/programme/Math1/answer/topics/Answer15'
import Answer16 from './src/share/programme/Math1/answer/topics/Answer16'
import Answer17 from './src/share/programme/Math1/answer/topics/Answer17'
import Answer18 from './src/share/programme/Math1/answer/topics/Answer18'
import Answer19 from './src/share/programme/Math1/answer/topics/Answer19'
import Answer20 from './src/share/programme/Math1/answer/topics/Answer20'

import Math2 from './src/share/programme/Math2/Math2';
import Math2Choose2 from './src/share/programme/Math2/choose/Choose'
import Math2Fill2 from './src/share/programme/Math2/fill/Fill'
import Math2Answer2 from './src/share/programme/Math2/answer/Answer'
import Choose21 from './src/share/programme/Math2/choose/topics/Choose1'
import Choose22 from './src/share/programme/Math2/choose/topics/Choose2'
import Choose23 from './src/share/programme/Math2/choose/topics/Choose3'
import Fill21 from './src/share/programme/Math2/fill/topics/Fill1'
import Fill22 from './src/share/programme/Math2/fill/topics/Fill2'
import Fill23 from './src/share/programme/Math2/fill/topics/Fill3'
import Answer21 from './src/share/programme/Math2/answer/topics/Answer1'
import Answer22 from './src/share/programme/Math2/answer/topics/Answer2'
import Answer23 from './src/share/programme/Math2/answer/topics/Answer3'

//李雪 英语一
import English1 from './src/share/programme/English1/English1';
import Gestalt from './src/share/programme/English1/gestalt/Gestalt';
import Read from './src/share/programme/English1/read/Read';
import Translate from './src/share/programme/English1/translate/Translate';
import Gestalt1 from './src/share/programme/English1/gestalt/topics/Gestalt1'
import Gestalt2 from './src/share/programme/English1/gestalt/topics/Gestalt2'
import Gestalt3 from './src/share/programme/English1/gestalt/topics/Gestalt3'
import Gestalt4 from './src/share/programme/English1/gestalt/topics/Gestalt4'
import Gestalt5 from './src/share/programme/English1/gestalt/topics/Gestalt5'
import Gestalt6 from './src/share/programme/English1/gestalt/topics/Gestalt6'
import Gestalt7 from './src/share/programme/English1/gestalt/topics/Gestalt7'
import Gestalt8 from './src/share/programme/English1/gestalt/topics/Gestalt8'
import Gestalt9 from './src/share/programme/English1/gestalt/topics/Gestalt9'
import Gestalt10 from './src/share/programme/English1/gestalt/topics/Gestalt10'
import Gestalt11 from './src/share/programme/English1/gestalt/topics/Gestalt11'
import Gestalt12 from './src/share/programme/English1/gestalt/topics/Gestalt12'
import Gestalt13 from './src/share/programme/English1/gestalt/topics/Gestalt13'
import Gestalt14 from './src/share/programme/English1/gestalt/topics/Gestalt14'
import Gestalt15 from './src/share/programme/English1/gestalt/topics/Gestalt15'
import Gestalt16 from './src/share/programme/English1/gestalt/topics/Gestalt16'
import Gestalt17 from './src/share/programme/English1/gestalt/topics/Gestalt17'
import Gestalt18 from './src/share/programme/English1/gestalt/topics/Gestalt18'
import Gestalt19 from './src/share/programme/English1/gestalt/topics/Gestalt19'
import Gestalt20 from './src/share/programme/English1/gestalt/topics/Gestalt20'

import Read1 from './src/share/programme/English1/read/topics/Read1'
import Read2 from './src/share/programme/English1/read/topics/Read2';
import Read3 from './src/share/programme/English1/read/topics/Read3';
import Read4 from './src/share/programme/English1/read/topics/Read4';
import Read5 from './src/share/programme/English1/read/topics/Read5';
import Read6 from './src/share/programme/English1/read/topics/Read6';
import Read7 from './src/share/programme/English1/read/topics/Read7';
import Read8 from './src/share/programme/English1/read/topics/Read8';
import Read9 from './src/share/programme/English1/read/topics/Read9';
import Read10 from './src/share/programme/English1/read/topics/Read10';
import Read11 from './src/share/programme/English1/read/topics/Read11';
import Read12 from './src/share/programme/English1/read/topics/Read12';
import Read13 from './src/share/programme/English1/read/topics/Read13';
import Read14 from './src/share/programme/English1/read/topics/Read14';
import Read15 from './src/share/programme/English1/read/topics/Read15';
import Read16 from './src/share/programme/English1/read/topics/Read16';
import Read17 from './src/share/programme/English1/read/topics/Read17';
import Read18 from './src/share/programme/English1/read/topics/Read18';
import Read19 from './src/share/programme/English1/read/topics/Read19';
import Read20 from './src/share/programme/English1/read/topics/Read20';

import Translate1 from './src/share/programme/English1/translate/topics/Translate1';
import Translate2 from './src/share/programme/English1/translate/topics/Translate2';
import Translate3 from './src/share/programme/English1/translate/topics/Translate3';
import Translate4 from './src/share/programme/English1/translate/topics/Translate4';
import Translate5 from './src/share/programme/English1/translate/topics/Translate5';
import Translate6 from './src/share/programme/English1/translate/topics/Translate6';
import Translate7 from './src/share/programme/English1/translate/topics/Translate7';
import Translate8 from './src/share/programme/English1/translate/topics/Translate8';
import Translate9 from './src/share/programme/English1/translate/topics/Translate9';
import Translate10 from './src/share/programme/English1/translate/topics/Translate10';
import Translate11 from './src/share/programme/English1/translate/topics/Translate11';
import Translate12 from './src/share/programme/English1/translate/topics/Translate12';
import Translate13 from './src/share/programme/English1/translate/topics/Translate13';
import Translate14 from './src/share/programme/English1/translate/topics/Translate14';
import Translate15 from './src/share/programme/English1/translate/topics/Translate15';
import Translate16 from './src/share/programme/English1/translate/topics/Translate16';
import Translate17 from './src/share/programme/English1/translate/topics/Translate17';
import Translate18 from './src/share/programme/English1/translate/topics/Translate18';
import Translate19 from './src/share/programme/English1/translate/topics/Translate19';
import Translate20 from './src/share/programme/English1/translate/topics/Translate20';


import English2 from './src/share/programme/English2/English2';
import Politics from './src/share/programme/Politics/Politics';

// 王亚红
import Changnanju from './src/share/programme/English2/CNJ/Changnanju';
import Yuedu from './src/share/programme/English2/YD/Yuedu';
import Wanxingtiankong from './src/share/programme/English2/WXTK/Wanxingtiankong';
import TextDetail1 from './src/share/programme/English2/YD/TextDetail1';
import TextDetail2 from './src/share/programme/English2/YD/TextDetail2';
import TextDetail3 from './src/share/programme/English2/YD/TextDetail3';
import TextDetail4 from './src/share/programme/English2/YD/TextDetail4';
import WxtkDetail1 from './src/share/programme/English2/WXTK/WxtkDetail1';
import WxtkDetail2 from './src/share/programme/English2/WXTK/WxtkDetail2';
import WxtkDetail3 from './src/share/programme/English2/WXTK/WxtkDetail3';
import PoliticsDetail1 from './src/share/programme/Politics/PoliticsDetail1';
import PoliticsDetail2 from './src/share/programme/Politics/PoliticsDetail2';




console.disableYellowBox = true;

const App = () => {
  let [isLogin, setLogin] = useState(false);
  let [isInstall, setInstall] = useState(true);
  let now = 0;
  let init = () => {
    AsyncStorage.getItem('isInstall')
      .then(res => {
        console.log('isinstall', res)
        if (res) {
          setInstall(false);
        }
      })
    AsyncStorage.getItem('username')
      .then(res => {
        let user = { username: res }
        console.log('user:', user)
        if (!user.username) {
          SplashScreen.hide();
        }
        if (user.username) {
          setLogin(true);
          SplashScreen.hide();
        }
      })
  }
  useEffect(() => {
    init();
  }, [])
  let afterInstall = () => {
    console.log('after install')
    setInstall(false)
  }
  if (isInstall) {
    return <View style={{ flex: 1 }}>
      <SwiperPage afterInstall={afterInstall} />
    </View>
  }
  return (
    <>
      <Router
        backAndroidHandler={() => {
          if (Actions.currentScene != 'methodPage') {
            Actions.pop();
            return true;
          } else {
            if (new Date().getTime() - now < 2000) {
              BackHandler.exitApp();
            } else {
              ToastAndroid.show('确定要退出吗', 100);
              now = new Date().getTime();
              return true;
            }
          }

        }}
      >
        <Scene key='root'>
          <Tabs key='tabbar' hideNavBar activeTintColor='#37376F' inactiveTintColor='black' tabBarStyle={{ backgroundColor: '#fff', borderTopWidth: 0 }}>
            {/* 攻略 */}
            <Scene key='methodPage' title='攻略' hideNavBar icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='home' size={26} />}>
              <Scene key='method' component={Method} initial />
            </Scene>
            {/* 社区 */}
            <Scene titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navigationBarStyle={{ backgroundColor: '#37376F' }} key='communityPage' title='社区' icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='comments-o' size={26} />}>
              <Scene key='community' component={Community} />

            </Scene>
            {/* 共享 */}
            <Scene key='sharePage' title='共享' icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='share-alt' size={26} />} >
              <Scene key='share' hideNavBar component={Share} />
            </Scene>
            {/* 我的 */}
            <Scene titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navigationBarStyle={{ backgroundColor: '#37376F' }} key='myPage' title='我的' icon={({ focused }) => <Icon color={focused ? '#37376F' : 'black'} name='user-o' size={26} />}>
              <Scene key='my' component={My} />
            </Scene>
          </Tabs>
          {/* 登录 */}
          <Scene initial={!isLogin} hideNavBar key="login" component={Login} />
          <Scene key="signin" hideNavBar component={Signin} />
          <Scene key="choosecollege" hideNavBar component={Choosecollege} title='选择学院' renderRightButton={<View style={{ marginRight: 20 }}><Text style={{ fontSize: 19, color: '#ddd' }}>发送</Text></View>} titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navBarButtonColor='#fff' />
          <Scene key="forget" component={Forget} title='忘记密码'  backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          {/* 社区 */}
          <Scene title='发表状态' key="add" renderRightButton={<View style={{ marginRight: 20 }}><Text style={{ fontSize: 19, color: '#ddd' }}>发送</Text></View>} titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navBarButtonColor='#fff' hideTabBar component={Add} />
          <Scene title='评论' key="learndetails" renderRightButton={<View></View>} titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navBarButtonColor='#fff' hideTabBar component={Details} />
          <Scene key='notesks'component={Notes} title='添加笔记' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />

          {/* 一卡通 */}
          <Scene key='onecard' title='一卡通' component={Onecard} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} ></Scene>
          <Scene key='activate' component={Activate} title='一卡通激活' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} ></Scene>
          <Scene key='invest' component={Invest} title='一卡通充值' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='loss' component={Loss} title='一卡通丢失' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />

          {/* 社团组织 */}
          <Scene key='organization' component={Organization} title='社团组织' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='schoolorg' component={Schoolorg} title='校级组织类' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }}></Scene>
          <Scene key='practice' component={Practice} title='实践服务类' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='physical' component={Physical} title='体育健身类' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='academic' component={Academic} title='学术研究类' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='art' component={Art} title='文化艺术类' titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />

          {/* 学校 */}
          <Scene key='school' component={School} title='学校' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='synopsis' component={Synopsis} title='学校简介' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='subject' component={Subject} title='学科专业' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='schoollogo' component={Schoollogo} title='学校标志' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='scenery' component={Scenery} title='校园风光' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='personnel' component={Personnel} title='人才培养' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='govern' component={Govern} title='治理架构' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='science' component={Science} title='科学研究' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='obtainemployment' component={Obtainemployment} title='就业服务' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='shiziduiwu' component={Shiziduiwu} title='师资队伍' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='undergradute' component={Undergradute} title='本科生教育' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='gradute' component={Gradute} title='研究生教育' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='continus' component={Continus} title='继续教育' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='overseas' component={Overseas} title='留学生教育' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='course' component={Course} title='课程设置' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='practise' component={Practise} title='实践教学' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='teaching' component={Teaching} title='教学督导' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='famousteachers' component={FamousTeachers} title='教学名师' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='achievement' component={Achievement} title='教学成果' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='terrace' component={Terrace} title='科学研究平台' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='technology' component={Technology} title='自然科学与技术' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='human' component={Human} title='人文与社会科学' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='cooperate' component={Cooperate} title='合作交流' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='learning' component={Learning} title='学术期刊' backButtonImage={require('./assets/gonglve/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />

          {/* 学习 */}
          <Scene key='study' title='学习' component={Study} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zongheceping' title='综合学生测评' component={Zongheceping} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='scholarship' title='奖学金' component={Scholarship} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='second' title='第二课堂' component={Second} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='agrant' title='助学金' component={Agrant} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='schoolmates' title='杰出校友' component={Schoolmaths} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='cailimin' title='才利民' component={Cailimin} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='caijiming' title='蔡继明' component={Caijiming} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='chaiguanjing' title='柴冠景' component={Chaiguanjing} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='chenshuzeng' title='陈书增' component={Chenshuzeng} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='dengyingchao' title='邓颖超' component={Dengyingchao} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fanqianwen' title='范千文' component={Fanqianwen} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fengjiannan' title='冯健男' component={Fengjiannan} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fengshaohui' title='冯韶慧' component={Fengshaohui} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gesangdeji' title='格桑德吉' component={Gesangdeji} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='haobolin' title='郝柏林' component={Haobolin} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='hehong' title='贺泓' component={Hehong} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='houliang' title='侯亮' component={Houliang} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='lishushen' title='李树深' component={Lishushen} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='liyimin' title='李益民' component={Liyimin} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='lizhanshu' title='栗战书' component={Lizhanshu} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='liangxingjie' title='梁兴杰' component={Liangxingjie} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='linwanli' title='林万里' component={Linwanli} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='liujianya' title='刘建亚' component={Liujianya} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='liuxiaojun' title='刘晓军' component={Liuxiaojun} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='liuyongrui' title='刘永瑞' component={Liuyongrui} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='longzhuangwei' title='龙庄伟' component={Longzhuangwei} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='luhongchang' title='路洪昌' component={Luhongchang} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='mayujun' title='马宇骏' component={Mayujun} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='panglaixing' title='庞来兴' component={Panglaixing} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='situlanfang' title='司徒兰芳' component={Situlanfang} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='suguoan' title='苏国安' component={Suguoan} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wangfengming' title='王凤鸣' component={Wangfengming} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wangjinjiang' title='王进江' component={Wangjinjiang} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wangzhixin' title='王志欣' component={Wangzhixin} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='xiachuancai' title='夏传才' component={Xiachuancai} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yanluguang' title='严陆光' component={Yanluguang} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuanzhigang' title='袁志刚' component={Yuanzhigang} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zhanghe' title='张和' component={Zhanghe} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zhangmeizhi' title='张妹芝' component={Zhangmeizhi} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zhangwenmao' title='张文茂' component={Zhangwenmao} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zhangyanping' title='张砚平' component={Zhangyanping} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zhangzhiwei' title='张志伟' component={Zhangzhiwei} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          {/* 学院 */}
          <Scene key='college' title='学院' component={College} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='collegehistory' title='历史介绍' component={CollegeHistory} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='collegeteachers' title='学院领导' component={CollegeTeachers} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='collegemajor' title='专业介绍' component={CollegeMajor} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='collegeother' title='其他学院' component={CollegeOther} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          {/* 共享 */}
          <Scene key='cet46' title='四六级资料' component={Cet46} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='cet41' title='四级资料' component={Cet41} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='appear' title='四级高频词汇' component={Appear} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wordone' title='四级必背词汇' component={Word} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readone' title='阅读理解' component={Readone} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='one' title='第一篇大学专业选择' component={One} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='selectten1' title='十五选十' component={Selectten1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='selectfive1' title='七选五' component={SelectFive1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='one1' title='第一篇' component={One1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='Two2' title='第一篇' component={Two2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='three3' title='第一篇' component={Three3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='four4' title='第一篇' component={Four4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='first' title='第一篇' component={First} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='second1' title='第一篇' component={Second1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='third' title='第一篇' component={Third} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fourth' title='第一篇' component={Fourth} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='programme' title='考研资料' component={Programme} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          <Scene key='cet61' title='六级资料' component={Cet61} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gaopin6' title='高频词汇' component={Gaopin6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='word6' title='必背词汇' component={Word6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu6' title='十五选十' component={Shiwu6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu6' title='阅读练习题' component={Yuedu6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu61' title='十五选十（一）' component={Shiwu61} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu62' title='十五选十（二）' component={Shiwu62} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu63' title='十五选十（三）' component={Shiwu63} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu64' title='十五选十（四）' component={Shiwu64} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu61' title='Singapore' component={Yuedu61} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu62' title='Christianity' component={Yuedu62} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu63' title='Australia' component={Yuedu63} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu64' title='Egypt' component={Yuedu64} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          
          {/* 笔记 */}
          <Scene key='notes' title='笔记' component={Notes} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='notesDetails' hideNavBar component={NotesDetails}/>
          <Scene key='addNotes' hideNavBar component={AddNotes}/>

          <Scene key='experience' title='经验分享' component={Experience} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='expdetails' title='详情' component={ExpDetails} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='addexp' title='发布' component={AddExp} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          <Scene key='math1' title='数学一' component={Math1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose' title='选择题' component={Choose} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill' title='填空题' component={Fill} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer' title='简答题' component={Answer} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose1' title='选择题' component={Choose1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose2' title='选择题' component={Choose2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose3' title='选择题' component={Choose3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose4' title='选择题' component={Choose4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose5' title='选择题' component={Choose5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose6' title='选择题' component={Choose6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose7' title='选择题' component={Choose7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose8' title='选择题' component={Choose8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose9' title='选择题' component={Choose9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose10' title='选择题' component={Choose10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose11' title='选择题' component={Choose11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose12' title='选择题' component={Choose12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose13' title='选择题' component={Choose13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose14' title='选择题' component={Choose14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose15' title='选择题' component={Choose15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose16' title='选择题' component={Choose16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose17' title='选择题' component={Choose17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose18' title='选择题' component={Choose18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose19' title='选择题' component={Choose19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose20' title='选择题' component={Choose20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          
          <Scene key='fill1' title='填空题' component={Fill1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill2' title='填空题' component={Fill2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill3' title='填空题' component={Fill3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill4' title='填空题' component={Fill4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill5' title='填空题' component={Fill5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill6' title='填空题' component={Fill6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill7' title='填空题' component={Fill7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill8' title='填空题' component={Fill8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill9' title='填空题' component={Fill9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill10' title='填空题' component={Fill10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill11' title='填空题' component={Fill11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill12' title='填空题' component={Fill12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill13' title='填空题' component={Fill13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill14' title='填空题' component={Fill14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill15' title='填空题' component={Fill15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill16' title='填空题' component={Fill16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill17' title='填空题' component={Fill17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill18' title='填空题' component={Fill18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill19' title='填空题' component={Fill19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill20' title='填空题' component={Fill20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          
          <Scene key='answer1' title='解答题' component={Answer1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer2' title='解答题' component={Answer2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer3' title='解答题' component={Answer3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer4' title='解答题' component={Answer4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer5' title='解答题' component={Answer5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer6' title='解答题' component={Answer6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer7' title='解答题' component={Answer7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer8' title='解答题' component={Answer8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer9' title='解答题' component={Answer9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer10' title='解答题' component={Answer10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer11' title='解答题' component={Answer11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer12' title='解答题' component={Answer12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer13' title='解答题' component={Answer13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer14' title='解答题' component={Answer14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer15' title='解答题' component={Answer15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer16' title='解答题' component={Answer16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer17' title='解答题' component={Answer17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer18' title='解答题' component={Answer18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer19' title='解答题' component={Answer19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer20' title='解答题' component={Answer20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          
          <Scene key='math2' title='数学二' component={Math2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='math2choose2' title='选择题' component={Math2Choose2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='math2fill2' title='填空题' component={Math2Fill2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='math2answer2' title='简答题' component={Math2Answer2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose21' title='选择题' component={Choose21} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose22' title='选择题' component={Choose22} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='choose23' title='选择题' component={Choose23} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill21' title='填空题' component={Fill21} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill22' title='填空题' component={Fill22} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fill23' title='填空题' component={Fill23} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer21' title='解答题' component={Answer21} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer22' title='解答题' component={Answer22} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='answer23' title='解答题' component={Answer23} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          <Scene key='english1' title='英语一' component={English1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt' title='完形填空' component={Gestalt} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read' title='阅读理解' component={Read} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate' title='翻译' component={Translate} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt1' title='完型填空' component={Gestalt1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt2' title='完型填空' component={Gestalt2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt3' title='完型填空' component={Gestalt3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt4' title='完型填空' component={Gestalt4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt5' title='完型填空' component={Gestalt5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt6' title='完型填空' component={Gestalt6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt7' title='完型填空' component={Gestalt7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt8' title='完型填空' component={Gestalt8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt9' title='完型填空' component={Gestalt9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt10' title='完型填空' component={Gestalt10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt11' title='完型填空' component={Gestalt11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt12' title='完型填空' component={Gestalt12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt13' title='完型填空' component={Gestalt13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt14' title='完型填空' component={Gestalt14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt15' title='完型填空' component={Gestalt15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt16' title='完型填空' component={Gestalt16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt17' title='完型填空' component={Gestalt17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt18' title='完型填空' component={Gestalt18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt19' title='完型填空' component={Gestalt19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gestalt20' title='完型填空' component={Gestalt20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          
          <Scene key='read1' title='阅读理解' component={Read1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read2' title='阅读理解' component={Read2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read3' title='阅读理解' component={Read3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read4' title='阅读理解' component={Read4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read5' title='阅读理解' component={Read5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read6' title='阅读理解' component={Read6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read7' title='阅读理解' component={Read7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read8' title='阅读理解' component={Read8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read9' title='阅读理解' component={Read9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read10' title='阅读理解' component={Read10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read11' title='阅读理解' component={Read11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read12' title='阅读理解' component={Read12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read13' title='阅读理解' component={Read13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read14' title='阅读理解' component={Read14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read15' title='阅读理解' component={Read15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read16' title='阅读理解' component={Read16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read17' title='阅读理解' component={Read17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read18' title='阅读理解' component={Read18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read19' title='阅读理解' component={Read19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='read20' title='阅读理解' component={Read20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          
          <Scene key='translate1' title='翻译' component={Translate1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate2' title='翻译' component={Translate2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate3' title='翻译' component={Translate3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate4' title='翻译' component={Translate4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate5' title='翻译' component={Translate5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate6' title='翻译' component={Translate6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate7' title='翻译' component={Translate7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate8' title='翻译' component={Translate8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate9' title='翻译' component={Translate9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate10' title='翻译' component={Translate10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate11' title='翻译' component={Translate11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate12' title='翻译' component={Translate12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate13' title='翻译' component={Translate13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate14' title='翻译' component={Translate14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate15' title='翻译' component={Translate15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate16' title='翻译' component={Translate16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate17' title='翻译' component={Translate17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate18' title='翻译' component={Translate18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate19' title='翻译' component={Translate19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='translate20' title='翻译' component={Translate20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          <Scene key='english2' title='英语二' component={English2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='changnanju' title='长难句' component={Changnanju} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu' title='阅读' component={Yuedu} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail1' title='阅读-Text 1' component={TextDetail1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail2' title='阅读-Text 2' component={TextDetail2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail3' title='阅读-Text 3' component={TextDetail3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='textDetail4' title='阅读-Text 4' component={TextDetail4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wanxingtiankong' title='完形填空' component={Wanxingtiankong} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail1' title='完形填空-Text 1' component={WxtkDetail1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail2' title='完形填空-Text 2' component={WxtkDetail2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wxtkDetail3' title='完形填空-Text 3' component={WxtkDetail3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          
          <Scene key='politics' title='政治' component={Politics}  backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='politicsDetail1' title='2020年真题' component={PoliticsDetail1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='politicsDetail2' title='2019年真题' component={PoliticsDetail2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
 
          {/* 我的 */}
          <Scene key='biji' component={Biji} title='我的笔记' backButtonImage={require('./assets/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='tiezi' component={Xuexidongtai} renderTitle="我的帖子" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='tongxun' component={Tongxun} renderTitle="通讯录" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='guanyu' component={Guanyu} renderTitle="关于我们" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fankui' component={Fankui} renderTitle="用户反馈" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='tijiao' component={Tijiao} renderTitle="反馈成功" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="shezhi" component={Shezhi} renderTitle="设置" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="mima" component={Mima} renderTitle="重置密码" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="touxiang" component={Touxiang} renderTitle="我的头像" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="myexperence" component={Myexperence} renderTitle="我的经验" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

        </Scene>
      </Router>
    </>
  );
};
export default App;