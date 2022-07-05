export class UserInfo {
    constructor(
        profileName,
        profileBio,
        profileAvatar
    ) {
        this._profileName = document.querySelector(profileName);
        this._profileBio = document.querySelector(profileBio);
        this._profileAvatar = document.querySelector(profileAvatar);
    };

    getUserInfo() {
        this._profileInfo = {
            name: this._profileName.textContent,
            about: this._profileBio.textContent,
            avatar: this._profileAvatar.src
        }

        return this._profileInfo;
    };

    setUserInfo(item) {
        this._profileName.textContent = item.name;
        this._profileBio.textContent = item.about;
        this._profileAvatar.src = item.avatar;
    }
}