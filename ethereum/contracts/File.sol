pragma solidity ^0.4.17;
pragma experimental ABIEncoderV2;

contract CampaignFactory{
    address[] public deployedFiles;
    mapping(address=>bool) public users;
    address[] public userAddress;
    string[] public userNames;
    string[] public userEmails;

    function createCampaign(string fname,string mhash,string adate,string aownerName) public {
        address newFile = new File(fname,mhash,adate,aownerName,msg.sender);

        deployedFiles.push(newFile);
    }

    function getDeployedFiles() public view returns (address[]){
        return deployedFiles;
    }
    function register(string myName,string email) public {
        users[msg.sender] = true;
        userAddress.push(msg.sender);
        userNames.push(myName);
        userEmails.push(email);
    }
    function accountStatus(address add) public view returns (bool) {
        return users[add];
    }
    function getUserNames() public view returns (string[]) {
        return userNames;
    }
    function getUserEmails() public view returns (string[]) {
        return userEmails;
    }
    function getUserAddress() public view returns (address[]) {
        return userAddress;
    }
}

contract File{

    string[] public versions;
    address[] public versionEditer;
    string[] public versionEditerName;
    address public owner;
    string public ownerName;
    string public date;
    string public fileName;
    string public currentHash;
    string public mainHash;
    address public receiver;
    string public receiverName;

    modifier restricted(){
        require(msg.sender == owner);
        _;
    }

    function File(string fileN, string mainH,string adate,string aownerName,address creator) public{
        owner = creator;
        fileName = fileN;
        mainHash = mainH;
        currentHash = mainH;
        date = adate;
        ownerName = aownerName;
        versions.push(mainH);
        versionEditer.push(creator);
        versionEditerName.push(aownerName);
        receiver = creator;
        receiverName = aownerName;

    }

    function getOwner() public view returns (address){
        return owner;
    }

    function addNewVersion(string newHash,string name) public {
        versions.push(newHash);
        versionEditerName.push(name);
        versionEditer.push(msg.sender);
        currentHash = newHash;
    }

    function getFileName() public view returns (string){
        return fileName;
    }

    function getCurrentVersion() public view returns (string){
        return currentHash;
    }


    function getVersion() public view returns (string []){
        return versions;
    }

    function setReceiver(address receiverA,string nameR) public {
        require(receiver==owner);
        receiver=receiverA;
        receiverName=nameR;
    } 
    
    function resetReciever() public {
        receiver=owner;
        receiverName=ownerName;
    }

    function getReceiver() public view returns (address,string) {
        return (receiver,receiverName);
    }
    
    function getVersionEditer() public view returns (address[]) {
        return versionEditer;
    }
    
    function getVersionEditerName () public view returns (string[]) {
        return versionEditerName;
    }

    function getSummary() public view returns (string, string, string, string, address){
        return (
            fileName,
            currentHash,
            date,
            ownerName,
            owner
            );
    }

}
