export default class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._nameSelector = nameSelector;
        this._jobSelector = jobSelector;
    }

    getUserInfo() {
        return {
            name: this._nameSelector.textContent,
            job: this._jobSelector.textContent,
        };
    }

    setUserInfo(info) {
        this._nameSelector.textContent = info.profile_name;
        this._jobSelector.textContent = info.profile_occupation;
    }
}
