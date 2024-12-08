import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeSyncAuthorizationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApigeeSyncAuthorizationArgs {
  identities: string[];
  name: string;
  timeouts?: GoogleApigeeSyncAuthorizationArgsTimeouts;
}

export class google_apigee_sync_authorization extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleApigeeSyncAuthorizationArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_sync_authorization", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get identities(): string {
    return `${this.resourceType}.${this.resourceName}.identities`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }
}
