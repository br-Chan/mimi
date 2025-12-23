# MIMI - the Moderation In Messaging Interface

## NOTICE to visitors: I am very sad (I have no money)

I have lots of plans for this project, and wanted to get it done by the summer of 2025/2026. I've actually already finished half the project (kind of; not really; actually not at all). If I were to deploy this, we can already chat to each other in a real-time chatroom and MIMI the moderation bot will alter our messages to make them family and corporation friendly.

...And then I run out of AI tokens. Using the free Gemini plan only gives me so many tokens each day, and I'm not keen on the paid plans, meaning that the actual conversation experience is underwhelming: only about 20 messages can be sent per day. One alternative is to make users provide their own tokens, but being able to just hop on a site and start playing with it (for free) is half the fun.

So, I will be sharing all of my plans for this project here; if a wealthy benefactor with a supply of LLM API tokens thinks this stupid project is hilarious and needs to exist, then let me know in an GitHub issue. Otherwise, this project will sadly end up having a lot less whimsy.

## My Plan

This project's backstory is set in the near (but hopefully not too near) future. It centres around MIMI, a fictional surveillance and moderation bot -- she was created with the intention to be implemented across all chat platforms on the internet to make them clean and standardised across the world. All they need is funding and backing, so they market the bot as a cute, personified robot and use flashy terms like being "powered by AI" and being "deployed with Vercel".

My goal is to produce the fictional prototype for MIMI that the creators intend to demo to their shareholders and let the wider public use, much like how ChatGPT was released to the public at its inception. This prototype will consist of two parts:

### MIMI's Delivery Service

A chat application that incorporates MIMI, who aggressively moderates every message you send. You can enter chatrooms and send messages like you would in Discord or WhatsApp, but MIMI will moderate every single message through her moderation pipeline.

1. user sends message
2. MIMI analyses message
3. MIMI scores message based on various moderation rules
4. If score is too low, MIMI will replace the message with one of a number of default messages
5. If score not too low but still bad, MIMI will tweak the message based on the broken rules
6. message is sent to the chat (with indication of how good the orig message was (colour shading?))

The moderation rules (and system prompt for MIMI) are already present in this codebase. The aim is to give the (real life) users firsthand experience with what moderation at this scale could look like -- having your own autonomy and self-governance ripped out of your hands and having no control over the words that come out of your digital mouth. An equally important aim is to have the experience be funny and stupid. Even through testing it myself, it was hilarious to watch the AI completely dissolve my own words into something completely dry and ordinary.

### The MIMI-tation game

In the fictional world, this part of the prototype is a game used "to train MIMI and improve her moderation capabilities". It's a subversion of the Turing Test, AKA the Imitation Game, a game coined by Alan Turing in which a person must identify whether they have spoken to a human or a machine after having a conversation with them.

1. A group of players chat in a chatroom for 2 minutes
2. When the time is up, the chat is processed and a log of the conversation is given to MIMI
3. MIMI analyses the chat and for each player guesses if they are a machine or a human
4. Player/s are eliminated
5. Repeat steps 1-4 as needed, and last player standing wins

Variations:
- MIMI is told only 1 player is a bot, and eliminates the player she thinks is the bot each round (the game ends when 1 player remains)
- MIMI is told all but 1 player is a bot, and eliminates all players she believes are bots (therefore only 1 round, and the player that is spared is the winner)
- MIMI is told there is a mystery number of bots, and eliminates a variable number of players (therefore only 1 round, and there could be multiple winners)

## The Point of this project

1. it's funny. They're 2 ideas that I would love to spend time on; I only created the MIMI story so that I could work them together into the same codebase.
2. the theme of the project is to demonstrate both the good and dark sides of products or innovations that become wildly popular in a very short time (e.g. generative AI). It's fun to play around with these new technologies, but it can also be very dangerous to let them take control of society in such a short time. Let us hope that something like MIMI does not ever become reality, no matter how cute their mascot is.
3. it's funny

## Tech stack

- React
- Tanstack Start
- Tailwind CSS & ShadCN
- Supabase
- Firebase & Gemini API
- Biome for linting *and* formatting!

---

# Getting Started

To run this application:

```bash
pnpm install
pnpm start
```

# Building For Production

To build this application for production:

```bash
pnpm build
```

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:

```bash
pnpm test
```

## Design

