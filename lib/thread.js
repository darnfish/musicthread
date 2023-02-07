"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Thread {
    constructor(json, api) {
        this.setup(json);
        this.api = api;
    }
    async addLink(url) {
        const { data } = await this.api.axios.post('add-link', {
            url,
            thread: this.key
        });
        return data.link;
    }
    setup(json) {
        this.key = json.key;
        this.author = json.author;
        this.title = json.title;
        this.description = json.description;
        this.tags = json.tags;
        this.is_private = json.is_private;
        this.page_url = json.page_url;
    }
}
exports.default = Thread;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZWFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RocmVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLE1BQXFCLE1BQU07SUFjMUIsWUFBWSxJQUFhLEVBQUUsR0FBZ0I7UUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQVc7UUFDeEIsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUN0RCxHQUFHO1lBQ0gsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHO1NBQ2hCLENBQUMsQ0FBQTtRQUVGLE9BQU8sSUFBSSxDQUFDLElBQVksQ0FBQTtJQUN6QixDQUFDO0lBRU8sS0FBSyxDQUFDLElBQWE7UUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFBO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUV6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFBO1FBRW5DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUE7UUFFakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQzlCLENBQUM7Q0FDRDtBQXhDRCx5QkF3Q0MifQ==