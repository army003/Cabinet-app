import { api } from '.';

const applicatons = api.injectEndpoints({
  endpoints: build => ({})
});
export const { useApplicatonsQuery, usePackedApplicationMutation } = applicatons;
