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

// 共享
import Share from './src/share/Share';
import Experience from './src/share/experience/experience';
import Cet46 from './src/share/cet46/cet46';
import Cet41 from './src/share/cet46/Four/Cet41';
import Word from './src/share/cet46/Four/vocabulary/Word';
import Appear from './src/share/cet46/Four/frequency/Appear';
import Readone from './src/share/cet46/Four/read/Readone';
import One from './src/share/cet46/Four/read/readone/One';
import Cet61 from './src/share/cet46/Six/Cet61';
import Bibei from './src/share/cet46/Six/src/Bibei';
import Gaopin from './src/share/cet46/Six/src/Gaopin';
import Shiwu from './src/share/cet46/Six/src/Shiwu';
import Zuowen from './src/share/cet46/Six/src/Zuowen';
import Yuedu from './src/share/cet46/Six/src/Yuedu';
import Zuowen1 from './src/share/cet46/Six/src/src/Zuowen1';
import Zuowen2 from './src/share/cet46/Six/src/src/Zuowen2';
import Zuowen3 from './src/share/cet46/Six/src/src/Zuowen3';
import Zuowen4 from './src/share/cet46/Six/src/src/Zuowen4';
import Zuowen5 from './src/share/cet46/Six/src/src/Zuowen5';
import Zuowen6 from './src/share/cet46/Six/src/src/Zuowen6';
import Zuowen7 from './src/share/cet46/Six/src/src/Zuowen7';
import Zuowen8 from './src/share/cet46/Six/src/src/Zuowen8';
import Zuowen9 from './src/share/cet46/Six/src/src/Zuowen9';
import Zuowen10 from './src/share/cet46/Six/src/src/Zuowen10';
import Yuedu1 from './src/share/cet46/Six/src/src/Yuedu1';
import Yuedu2 from './src/share/cet46/Six/src/src/Yuedu2';
import Yuedu3 from './src/share/cet46/Six/src/src/Yuedu3';
import Yuedu4 from './src/share/cet46/Six/src/src/Yuedu4';
import Yuedu5 from './src/share/cet46/Six/src/src/Yuedu5';
import Yuedu6 from './src/share/cet46/Six/src/src/Yuedu6';
import Yuedu7 from './src/share/cet46/Six/src/src/Yuedu7';
import Yuedu8 from './src/share/cet46/Six/src/src/Yuedu8';
import Yuedu9 from './src/share/cet46/Six/src/src/Yuedu9';
import Yuedu10 from './src/share/cet46/Six/src/src/Yuedu10';
import Yuedu11 from './src/share/cet46/Six/src/src/Yuedu11';
import Yuedu12 from './src/share/cet46/Six/src/src/Yuedu12';
import Yuedu13 from './src/share/cet46/Six/src/src/Yuedu13';
import Yuedu14 from './src/share/cet46/Six/src/src/Yuedu14';
import Yuedu15 from './src/share/cet46/Six/src/src/Yuedu15';
import Yuedu16 from './src/share/cet46/Six/src/src/Yuedu16';
import Yuedu17 from './src/share/cet46/Six/src/src/Yuedu17';
import Yuedu18 from './src/share/cet46/Six/src/src/Yuedu18';
import Yuedu19 from './src/share/cet46/Six/src/src/Yuedu19';
import Yuedu20 from './src/share/cet46/Six/src/src/Yuedu20';
import Shiwu1 from './src/share/cet46/Six/src/src/Shiwu1';
import Shiwu2 from './src/share/cet46/Six/src/src/Shiwu2';
import Shiwu3 from './src/share/cet46/Six/src/src/Shiwu3';
import Shiwu4 from './src/share/cet46/Six/src/src/Shiwu4';
import Shiwu5 from './src/share/cet46/Six/src/src/Shiwu5';
import Shiwu6 from './src/share/cet46/Six/src/src/Shiwu6';
import Shiwu7 from './src/share/cet46/Six/src/src/Shiwu7';
import Shiwu8 from './src/share/cet46/Six/src/src/Shiwu8';
import Shiwu9 from './src/share/cet46/Six/src/src/Shiwu9';
import Shiwu10 from './src/share/cet46/Six/src/src/Shiwu10';
import Notes from './src/share/notes/notes';
import Programme from './src/share/programme/programme';
import Math1 from './src/share/programme/Math1/Math1';
import Math2 from './src/share/programme/Math2/Math2';
import English1 from './src/share/programme/English1/English1';
import English2 from './src/share/programme/English2/English2';
import Politics from './src/share/programme/Politics/Politics';

