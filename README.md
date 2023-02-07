# MusicThread
Fully typed API wrapper for the [MusicThread](https://musicthread.app) API.

## Installation
```
yarn add musicthread
```

## Usage
```ts
import MusicThread from 'musicthread'

const mt = new MusicThread(process.env.MT_API_KEY) // optional: api key

// Create a thread
const { thread } = await mt.createThread('Title', 'Description', ['Tag1', 'Tag2'], false)

// Add a link
const link = await thread.addLink('https://www.youtube.com/watch?v=sXpCyrEH1kk')
```

## License
MIT
