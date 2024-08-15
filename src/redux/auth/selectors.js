export const selectIsAuthenticated = (state) => state.auth.isLoggedIn;

export const selectIsRefreshed = (state) => state.auth.isRefreshing;

export const selectToken = (state) => state.auth.token;

export const selectLoaded = (state) => state.auth.loading;

export const selectError = (state) => state.auth.error;

export const selectUser = (state) => state.auth.user;