// 我的
import My from './src/my/My';
import Shoucang from './src/my/Shoucang';
import Tongxun from './src/my/Tongxun';
import Guanyu from './src/my/Guanyu';
import Fankui from './src/my/Fankui';
import Tijiao from './src/my/Tijiao';
import Shezhi from './src/my/Shezhi';
import Mima from './src/my/Mima';
import Xuexidongtai from './src/my/Xuexidongtai'
import Touxiang from './src/my/Touxiang'

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
          <Scene title='评论' key="details" renderRightButton={<View></View>} titleStyle={{ flex: 1, textAlign: 'center', color: '#fff' }} navBarButtonColor='#fff' hideTabBar component={Details} />

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
          <Scene key='programme' title='考研资料' component={Programme} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='notes' title='笔记' component={Notes} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='experience' title='经验分享' component={Experience} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          {/**四级 */}
          <Scene key='cet41' title='四级资料' component={Cet41} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='cet61' title='六级资料' component={Cet61} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='appear' title='四级高频词汇' component={Appear} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='gaopin' title='六级高频词汇' component={Gaopin} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='wordone' title='四级必背词汇' component={Word} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='bibei' title='六级必背词汇' component={Bibei} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='readone' title='阅读理解' component={Readone} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu' title='六级阅读理解' component={Yuedu} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu' title='六级十五选十' component={Shiwu} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen' title='六级作文' component={Zuowen} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu1' title='六级十五选十（一）' component={Shiwu1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu2' title='六级十五选十（二）' component={Shiwu2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu3' title='六级十五选十（三）' component={Shiwu3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu4' title='六级十五选十（四）' component={Shiwu4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu5' title='六级十五选十（五）' component={Shiwu5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu6' title='六级十五选十（六）' component={Shiwu6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu7' title='六级十五选十（七）' component={Shiwu7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu8' title='六级十五选十（八）' component={Shiwu8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu9' title='六级十五选十（九）' component={Shiwu9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='shiwu10' title='六级十五选十（十）' component={Shiwu10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          
          <Scene key='yuedu1' title='Singapore' component={Yuedu1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu2' title='Christianity' component={Yuedu2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu3' title='Australia' component={Yuedu3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu4' title='Egypt' component={Yuedu4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu5' title='体育休闲' component={Yuedu5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu6' title='旅游休闲' component={Yuedu6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu7' title='发挥你的潜力' component={Yuedu7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu8' title='社会文化' component={Yuedu8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu9' title='休闲艺术' component={Yuedu9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu10' title='eBay购物' component={Yuedu10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu11' title='心理健康' component={Yuedu11} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu12' title='Campus Life' component={Yuedu12} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu13' title='手语' component={Yuedu13} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu14' title='家庭生活' component={Yuedu14} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu15' title='人文知识' component={Yuedu15} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu16' title='生活现象' component={Yuedu16} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu17' title='教育' component={Yuedu17} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu18' title='娱乐' component={Yuedu18} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu19' title='政治军事' component={Yuedu19} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='yuedu20' title='生活方式' component={Yuedu20} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

          <Scene key='zuowen1' title='喜欢居住在大城市or乡村' component={Zuowen1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen2' title='英国就业率' component={Zuowen2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen3' title='快餐在中国快速发展' component={Zuowen3} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen4' title='小企业的劣势' component={Zuowen4} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen5' title='助学贷款的优势' component={Zuowen5} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen6' title='你是否同意...' component={Zuowen6} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen7' title='种种承诺' component={Zuowen7} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen8' title='你对出版物应该审查持什么态度' component={Zuowen8} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen9' title='独生子女的利弊' component={Zuowen9} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='zuowen10' title='为小学生选择一种牌子的面包' component={Zuowen10} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          
          <Scene key='one' title='第一篇大学专业选择' component={One} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='math1' title='数学一' component={Math1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='math2' title='数学二' component={Math2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='english1' title='英语一' component={English1} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='english2' title='英语二' component={English2} backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='politics' title='政治' component={Politics}  backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          {/* 我的 */}
          <Scene key='shoucang' component={Shoucang} title='我的收藏' backButtonImage={require('./assets/left.png')} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} navigationBarStyle={{ backgroundColor: '#37376F' }} />
          <Scene key='tiezi' component={Xuexidongtai} renderTitle="我的帖子" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='tongxun' component={Tongxun} renderTitle="通讯录" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='guanyu' component={Guanyu} renderTitle="关于我们" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='fankui' component={Fankui} renderTitle="用户反馈" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key='tijiao' component={Tijiao} renderTitle="反馈成功" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="shezhi" component={Shezhi} renderTitle="设置" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="mima" component={Mima} renderTitle="重置密码" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />
          <Scene key="touxiang" component={Touxiang} renderTitle="我的头像" backButtonImage={require('./assets/gonglve/left.png')} navigationBarStyle={{ backgroundColor: '#37376F' }} titleStyle={{ flex: 1, textAlign: 'center', color: 'white', marginLeft: -40 }} />

        </Scene>
      </Router>
    </>
  );
};
export default App;