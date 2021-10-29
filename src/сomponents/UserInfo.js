export default class UserInfo {
    constructor({ name, about, _id, avatar }) {
        this._name = name;
        this._job = about;
        this._id = _id;
        this._avatar = avatar;
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._job.textContent,
        };
    }

    setUserInfo(info) {
        this._name.textContent = info.name;
        this._job.textContent = info.about;
        this._id = info._id;
        this._avatar.style.backgroundImage = `url(${info.avatar})`;
    }
}
