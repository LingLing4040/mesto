export default class UserInfo {
    constructor({ name, job }) {
        this._name = name;
        this._job = job;
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            job: this._job.textContent,
        };
    }

    setUserInfo(info) {
        this._name.textContent = info.profile_name;
        this._job.textContent = info.profile_occupation;
    }
}
