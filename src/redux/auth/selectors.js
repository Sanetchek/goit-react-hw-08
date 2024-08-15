export const selectIsAuthenticated = (state) => state.auth.isLoggedIn;

export const selectIsRefreshed = (state) => state.auth.isRefreshing;

export const selectUser = (state) => state.auth.user;