"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const thread_1 = __importDefault(require("./thread"));
class MusicThread {
    constructor(token) {
        this.token = token;
        this.axios = this.createAxios();
    }
    /**
     * Threads
     */
    async fetchThread(key) {
        const { data } = await this.axios.get(`thread/${key}`);
        return Object.assign(Object.assign({}, data), { thread: new thread_1.default(data.thread, this) });
    }
    async createThread(title, description, tags, isPrivate) {
        const { data } = await this.axios.post('new-thread', {
            title,
            description,
            tags,
            is_private: isPrivate
        });
        return Object.assign(Object.assign({}, data), { thread: new thread_1.default(data.thread, this) });
    }
    async fetchThreads() {
        this.authenticationRequired();
        const { data } = await this.axios.get('threads');
        return data.threads.map(thread => new thread_1.default(thread, this));
    }
    async fetchThreadsForAccount(accountRequestToken) {
        const { data } = await this.axios.get(`account/${accountRequestToken}`);
        return Object.assign(Object.assign({}, data), { threads: data.threads.map(thread => new thread_1.default(thread, this)) });
    }
    async fetchFeaturedThreads() {
        const { data } = await this.axios.get('featured');
        return data.threads.map(thread => new thread_1.default(thread, this));
    }
    async fetchBookmarks() {
        this.authenticationRequired();
        const { data } = await this.axios.get('bookmarks');
        return data.threads.map(thread => new thread_1.default(thread, this));
    }
    createAxios() {
        return axios_1.default.create({
            baseURL: 'https://musicthread.app/api/v0/',
            headers: Object.assign({}, (this.token ? {
                Authorization: `Bearer ${this.token}`
            } : {}))
        });
    }
    authenticationRequired() {
        if (!this.token)
            throw new Error('Musicthread: An API token is required for this endpoint. You can generate one at https://musicthread.app/account/new-token');
    }
}
exports.default = MusicThread;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBNEM7QUFFNUMsc0RBQTZCO0FBVTdCLE1BQXFCLFdBQVc7SUFLL0IsWUFBWSxLQUFjO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ2hDLENBQUM7SUFFRDs7T0FFRztJQUVILEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBVztRQUM1QixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBc0IsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBRTNFLHVDQUNJLElBQUksS0FDUCxNQUFNLEVBQUUsSUFBSSxnQkFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQ3JDO0lBQ0YsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBYSxFQUFFLFdBQW1CLEVBQUUsSUFBYyxFQUFFLFNBQWtCO1FBQ3hGLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUF1QixZQUFZLEVBQUU7WUFDMUUsS0FBSztZQUNMLFdBQVc7WUFDWCxJQUFJO1lBQ0osVUFBVSxFQUFFLFNBQVM7U0FDckIsQ0FBQyxDQUFBO1FBRUYsdUNBQ0ksSUFBSSxLQUNQLE1BQU0sRUFBRSxJQUFJLGdCQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFDckM7SUFDRixDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVk7UUFDakIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUE7UUFFN0IsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQXVCLFNBQVMsQ0FBQyxDQUFBO1FBRXRFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGdCQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDNUQsQ0FBQztJQUVELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBMkI7UUFDdkQsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQWlDLFdBQVcsbUJBQW1CLEVBQUUsQ0FBQyxDQUFBO1FBRXZHLHVDQUNJLElBQUksS0FDUCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGdCQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQzdEO0lBQ0YsQ0FBQztJQUVELEtBQUssQ0FBQyxvQkFBb0I7UUFDekIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQStCLFVBQVUsQ0FBQyxDQUFBO1FBRS9FLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGdCQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDNUQsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjO1FBQ25CLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO1FBRTdCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUF5QixXQUFXLENBQUMsQ0FBQTtRQUUxRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxnQkFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQzVELENBQUM7SUFFTyxXQUFXO1FBQ2xCLE9BQU8sZUFBSyxDQUFDLE1BQU0sQ0FBQztZQUNuQixPQUFPLEVBQUUsaUNBQWlDO1lBQzFDLE9BQU8sb0JBQ0gsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsYUFBYSxFQUFFLFVBQVUsSUFBSSxDQUFDLEtBQUssRUFBRTthQUNyQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDUDtTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFFTyxzQkFBc0I7UUFDN0IsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyw0SEFBNEgsQ0FBQyxDQUFBO0lBQy9JLENBQUM7Q0FDRDtBQW5GRCw4QkFtRkMifQ==