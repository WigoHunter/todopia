declare module "meteor/apollo" {
  import Apollo from "meteor/apollo";

  function getUser(token: string): any;
}
