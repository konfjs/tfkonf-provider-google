import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirebaseAppCheckDebugTokenArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFirebaseAppCheckDebugTokenArgs {
  app_id: string;
  display_name: string;
  token: string;
  timeouts?: GoogleFirebaseAppCheckDebugTokenArgsTimeouts;
}

export class google_firebase_app_check_debug_token extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleFirebaseAppCheckDebugTokenArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_firebase_app_check_debug_token", resourceName);
  }

  get app_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_id`;
  }

  get debug_token_id(): string {
    return `${this.resourceType}.${this.resourceName}.debug_token_id`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get token(): string {
    return `${this.resourceType}.${this.resourceName}.token`;
  }
}
