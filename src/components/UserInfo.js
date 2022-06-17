export class UserInfo {
    constructor(
        profileName,
        profileBio
    ) {
        this._profileName = document.querySelector(profileName);
        this._profileBio = document.querySelector(profileBio);
    };

    getUserInfo() {
        this._profileInfo = {
            name: this._profileName.textContent,
            bio: this._profileBio.textContent
        }

        return this._profileInfo
    };

    setUserInfo(item) {
        this._profileName.textContent = item.name;
        this._profileBio.textContent = item.bio;
    }
}