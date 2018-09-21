pragma solidity ^0.4.23;

pragma experimental ABIEncoderV2;

contract UserActivity {
  enum Activity{login,logout}
  struct UserAct{
    string ip;
    Activity activity;
    string time;
  }

  mapping(address=>UserAct[])activities;
  
  function userLogin(address _user,string _ip,string _time) public{
    UserAct memory userAct =UserAct(_ip,Activity.login,_time);
    activities[_user].push(userAct);
  }

  function userLogout(address _user,string _ip,string _time) public{
    UserAct memory userAct =UserAct(_ip,Activity.logout,_time);
    activities[_user].push(userAct);
  }

  function getNumber(address _user) public view returns (uint){
      return activities[_user].length;
  }
  
  function getUserActivities(address _user)public returns (string[],Activity[],string[]){
      uint size= getNumber(_user);
      string[] memory ips=new string[](size);
      Activity[] memory userActivities=new Activity[](size);
      string[] memory userTimes=new string[](size);
      
      for(uint i=0;i<size;i++){
          ips[i]=activities[_user][i].ip;
          userActivities[i]=(activities[_user][i].activity);
          userTimes[i]=(activities[_user][i].time);
      }
      return (ips,userActivities,userTimes);
  }
}
