export default class UserInfo {
    constructor({ name, about }) {
        this._name = name;
        this._job = about;
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
    }
}