This project uses [Material UI](https://mui.com/material-ui/).


## Linting & Formatting

This project uses [Biome](https://biomejs.dev/) for linting and formatting. The following scripts are available:


```bash
pnpm lint
pnpm format
pnpm check
```



## Routing
This project uses [TanStack Router](https://tanstack.com/router). The initial setup is a file based router. Which means that the routes are managed as files in `src/routes`.

### Adding A Route

To add a new route to your application just add another a new file in the `./src/routes` directory.

TanStack will automatically generate the content of the route file for you.

Now that you have two routes you can use a `Link` component to navigate between them.

### Adding Links

To use SPA (Single Page Application) navigation you will need to import the `Link` component from `@tanstack/react-router`.

```tsx
import { Link } from "@tanstack/react-router";
```

Then anywhere in your JSX you can use it like so:

```tsx
<Link to="/about">About</Link>
```

This will create a link that will navigate to the `/about` route.

More information on the `Link` component can be found in the [Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).

### Using A Layout

In the File Based Routing setup the layout is located in `src/routes/__root.tsx`. Anything you add to the root route will appear in all the routes. The route content will appear in the JSX where you use the `<Outlet />` component.

Here is an example layout that includes a header:

```tsx
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
```

The `<TanStackRouterDevtools />` component is not required so you can remove it if you don't want it in your layout.

More information on layouts can be found in the [Layouts documentation](https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#layouts).


## Data Fetching

There are multiple ways to fetch data in your application. You can use TanStack Query to fetch data from a server. But you can also use the `loader` functionality built into TanStack Router to load the data for a route before it's rendered.

For example:

```tsx
const peopleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/people",
  loader: async () => {
    const response = await fetch("https://swapi.dev/api/people");
    return response.json() as Promise<{
      results: {
        name: string;
      }[];
    }>;
  },
  component: () => {
    const data = peopleRoute.useLoaderData();
    return (
      <ul>
        {data.results.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    );
  },
});
```

Loaders simplify your data fetching logic dramatically. Check out more information in the [Loader documentation](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters).

### React-Query

React-Query is an excellent addition or alternative to route loading and integrating it into you application is a breeze.

First add your dependencies:

```bash
pnpm add @tanstack/react-query @tanstack/react-query-devtools
```

Next we'll need to create a query client and provider. We recommend putting those in `main.tsx`.

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ...

const queryClient = new QueryClient();

// ...

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
```

You can also add TanStack Query Devtools to the root route (optional).

```tsx
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools />
    </>
  ),
});
```

Now you can use `useQuery` to fetch your data.

```tsx
import { useQuery } from "@tanstack/react-query";

import "./App.css";

function App() {
  const { data } = useQuery({
    queryKey: ["people"],
    queryFn: () =>
      fetch("https://swapi.dev/api/people")
        .then((res) => res.json())
        .then((data) => data.results as { name: string }[]),
    initialData: [],
  });

  return (
    <div>
      <ul>
        {data.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

You can find out everything you need to know on how to use React-Query in the [React-Query documentation](https://tanstack.com/query/latest/docs/framework/react/overview).

## State Management

Another common requirement for React applications is state management. There are many options for state management in React. TanStack Store provides a great starting point for your project.

First you need to add TanStack Store as a dependency:

```bash
pnpm add @tanstack/store
```

Now let's create a simple counter in the `src/App.tsx` file as a demonstration.

```tsx
import { useStore } from "@tanstack/react-store";
import { Store } from "@tanstack/store";
import "./App.css";

const countStore = new Store(0);

function App() {
  const count = useStore(countStore);
  return (
    <div>
      <button onClick={() => countStore.setState((n) => n + 1)}>
        Increment - {count}
      </button>
    </div>
  );
}

export default App;
```

One of the many nice features of TanStack Store is the ability to derive state from other state. That derived state will update when the base state updates.

Let's check this out by doubling the count using derived state.

```tsx
import { useStore } from "@tanstack/react-store";
import { Store, Derived } from "@tanstack/store";
import "./App.css";

const countStore = new Store(0);

const doubledStore = new Derived({
  fn: () => countStore.state * 2,
  deps: [countStore],
});
doubledStore.mount();

function App() {
  const count = useStore(countStore);
  const doubledCount = useStore(doubledStore);

  return (
    <div>
      <button onClick={() => countStore.setState((n) => n + 1)}>
        Increment - {count}
      </button>
      <div>Doubled - {doubledCount}</div>
    </div>
  );
}

export default App;
```

We use the `Derived` class to create a new store that is derived from another store. The `Derived` class has a `mount` method that will start the derived store updating.

Once we've created the derived store we can use it in the `App` component just like we would any other store using the `useStore` hook.

You can find out everything you need to know on how to use TanStack Store in the [TanStack Store documentation](https://tanstack.com/store/latest).

# Demo files

Files prefixed with `demo` can be safely deleted. They are there to provide a starting point for you to play around with the features you've installed.

# Learn More

You can learn more about all of the offerings from TanStack in the [TanStack documentation](https://tanstack.com).
