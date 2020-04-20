import { RootState } from "../utils/redux";

export const getMessageQueue = (state: RootState) => state.messages.messageQueue;
export const getNextMessage = (state: RootState) => state.messages.nextMessage;

export const getSpotifyToken = (state: RootState) => {
    const integrations = state.auth.integrations;
    return (integrations.spotify && integrations.spotify.access_token) || '';
};
export const getSpotifyRefreshToken = (state: RootState) => {
  const integrations = state.auth.integrations;
  return (integrations.spotify && integrations.spotify.refresh_token) || "";
};
export const getCurrentlyPlayingAudio = (state: RootState) => state.music.currentlyPlaying;