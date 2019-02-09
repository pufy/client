import * as actions from "./constanst";

export const signupCatalog = (catalog) => {
  return {
      type: actions.SIGNUP_CATALOG,
      catalog
  }
};

export const signupCatalogSuccess = (data) => ({
  type: actions.SIGNUP_CATALOG_SUCCESS,
  data
});

export const signupCatalogFailed = (error) => ({
  type: actions.SIGNUP_CATALOG_FAILED,
  error
});