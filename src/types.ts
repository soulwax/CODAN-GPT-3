export const TYPES = {
  Bot: Symbol('Bot'),
  Client: Symbol('Client'),
  Token: Symbol('Token'),
  CommandResponder: Symbol('CommandResponder'),
  CommandListener: Symbol('CommandListener')
}

export type DiscordIntents = {
  [key: string]: number
}
